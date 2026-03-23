"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";

type SkillColor = "cyan" | "red" | "purple" | "green" | "orange";

const colorStyles: Record<SkillColor, { bg: string; color: string; border: string; iconBg: string; iconBorder: string }> = {
    cyan: { bg: "rgba(0,245,255,0.08)", color: "#00f5ff", border: "rgba(0,245,255,0.22)", iconBg: "rgba(0,245,255,0.12)", iconBorder: "rgba(0,245,255,0.3)" },
    red: { bg: "rgba(255,69,58,0.08)", color: "#ff6b63", border: "rgba(255,69,58,0.22)", iconBg: "rgba(255,69,58,0.12)", iconBorder: "rgba(255,69,58,0.3)" },
    purple: { bg: "rgba(191,90,242,0.08)", color: "#bf5af2", border: "rgba(191,90,242,0.22)", iconBg: "rgba(191,90,242,0.12)", iconBorder: "rgba(191,90,242,0.3)" },
    green: { bg: "rgba(0,255,136,0.08)", color: "#00ff88", border: "rgba(0,255,136,0.22)", iconBg: "rgba(0,255,136,0.12)", iconBorder: "rgba(0,255,136,0.3)" },
    orange: { bg: "rgba(255,159,10,0.08)", color: "#ff9f0a", border: "rgba(255,159,10,0.22)", iconBg: "rgba(255,159,10,0.12)", iconBorder: "rgba(255,159,10,0.3)" },
};

export default function SkillSection() {
    return (
        <section id="skills" style={{ padding: "100px 0", position: "relative", background: "rgba(13,17,23,0.97)" }}>
            <div className="grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.2, pointerEvents: "none" }} />
            <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 2 }}>

                <motion.div
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
                    style={{ marginBottom: "56px" }}
                >
                    <span className="section-num">02. skills</span>
                    <h2 style={{ fontSize: "36px", fontWeight: 800, color: "#e6edf3", letterSpacing: "-1px" }} className="section-line">
                        Technical Skills
                    </h2>
                </motion.div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
                    {skillCategories.map((cat, i) => {
                        const c = colorStyles[cat.color as SkillColor] || colorStyles.cyan;
                        return (
                            <motion.div
                                key={cat.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.07 }}
                                className="lift"
                                style={{
                                    background: "rgba(22,27,34,0.9)",
                                    border: "1px solid #21262d",
                                    borderRadius: "18px",
                                    padding: "24px",
                                    cursor: "default",
                                }}
                                onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = c.border}
                                onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "#21262d"}
                            >
                                {/* Card header */}
                                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                                    <div style={{
                                        width: "38px", height: "38px", borderRadius: "10px",
                                        background: c.iconBg, border: `1px solid ${c.iconBorder}`,
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        fontSize: "14px", fontWeight: 800, color: c.color,
                                        fontFamily: "JetBrains Mono, monospace",
                                    }}>
                                        {cat.name.charAt(0)}
                                    </div>
                                    <h3 style={{ fontWeight: 700, color: "#e6edf3", fontSize: "15px" }}>{cat.name}</h3>
                                </div>

                                {/* Skill badges */}
                                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                                    {cat.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            style={{
                                                fontSize: "12px", fontWeight: 600,
                                                padding: "5px 12px", borderRadius: "8px",
                                                background: c.bg, color: c.color, border: `1px solid ${c.border}`,
                                                transition: "transform 0.2s ease",
                                                cursor: "default",
                                            }}
                                            onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = "scale(1.06)"}
                                            onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = "scale(1)"}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
