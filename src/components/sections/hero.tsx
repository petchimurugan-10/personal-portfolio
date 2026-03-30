"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Instagram, ArrowDown, Terminal, Download } from "lucide-react";
import { useEffect, useState } from "react";

const roles = [
    "Cybersecurity Enthusiast",
    "Application Security Engineer",
];

function TypingEffect({ words }: { words: string[] }) {
    const [index, setIndex] = useState(0);
    const [displayed, setDisplayed] = useState("");
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const word = words[index % words.length];
        let timeout: ReturnType<typeof setTimeout>;
        if (!deleting && displayed.length < word.length) {
            timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 75);
        } else if (!deleting && displayed.length === word.length) {
            timeout = setTimeout(() => setDeleting(true), 2000);
        } else if (deleting && displayed.length > 0) {
            timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
        } else {
            setDeleting(false);
            setIndex((i) => (i + 1) % words.length);
        }
        return () => clearTimeout(timeout);
    }, [displayed, deleting, index, words]);

    return (
        <span>
            <span style={{ color: "#00f5ff" }}>{displayed}</span>
            <span className="animate-blink" style={{ color: "#00f5ff" }}>|</span>
        </span>
    );
}

export default function HeroSection() {
    return (
        <section style={{
            position: "relative",
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            paddingTop: "68px",
            background: "#0d1117",
        }}>
            {/* Grid background */}
            <div className="grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.5 }} />

            {/* Radial glows */}
            <div style={{
                position: "absolute", top: "20%", left: "50%", transform: "translate(-50%,-50%)",
                width: "700px", height: "700px",
                background: "radial-gradient(circle, rgba(0,245,255,0.06) 0%, transparent 70%)",
                pointerEvents: "none",
            }} />
            <div style={{
                position: "absolute", bottom: "20%", right: "15%",
                width: "350px", height: "350px",
                background: "radial-gradient(circle, rgba(191,90,242,0.06) 0%, transparent 70%)",
                pointerEvents: "none",
            }} />

            {/* Floating dots */}
            {[...Array(6)].map((_, i) => (
                <div key={i} style={{
                    position: "absolute",
                    width: "5px", height: "5px",
                    borderRadius: "50%",
                    background: "#00f5ff",
                    opacity: 0.3,
                    left: `${12 + i * 15}%`,
                    top: `${25 + (i % 3) * 20}%`,
                    animation: `float ${5 + i}s ease-in-out ${i * 0.6}s infinite`,
                }} />
            ))}

            {/* Content */}
            <div style={{ position: "relative", zIndex: 10, maxWidth: "900px", margin: "0 auto", padding: "60px 24px", textAlign: "center" }}>
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        display: "inline-flex", alignItems: "center", gap: "8px",
                        padding: "8px 18px", borderRadius: "999px",
                        background: "rgba(0,245,255,0.08)", border: "1px solid rgba(0,245,255,0.25)",
                        color: "#00f5ff", fontSize: "13px", fontWeight: 600,
                        fontFamily: "JetBrains Mono, monospace", marginBottom: "32px",
                    }}
                >
                    <Terminal size={13} />
                    Available for opportunities
                    <span style={{
                        width: "7px", height: "7px", borderRadius: "50%",
                        background: "#00ff88", animation: "glow-pulse 2s ease infinite",
                    }} />
                </motion.div>

                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    style={{ fontSize: "clamp(50px, 8vw, 88px)", fontWeight: 900, lineHeight: 1.05, marginBottom: "16px", letterSpacing: "-2px" }}
                >
                    <span style={{ color: "#e6edf3" }}>Petchi</span>
                    <span className="gradient-text">murugan</span>
                </motion.h1>

                {/* Typing role */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    style={{ fontSize: "clamp(20px, 3vw, 26px)", fontWeight: 600, color: "#7d8590", marginBottom: "28px" }}
                >
                    <TypingEffect words={roles} />
                </motion.p>

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    style={{ maxWidth: "600px", margin: "0 auto 40px", fontSize: "16px", color: "#7d8590", lineHeight: 1.7 }}
                >
                    CS undergrad passionate about{" "}
                    <span style={{ color: "#00f5ff", fontWeight: 600 }}>Cybersecurity & Application Security</span>.{" "}
                    I enjoy exploring vulnerabilities, understanding how attacks work, and using that mindset to build more secure systems.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    style={{ display: "flex", flexWrap: "wrap", gap: "14px", justifyContent: "center", marginBottom: "48px" }}
                >
                    <a href="/#projects" className="btn-primary">
                        View Projects <ArrowDown size={15} />
                    </a>
                    <a href="/S_Petchimurugan.pdf" download className="btn-outline">
                        <Download size={15} /> Resume
                    </a>
                    <a href="/#contact" className="btn-ghost">
                        Contact Me
                    </a>
                </motion.div>

                {/* Social row */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.65 }}
                    style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "14px" }}
                >
                    {[
                        { icon: Github, href: "https://github.com/petchimurugan-10", label: "GitHub" },
                        { icon: Linkedin, href: "https://linkedin.com/in/petchimurugan", label: "LinkedIn" },
                        { icon: Instagram, href: "https://www.instagram.com/mr_monarc_/", label: "Instagram" },
                        { icon: Mail, href: "mailto:petchimurugan.110@gmail.com", label: "Email" },
                    ].map(({ icon: Icon, href, label }) => (
                        <a
                            key={label}
                            href={href}
                            target={label !== "Email" ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            aria-label={label}
                            style={{
                                width: "42px", height: "42px", borderRadius: "10px",
                                border: "1px solid #30363d", background: "rgba(22,27,34,0.8)",
                                display: "flex", alignItems: "center", justifyContent: "center",
                                color: "#7d8590", textDecoration: "none",
                                transition: "all 0.3s ease",
                            }}
                            onMouseEnter={e => {
                                (e.currentTarget as HTMLElement).style.color = "#00f5ff";
                                (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,245,255,0.4)";
                                (e.currentTarget as HTMLElement).style.background = "rgba(0,245,255,0.08)";
                                (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                            }}
                            onMouseLeave={e => {
                                (e.currentTarget as HTMLElement).style.color = "#7d8590";
                                (e.currentTarget as HTMLElement).style.borderColor = "#30363d";
                                (e.currentTarget as HTMLElement).style.background = "rgba(22,27,34,0.8)";
                                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                            }}
                        >
                            <Icon size={17} />
                        </a>
                    ))}
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    style={{ marginTop: "60px", display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", color: "#484f58" }}
                >
                    <span style={{ fontSize: "11px", fontFamily: "JetBrains Mono, monospace", letterSpacing: "2px" }}>SCROLL</span>
                    <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                        <ArrowDown size={13} color="#00f5ff" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
