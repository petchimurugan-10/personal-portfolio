import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contactFormSchema } from "@/lib/validators";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validate with Zod (includes XSS protection)
    const validation = contactFormSchema.safeParse(body);
    
    if (!validation.success) {
      return NextResponse.json(
        { error: validation.error.issues[0]?.message || "Invalid form data" },
        { status: 400 }
      );
    }

    const { name, email, message } = validation.data;

    // Validate env vars are configured
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      // Still return success so the form UX works during development
      return NextResponse.json({ success: true }, { status: 200 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD, // Gmail App Password (not your real password)
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER, // Send to yourself
      replyTo: email,             // Hitting "Reply" goes to the sender
      subject: `New message from ${name} — Portfolio`,
      html: `
        <div style="font-family: -apple-system, sans-serif; max-width: 520px; margin: 0 auto; background: #0d1117; color: #e6edf3; border-radius: 12px; overflow: hidden; border: 1px solid #21262d;">
          <div style="background: linear-gradient(135deg, #00f5ff22, #bf5af222); padding: 28px 32px; border-bottom: 1px solid #21262d;">
            <h2 style="margin: 0; font-size: 20px; color: #00f5ff;">New Portfolio Message</h2>
            <p style="margin: 4px 0 0; color: #7d8590; font-size: 13px;">Received from your contact form</p>
          </div>
          <div style="padding: 28px 32px;">
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px 0; color: #7d8590; font-size: 13px; width: 70px; vertical-align: top;">From</td>
                <td style="padding: 8px 0; color: #e6edf3; font-size: 14px; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #7d8590; font-size: 13px; vertical-align: top;">Email</td>
                <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #00f5ff; font-size: 14px; text-decoration: none;">${email}</a></td>
              </tr>
            </table>
            <div style="background: #161b22; border-radius: 10px; padding: 18px 20px; border: 1px solid #21262d;">
              <p style="margin: 0 0 8px; color: #7d8590; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Message</p>
              <p style="margin: 0; color: #c9d1d9; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${message}</p>
            </div>
            <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid #21262d;">
              <a href="mailto:${email}" style="display: inline-block; padding: 10px 22px; background: #00f5ff; color: #0d1117; font-weight: 700; font-size: 13px; border-radius: 8px; text-decoration: none;">
                Reply to ${name} →
              </a>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}
