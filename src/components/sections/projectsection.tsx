"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Shield, Terminal } from "lucide-react";
import { projects } from "@/data/projects";
import Link from "next/link";

export default function ProjectSection() {
    return (
        <section id="projects" style={{ padding: "100px 0", position: "relative", background: "rgba(13,17,23,0.97)" }}>
            <div className="grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.2, pointerEvents: "none" }} />
            <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 2 }}>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
                    style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "16px", marginBottom: "56px" }}
                >
                    <div>
                        <span className="section-num">04. projects</span>
                        <h2 style={{ fontSize: "36px", fontWeight: 800, color: "#e6edf3", letterSpacing: "-1px" }} className="section-line">
                            Featured Projects
                        </h2>
                    </div>
                    <Link
                        href="/projects"
                        style={{
                            fontSize: "13px", fontWeight: 600, color: "#00f5ff",
                            textDecoration: "none", padding: "8px 18px", borderRadius: "9px",
                            border: "1px solid rgba(0,245,255,0.35)", transition: "all 0.2s ease",
                        }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(0,245,255,0.08)"; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                    >
                        View All →
                    </Link>
                </motion.div>

                <div id="projects-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(460px, 1fr))", gap: "24px" }}>
                    <style>{`
                  @media (max-width: 640px) {
                    #projects-grid { grid-template-columns: 1fr !important; }
                  }
                `}</style>
                    {projects.filter((p) => p.featured).map((project, i) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.55, delay: i * 0.12 }}
                            className="lift"
                            style={{
                                background: "rgba(22,27,34,0.9)",
                                border: "1px solid #21262d",
                                borderRadius: "20px",
                                display: "flex", flexDirection: "column",
                                overflow: "hidden",
                                transition: "border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
                            }}
                            onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,245,255,0.35)"}
                            onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "#21262d"}
                        >
                            {/* Top accent bar */}
                            <div style={{ height: "3px", background: "linear-gradient(90deg, #00f5ff, #00ff88, #bf5af2)" }} />

                            <div style={{ padding: "28px", flex: 1, display: "flex", flexDirection: "column", gap: "16px" }}>
                                {/* Icon + Badge row */}
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                                    <div style={{
                                        width: "46px", height: "46px", borderRadius: "12px",
                                        background: "rgba(0,245,255,0.1)", border: "1px solid rgba(0,245,255,0.25)",
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                    }}>
                                        {project.id === "waf"
                                            ? <Shield size={21} color="#00f5ff" />
                                            : <Terminal size={21} color="#00f5ff" />}
                                    </div>
                                    <span style={{
                                        fontSize: "11px", fontWeight: 700, padding: "4px 12px", borderRadius: "999px",
                                        background: "rgba(0,245,255,0.1)", color: "#00f5ff", border: "1px solid rgba(0,245,255,0.25)",
                                        fontFamily: "JetBrains Mono, monospace", letterSpacing: "0.5px",
                                    }}>
                                        {project.category}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 style={{ fontSize: "19px", fontWeight: 800, color: "#e6edf3", lineHeight: 1.3 }}>
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p style={{ fontSize: "14px", color: "#7d8590", lineHeight: 1.75, flex: 1 }}>
                                    {project.description}
                                </p>

                                {/* Tech tags */}
                                <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
                                    {project.tech.map((t) => (
                                        <span key={t} style={{
                                            fontSize: "11px", fontWeight: 600, padding: "4px 11px", borderRadius: "7px",
                                            background: "rgba(191,90,242,0.1)", color: "#bf5af2",
                                            border: "1px solid rgba(191,90,242,0.22)",
                                            fontFamily: "JetBrains Mono, monospace",
                                        }}>
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Footer */}
                            <div style={{ padding: "16px 28px", borderTop: "1px solid #21262d", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ display: "flex", alignItems: "center", gap: "7px", fontSize: "13px", fontWeight: 600, color: "#7d8590", textDecoration: "none", transition: "color 0.2s" }}
                                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#00f5ff"}
                                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#7d8590"}
                                >
                                    <Github size={15} /> Source Code
                                </a>
                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ display: "flex", alignItems: "center", gap: "7px", fontSize: "13px", fontWeight: 600, color: "#7d8590", textDecoration: "none", transition: "color 0.2s" }}
                                        onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#00ff88"}
                                        onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#7d8590"}
                                    >
                                        <ExternalLink size={14} /> Live Demo
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
