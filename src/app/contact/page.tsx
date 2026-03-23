import { Metadata } from "next";
import ContactSection from "@/components/sections/contactsection";

export const metadata: Metadata = {
    title: "Contact — Petchimurugan S",
    description: "Get in touch with Petchimurugan S for security projects and opportunities.",
};

export default function ContactPage() {
    return (
        <div className="pt-16">
            <ContactSection />
        </div>
    );
}
