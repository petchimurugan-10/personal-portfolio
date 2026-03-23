"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { experiences } from "@/data/experience";

export default function ExperienceSection() {
    return (
        <section id="experience" style={{ padding: "100px 0", position: "relative", background: "#0d1117" }}>
            <div className="grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.25, pointerEvents: "none" }} />
            <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 2 }}>

                <motion.div
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
                    style={{ marginBottom: "56px" }}
                >
                    <span className="section-num">03. experience</span>
                    <h2 style={{ fontSize: "36px", fontWeight: 800, color: "#e6edf3", letterSpacing: "-1px" }} className="section-line">
                        Work Experience
                    </h2>
                </motion.div>

                {/* Timeline */}
                <div style={{ position: "relative" }}>
                    {/* Vertical line */}
                    <div style={{
                        position: "absolute", left: "20px", top: 0, bottom: 0, width: "2px",
                        background: "linear-gradient(to bottom, #00f5ff, rgba(0,245,255,0.1))",
                    }} />

                    <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
                        {experiences.map((exp, i) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.15 }}
                                style={{ position: "relative", paddingLeft: "60px" }}
                            >
                                {/* Dot */}
                                <div style={{
                                    position: "absolute", left: "12px", top: "28px",
                                    width: "18px", height: "18px", borderRadius: "50%",
                                    background: "#0d1117", border: "2.5px solid #00f5ff",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                }}>
                                    <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#00f5ff" }} />
                                </div>

                                {/* Card */}
                                <div
                                    className="lift"
                                    style={{
                                        background: "rgba(22,27,34,0.9)", border: "1px solid #21262d",
                                        borderRadius: "18px", padding: "28px",
                                        transition: "border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
                                    }}
                                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,245,255,0.3)"}
                                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "#21262d"}
                                >
                                    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "12px", marginBottom: "20px" }}>
                                        <div>
                                            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                                                <h3 style={{ fontSize: "18px", fontWeight: 800, color: "#e6edf3" }}>{exp.role}</h3>
                                                {exp.current && (
                                                    <span style={{
                                                        fontSize: "11px", fontWeight: 600, padding: "2px 9px", borderRadius: "999px",
                                                        background: "rgba(0,255,136,0.12)", color: "#00ff88", border: "1px solid rgba(0,255,136,0.25)",
                                                    }}>Current</span>
                                                )}
                                            </div>
                                            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                                                <Briefcase size={13} color="#00f5ff" />
                                                <span style={{ fontSize: "14px", fontWeight: 700, color: "#00f5ff" }}>{exp.company}</span>
                                            </div>
                                        </div>
                                        <div style={{ display: "flex", flexDirection: "column", gap: "4px", alignItems: "flex-end" }}>
                                            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                                <Calendar size={12} color="#484f58" />
                                                <span style={{ fontSize: "12px", fontFamily: "JetBrains Mono, monospace", color: "#7d8590" }}>{exp.duration}</span>
                                            </div>
                                            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                                <MapPin size={12} color="#484f58" />
                                                <span style={{ fontSize: "12px", fontFamily: "JetBrains Mono, monospace", color: "#7d8590" }}>{exp.type}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                                        {exp.bullets.map((bullet, bi) => (
                                            <li key={bi} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                                                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "rgba(0,245,255,0.6)", flexShrink: 0, marginTop: "7px" }} />
                                                <span style={{ fontSize: "14px", color: "#7d8590", lineHeight: 1.75 }}>{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
