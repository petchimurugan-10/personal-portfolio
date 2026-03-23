import { Metadata } from "next";
import AboutSection from "@/components/sections/aboutsection";

export const metadata: Metadata = {
    title: "About — Petchimurugan S",
    description: "About Petchimurugan S — Security-focused CS undergraduate at KPR Institute.",
};

export default function AboutPage() {
    return (
        <div className="pt-16">
            <AboutSection />
        </div>
    );
}
