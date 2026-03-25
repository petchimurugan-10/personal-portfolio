"use client";

import { motion } from "framer-motion";
import { GraduationCap, Trophy, Medal, Target, Award, BookOpen, MapPin, Phone, Mail } from "lucide-react";
import { education, achievements, certifications } from "@/data/experience";

const fadeUp = (i: number) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.55, delay: i * 0.1 },
});

const cardStyle: React.CSSProperties = {
    background: "rgba(22,27,34,0.9)",
    border: "1px solid #21262d",
    borderRadius: "18px",
    padding: "24px",
    transition: "border-color 0.3s ease",
};

export default function AboutSection() {
    return (
        <section id="about" style={{ padding: "clamp(60px, 10vw, 100px) 0", position: "relative", background: "#0d1117" }}>
            <div className="grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.25, pointerEvents: "none" }} />
            <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 clamp(16px, 5vw, 24px)", position: "relative", zIndex: 2 }}>

                {/* Header */}
                <motion.div {...fadeUp(0)} style={{ marginBottom: "clamp(36px, 8vw, 56px)" }}>
                    <span className="section-num">01. about</span>
                    <h2 style={{ fontSize: "clamp(28px, 8vw, 36px)", fontWeight: 800, color: "#e6edf3", letterSpacing: "-1px" }} className="section-line">
                        About Me
                    </h2>
                </motion.div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: "clamp(20px, 5vw, 32px)" }}>
                    {/* Left — Bio */}
                    <motion.div {...fadeUp(1)} style={{ display: "flex", flexDirection: "column", gap: "clamp(16px, 4vw, 24px)" }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(12px, 3vw, 18px)" }}>
                            <p style={{ fontSize: "clamp(14px, 3vw, 16px)", color: "#7d8590", lineHeight: 1.8 }}>
                                I&apos;m{" "}
                                <span style={{ color: "#e6edf3", fontWeight: 600 }}>Petchimurugan S</span>, a
                                security-focused CS undergraduate at {" "}
                                KPR Institute of Engineering and Technology, Coimbatore, Tamilnadu.
                            </p>
                            <p style={{ fontSize: "clamp(13px, 2.5vw, 15px)", color: "#7d8590", lineHeight: 1.8 }}>
                                I specialize in{" "}
                                <span style={{ color: "#e6edf3", fontWeight: 500 }}>Linux-based infrastructure protection</span>,{" "}
                                <span style={{ color: "#e6edf3", fontWeight: 500 }}>web vulnerability mitigation</span>, and{" "}
                                <span style={{ color: "#e6edf3", fontWeight: 500 }}>security tool development</span> in C++ and Python.
                            </p>

                            <p style={{ fontSize: "clamp(13px, 2.5vw, 15px)", color: "#7d8590", lineHeight: 1.8 }}>
                                <span style={{color: "#00f5ff",fontWeight:600}}>Interests:</span>{" "} 
                                OWASP Top 10 · Threat Modeling · Vulnerability Research · Secure Code Review · Network Defense · CTFs
                            </p>
                        </div>

                        {/* Info grid */}
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(8px, 2vw, 10px)" }}>
                            {[
                                { label: "Email", value: "petchimurugan.110@gmail.com", icon: Mail },
                                { label: "Phone", value: "+91 9025267764", icon: Phone },
                                { label: "Location", value: "Coimbatore, India", icon: MapPin },
                                { label: "Status", value: "Open to offers", icon: Trophy },
                            ].map(({ label, value, icon: Icon }) => (
                                <div key={label} style={{ background: "rgba(33,38,45,0.8)", border: "1px solid #21262d", borderRadius: "12px", padding: "clamp(10px, 2vw, 12px) clamp(12px, 3vw, 14px)" }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px" }}>
                                        <Icon size={11} color="#00f5ff" />
                                        <p style={{ fontSize: "clamp(8px, 1.5vw, 10px)", fontFamily: "JetBrains Mono, monospace", color: "#00f5ff", letterSpacing: "1px", textTransform: "uppercase" }}>{label}</p>
                                    </div>
                                    <p style={{ fontSize: "clamp(11px, 2.5vw, 13px)", color: "#e6edf3", fontWeight: 500, wordBreak: "break-all" }}>{value}</p>
                                </div>
                            ))}
                        </div>

                        {/* Education - Moved to Left Column for balance */}
                        <motion.div {...fadeUp(2)} style={{...cardStyle, padding: "clamp(16px, 5vw, 24px)"}}>
                            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "clamp(12px, 3vw, 16px)" }}>
                                <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "rgba(0,255,136,0.1)", border: "1px solid rgba(0,255,136,0.25)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <GraduationCap size={17} color="#00ff88" />
                                </div>
                                <h3 style={{ fontWeight: 700, color: "#e6edf3", fontSize: "clamp(13px, 3vw, 15px)" }}>Education</h3>
                            </div>
                            <p style={{ fontWeight: 700, color: "#e6edf3", fontSize: "clamp(13px, 3vw, 15px)" }}>{education.degree}</p>
                            <p style={{ fontSize: "clamp(11px, 2.5vw, 13px)", color: "#00f5ff", marginTop: "3px" }}>{education.specialization}</p>
                            <p style={{ fontSize: "clamp(11px, 2.5vw, 13px)", color: "#7d8590", marginTop: "2px" }}>{education.institution}</p>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "clamp(10px, 3vw, 14px)", paddingTop: "clamp(10px, 3vw, 14px)", borderTop: "1px solid #21262d", gap: "8px", flexWrap: "wrap" }}>
                                <span style={{ fontSize: "clamp(10px, 2vw, 12px)", fontFamily: "JetBrains Mono, monospace", color: "#7d8590" }}>{education.period}</span>
                                <span style={{ fontSize: "clamp(10px, 2vw, 12px)", fontWeight: 700, color: "#00ff88", background: "rgba(0,255,136,0.1)", border: "1px solid rgba(0,255,136,0.25)", padding: "3px 10px", borderRadius: "999px", whiteSpace: "nowrap" }}>
                                    CGPA: {education.cgpa}
                                </span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right — cards */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                        {/* Achievements */}
                        <motion.div {...fadeUp(3)} style={{...cardStyle, padding: "clamp(16px, 5vw, 24px)"}}>
                            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "clamp(12px, 3vw, 16px)" }}>
                                <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "rgba(255,159,10,0.1)", border: "1px solid rgba(255,159,10,0.25)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <Trophy size={17} color="#ff9f0a" />
                                </div>
                                <h3 style={{ fontWeight: 700, color: "#e6edf3", fontSize: "clamp(13px, 3vw, 15px)" }}>Achievements</h3>
                            </div>
                            {(() => {
                                const iconMap = {
                                    Trophy: { component: Trophy, color: "#ff9f0a", bg: "rgba(255,159,10,0.12)", border: "rgba(255,159,10,0.25)" },
                                    Medal: { component: Medal, color: "#00f5ff", bg: "rgba(0,245,255,0.12)", border: "rgba(0,245,255,0.25)" },
                                    Target: { component: Target, color: "#bf5af2", bg: "rgba(191,90,242,0.12)", border: "rgba(191,90,242,0.25)" },
                                } as const;
                                return achievements.map((a, i) => {
                                    const iconCfg = iconMap[a.icon as keyof typeof iconMap];
                                    const IconComp = iconCfg?.component ?? Trophy;
                                    return (
                                        <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "clamp(8px, 2vw, 10px) 0", borderBottom: i < achievements.length - 1 ? "1px solid rgba(33,38,45,0.9)" : "none", gap: "8px", flexWrap: "wrap" }}>
                                            <div style={{ display: "flex", alignItems: "center", gap: "10px", minWidth: 0 }}>
                                                <div style={{
                                                    width: "30px", height: "30px", borderRadius: "8px", flexShrink: 0,
                                                    background: iconCfg?.bg ?? "rgba(255,159,10,0.12)",
                                                    border: `1px solid ${iconCfg?.border ?? "rgba(255,159,10,0.25)"}`,
                                                    display: "flex", alignItems: "center", justifyContent: "center",
                                                }}>
                                                    <IconComp size={14} color={iconCfg?.color ?? "#ff9f0a"} />
                                                </div>
                                                <span style={{ fontSize: "clamp(11px, 2.5vw, 13px)", color: "#c9d1d9" }}>{a.title}</span>
                                            </div>
                                            <span style={{ fontSize: "clamp(9px, 2vw, 11px)", fontFamily: "JetBrains Mono, monospace", color: "#484f58", flexShrink: 0 }}>{a.year}</span>
                                        </div>
                                    );
                                });
                            })()}
                        </motion.div>

                        {/* Certs */}
                        <motion.div {...fadeUp(4)} style={{...cardStyle, padding: "clamp(16px, 5vw, 24px)"}}>
                            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "clamp(12px, 3vw, 16px)" }}>
                                <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "rgba(191,90,242,0.1)", border: "1px solid rgba(191,90,242,0.25)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <Award size={17} color="#bf5af2" />
                                </div>
                                <h3 style={{ fontWeight: 700, color: "#e6edf3", fontSize: "clamp(13px, 3vw, 15px)" }}>Certifications</h3>
                            </div>
                            {certifications.map((c, i) => (
                                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: i < certifications.length - 1 ? "clamp(8px, 2vw, 12px)" : 0 }}>
                                    <BookOpen size={13} color="#bf5af2" style={{ marginTop: "2px", flexShrink: 0 }} />
                                    <div style={{ minWidth: 0 }}>
                                        <p style={{ fontSize: "clamp(12px, 2.5vw, 13px)", fontWeight: 600, color: "#e6edf3", wordBreak: "break-word" }}>{c.title}</p>
                                        <p style={{ fontSize: "clamp(11px, 2vw, 12px)", color: "#7d8590" }}>{c.issuer}</p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
