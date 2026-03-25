"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Shield, Terminal, AlertTriangle, ArrowLeft } from "lucide-react";
import { projects } from "@/data/projects";
import Link from "next/link";

export default function AllProjectsSection() {
    return (
        <section id="projects" style={{ padding: "100px 0", position: "relative", background: "rgba(13,17,23,0.97)" }}>
            <div className="grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.2, pointerEvents: "none" }} />
            <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 2 }}>

                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{ marginBottom: "32px" }}
                >
                    <Link
                        href="/#projects"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                            fontSize: "13px",
                            fontWeight: 600,
                            color: "#00f5ff",
                            textDecoration: "none",
                            padding: "8px 14px",
                            borderRadius: "8px",
                            border: "1px solid rgba(0,245,255,0.25)",
                            transition: "all 0.3s ease",
                        }}
                        onMouseEnter={e => {
                            (e.currentTarget as HTMLElement).style.background = "rgba(0,245,255,0.08)";
                            (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,245,255,0.4)";
                        }}
                        onMouseLeave={e => {
                            (e.currentTarget as HTMLElement).style.background = "transparent";
                            (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,245,255,0.25)";
                        }}
                    >
                        <ArrowLeft size={14} />
                        Back
                    </Link>
                </motion.div>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
                    style={{ marginBottom: "56px" }}
                >
                    <span className="section-num">all projects</span>
                    <h2 style={{ fontSize: "36px", fontWeight: 800, color: "#e6edf3", letterSpacing: "-1px" }} className="section-line">
                        All Projects
                    </h2>
                </motion.div>

                <div id="projects-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(460px, 1fr))", gap: "24px" }}>
                    <style>{`
                  @media (max-width: 640px) {
                    #projects-grid { grid-template-columns: 1fr !important; }
                  }
                `}</style>
                    {projects.map((project, i) => (
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
                                            : project.id === "vulnerable-ecommerce"
                                            ? <AlertTriangle size={21} color="#ff6b63" />
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

                                {/* Vulnerabilities & Mitigations - Side by Side */}
                                {(project.vulnerabilities && project.vulnerabilities.length > 0) || (project.mitigations && project.mitigations.length > 0) ? (
                                    <div style={{ marginTop: "12px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                                        {/* Vulnerabilities - if exists */}
                                        {project.vulnerabilities && project.vulnerabilities.length > 0 && (
                                            <div style={{ paddingTop: "12px", borderTop: "1px solid rgba(255,69,58,0.2)" }}>
                                                <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "8px" }}>
                                                    <AlertTriangle size={13} color="#ff6b63" />
                                                    <span style={{ fontSize: "11px", fontWeight: 700, color: "#ff6b63", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                                                        Vulnerabilities
                                                    </span>
                                                </div>
                                                <ul style={{ marginLeft: "16px", display: "flex", flexDirection: "column", gap: "4px" }}>
                                                    {project.vulnerabilities.slice(0, 4).map((vuln, idx) => (
                                                        <li key={idx} style={{ fontSize: "12px", color: "#7d8590", listStyle: "disc", lineHeight: 1.4 }}>
                                                            {vuln}
                                                        </li>
                                                    ))}
                                                    {project.vulnerabilities.length > 4 && (
                                                        <li style={{ fontSize: "12px", color: "#7d8590", fontStyle: "italic" }}>
                                                            +{project.vulnerabilities.length - 4} more...
                                                        </li>
                                                    )}
                                                </ul>
                                            </div>
                                        )}

                                        {/* Mitigations - if exists */}
                                        {project.mitigations && project.mitigations.length > 0 && (
                                            <div style={{ paddingTop: "12px", borderTop: "1px solid rgba(0,255,136,0.2)" }}>
                                                <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "8px" }}>
                                                    <Shield size={13} color="#00ff88" />
                                                    <span style={{ fontSize: "11px", fontWeight: 700, color: "#00ff88", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                                                        Mitigations
                                                    </span>
                                                </div>
                                                <ul style={{ marginLeft: "16px", display: "flex", flexDirection: "column", gap: "4px" }}>
                                                    {project.mitigations.slice(0, 4).map((mit, idx) => (
                                                        <li key={idx} style={{ fontSize: "12px", color: "#7d8590", listStyle: "disc", lineHeight: 1.4 }}>
                                                            {mit}
                                                        </li>
                                                    ))}
                                                    {project.mitigations.length > 4 && (
                                                        <li style={{ fontSize: "12px", color: "#7d8590", fontStyle: "italic" }}>
                                                            +{project.mitigations.length - 4} more...
                                                        </li>
                                                    )}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                ) : null}

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
