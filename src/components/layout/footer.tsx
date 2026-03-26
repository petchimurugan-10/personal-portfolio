"use client";


import { Github, Linkedin, Mail, Shield } from "lucide-react";

const socials = [
    { icon: Github, label: "GitHub", href: "https://github.com/petchimurugan-10" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/petchimurugan" },
    { icon: Mail, label: "Email", href: "mailto:petchimurugan.110@gmail.com" },
];

export default function Footer() {
    return (
        <footer style={{ borderTop: "1px solid #21262d", background: "#0d1117" }}>
            <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "40px 24px" }}>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "24px" }}>
                    {/* Brand */}
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <div style={{
                            width: "34px", height: "34px", borderRadius: "9px",
                            background: "rgba(0,245,255,0.1)", border: "1px solid rgba(0,245,255,0.3)",
                            display: "flex", alignItems: "center", justifyContent: "center",
                        }}>
                            <Shield size={14} color="#00f5ff" />
                        </div>
                        <div>
                            <p style={{ fontWeight: 700, fontSize: "14px", color: "#e6edf3" }}>Petchimurugan S</p>
                            <p style={{ fontSize: "11px", color: "#7d8590", fontFamily: "JetBrains Mono, monospace", marginTop: "2px" }}>
                                Aspiring Application-Security Engineer
                            </p>
                        </div>
                    </div>

                    {/* Socials */}
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        {socials.map(({ icon: Icon, label, href }) => (
                            <a
                                key={label}
                                href={href}
                                target={label !== "Email" ? "_blank" : undefined}
                                rel="noopener noreferrer"
                                aria-label={label}
                                style={{
                                    width: "36px", height: "36px", borderRadius: "9px",
                                    border: "1px solid #30363d", background: "rgba(33,38,45,0.8)",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    color: "#7d8590", textDecoration: "none",
                                    transition: "all 0.3s ease",
                                }}
                                onMouseEnter={e => {
                                    (e.currentTarget as HTMLElement).style.color = "#00f5ff";
                                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,245,255,0.4)";
                                    (e.currentTarget as HTMLElement).style.background = "rgba(0,245,255,0.08)";
                                }}
                                onMouseLeave={e => {
                                    (e.currentTarget as HTMLElement).style.color = "#7d8590";
                                    (e.currentTarget as HTMLElement).style.borderColor = "#30363d";
                                    (e.currentTarget as HTMLElement).style.background = "rgba(33,38,45,0.8)";
                                }}
                            >
                                <Icon size={14} />
                            </a>
                        ))}
                    </div>

                    <p style={{ fontSize: "12px", color: "#484f58" }}>
                        © 2026 Petchimurugan S.{" "}
                        <span style={{ fontFamily: "JetBrains Mono, monospace", color: "rgba(0,245,255,0.4)" }}>Built with Next.js</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
