"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, Phone, MapPin, CheckCircle } from "lucide-react";
import { useState } from "react";
import { contactFormSchema } from "@/lib/validators";

export default function ContactSection() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        setError("");

        // Client-side validation
        const validation = contactFormSchema.safeParse(form);
        if (!validation.success) {
            setError(validation.error.issues[0]?.message || "Invalid form data");
            setSubmitting(false);
            return;
        }

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            const data = await res.json();
            if (res.ok) {
                setSubmitted(true);
                setForm({ name: "", email: "", message: "" });
            } else {
                setError(data.error || "Something went wrong. Please try again.");
            }
        } catch { setError("Network error. Please try again."); }
        finally { setSubmitting(false); }
    };

    const inputStyle: React.CSSProperties = {
        width: "100%", padding: "13px 16px", borderRadius: "12px",
        background: "rgba(33,38,45,0.9)", border: "1px solid #30363d",
        color: "#e6edf3", fontSize: "14px", outline: "none",
        transition: "border-color 0.2s ease",
        fontFamily: "Inter, sans-serif",
    };

    const contactInfo = [
        { icon: Mail, label: "Email", value: "petchimurugan.110@gmail.com", href: "mailto:petchimurugan.110@gmail.com" },
        { icon: Phone, label: "Phone", value: "+91 9025267764", href: "tel:+919025267764" },
        { icon: MapPin, label: "Location", value: "Coimbatore, India", href: null },
    ];

    const socials = [
        { icon: Github, label: "GitHub", href: "https://github.com/petchimurugan" },
        { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/petchimurugan" },
        { icon: Mail, label: "Email", href: "mailto:petchimurugan.110@gmail.com" },
    ];

    return (
        <section id="contact" style={{ padding: "100px 0", position: "relative", background: "#0d1117" }}>
            <div className="grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.25, pointerEvents: "none" }} />
            <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 2 }}>

                <motion.div
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
                    style={{ textAlign: "center", marginBottom: "56px" }}
                >
                    <span className="section-num" style={{ display: "block", textAlign: "center" }}>05. contact</span>
                    <h2 style={{ fontSize: "36px", fontWeight: 800, color: "#e6edf3", letterSpacing: "-1px", marginBottom: "12px" }}>
                        Get In Touch
                    </h2>
                    <p style={{ fontSize: "15px", color: "#7d8590", maxWidth: "500px", margin: "0 auto", lineHeight: 1.7 }}>
                        Have a security challenge, project idea, or just want to connect? I&apos;m always open to new opportunities.
                    </p>
                </motion.div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "32px" }}>
                    {/* Left info */}
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                        {contactInfo.map(({ icon: Icon, label, value, href }) => (
                            <div
                                key={label}
                                style={{
                                    display: "flex", alignItems: "center", gap: "16px",
                                    background: "rgba(22,27,34,0.9)", border: "1px solid #21262d", borderRadius: "14px", padding: "16px 20px",
                                    transition: "border-color 0.3s ease",
                                }}
                                onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,245,255,0.25)"}
                                onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "#21262d"}
                            >
                                <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "rgba(0,245,255,0.1)", border: "1px solid rgba(0,245,255,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                    <Icon size={16} color="#00f5ff" />
                                </div>
                                <div>
                                    <p style={{ fontSize: "11px", fontFamily: "JetBrains Mono, monospace", color: "#00f5ff", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "3px" }}>{label}</p>
                                    {href ? (
                                        <a href={href} style={{ fontSize: "14px", fontWeight: 600, color: "#e6edf3", textDecoration: "none" }}>{value}</a>
                                    ) : (
                                        <p style={{ fontSize: "14px", fontWeight: 600, color: "#e6edf3" }}>{value}</p>
                                    )}
                                </div>
                            </div>
                        ))}

                        <div style={{ marginTop: "8px" }}>
                            <p style={{ fontSize: "13px", fontWeight: 700, color: "#e6edf3", marginBottom: "10px" }}>Find me on</p>
                            <div style={{ display: "flex", gap: "10px" }}>
                                {socials.map(({ icon: Icon, label, href }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target={label !== "Email" ? "_blank" : undefined}
                                        rel="noopener noreferrer"
                                        style={{
                                            display: "flex", alignItems: "center", gap: "8px",
                                            padding: "9px 16px", borderRadius: "10px",
                                            border: "1px solid #30363d", background: "rgba(33,38,45,0.8)",
                                            color: "#7d8590", textDecoration: "none", fontSize: "13px", fontWeight: 600,
                                            transition: "all 0.3s ease",
                                        }}
                                        onMouseEnter={e => {
                                            const el = e.currentTarget as HTMLElement;
                                            el.style.color = "#00f5ff";
                                            el.style.borderColor = "rgba(0,245,255,0.35)";
                                            el.style.background = "rgba(0,245,255,0.07)";
                                        }}
                                        onMouseLeave={e => {
                                            const el = e.currentTarget as HTMLElement;
                                            el.style.color = "#7d8590";
                                            el.style.borderColor = "#30363d";
                                            el.style.background = "rgba(33,38,45,0.8)";
                                        }}
                                    >
                                        <Icon size={14} /> {label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right — form */}
                    <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                        <div style={{ background: "rgba(22,27,34,0.9)", border: "1px solid #21262d", borderRadius: "20px", padding: "32px" }}>
                            {submitted ? (
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px 0", textAlign: "center", gap: "16px" }}>
                                    <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "rgba(0,255,136,0.12)", border: "1px solid rgba(0,255,136,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}><CheckCircle size={30} color="#00ff88" /></div>
                                    <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#e6edf3" }}>Message Sent!</h3>
                                    <p style={{ fontSize: "14px", color: "#7d8590" }}>Thanks for reaching out. I&apos;ll get back to you soon.</p>
                                    <button onClick={() => setSubmitted(false)} style={{ background: "none", border: "none", color: "#00f5ff", cursor: "pointer", fontSize: "13px", textDecoration: "underline" }}>Send another</button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                                    {[
                                        { label: "Name", key: "name" as const, type: "text", placeholder: "Your name" },
                                        { label: "Email", key: "email" as const, type: "email", placeholder: "your@email.com" },
                                    ].map(({ label, key, type, placeholder }) => (
                                        <div key={key}>
                                            <label style={{ display: "block", fontSize: "11px", fontFamily: "JetBrains Mono, monospace", color: "#7d8590", marginBottom: "7px", letterSpacing: "1px", textTransform: "uppercase" }}>{label}</label>
                                            <input
                                                type={type}
                                                required
                                                placeholder={placeholder}
                                                value={form[key]}
                                                onChange={e => setForm({ ...form, [key]: e.target.value })}
                                                style={inputStyle}
                                                onFocus={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,245,255,0.6)"}
                                                onBlur={e => (e.currentTarget as HTMLElement).style.borderColor = "#30363d"}
                                            />
                                        </div>
                                    ))}
                                    <div>
                                        <label style={{ display: "block", fontSize: "11px", fontFamily: "JetBrains Mono, monospace", color: "#7d8590", marginBottom: "7px", letterSpacing: "1px", textTransform: "uppercase" }}>Message</label>
                                        <textarea
                                            required rows={5}
                                            placeholder="Tell me about your project or opportunity..."
                                            value={form.message}
                                            onChange={e => setForm({ ...form, message: e.target.value })}
                                            style={{ ...inputStyle, resize: "none" }}
                                            onFocus={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,245,255,0.6)"}
                                            onBlur={e => (e.currentTarget as HTMLElement).style.borderColor = "#30363d"}
                                        />
                                    </div>
                                    {error && (
                                        <p style={{ fontSize: "13px", color: "#ff6b63", background: "rgba(255,69,58,0.1)", border: "1px solid rgba(255,69,58,0.25)", padding: "10px 14px", borderRadius: "10px" }}>{error}</p>
                                    )}
                                    <button
                                        type="submit"
                                        disabled={submitting}
                                        style={{
                                            width: "100%", padding: "14px", borderRadius: "12px",
                                            background: submitting ? "rgba(0,245,255,0.7)" : "#00f5ff",
                                            color: "#0d1117", fontWeight: 800, fontSize: "14px",
                                            border: "none", cursor: submitting ? "not-allowed" : "pointer",
                                            display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                                            transition: "all 0.3s ease",
                                            boxShadow: submitting ? "none" : "0 0 25px rgba(0,245,255,0.3)",
                                        }}
                                        onMouseEnter={e => !submitting && ((e.currentTarget as HTMLElement).style.boxShadow = "0 0 40px rgba(0,245,255,0.5)")}
                                        onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = submitting ? "none" : "0 0 25px rgba(0,245,255,0.3)"}
                                    >
                                        {submitting ? (
                                            <><div style={{ width: "16px", height: "16px", border: "2px solid rgba(13,17,23,0.4)", borderTopColor: "#0d1117", borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />Sending...</>
                                        ) : (
                                            <><Send size={14} />Send Message</>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>

            <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
        </section>
    );
}
