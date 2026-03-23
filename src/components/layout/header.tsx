"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, Shield } from "lucide-react";
import ThemeToggle from "./themetoggle";

const navLinks = [
    { label: "About", href: "/#about" },
    { label: "Skills", href: "/#skills" },
    { label: "Experience", href: "/#experience" },
    { label: "Projects", href: "/#projects" },
    { label: "Contact", href: "/#contact" },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const headerStyle: React.CSSProperties = {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.4s ease",
        background: scrolled ? "rgba(13, 17, 23, 0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(48, 54, 61, 0.8)" : "none",
        boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.4)" : "none",
    };

    return (
        <header style={headerStyle}>
            <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "68px" }}>
                    {/* Logo */}
                    <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
                        <div style={{
                            width: "38px", height: "38px", borderRadius: "10px",
                            background: "rgba(0,245,255,0.1)", border: "1px solid rgba(0,245,255,0.35)",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            transition: "all 0.3s ease",
                        }}>
                            <Shield size={17} color="#00f5ff" />
                        </div>
                        <span style={{ fontWeight: 800, fontSize: "17px", letterSpacing: "-0.3px" }}>
                            <span style={{ color: "#00f5ff", fontFamily: "JetBrains Mono, monospace" }}>&lt;</span>
                            <span style={{ color: "#e6edf3" }}>PS</span>
                            <span style={{ color: "#00f5ff", fontFamily: "JetBrains Mono, monospace" }}>/&gt;</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav style={{ display: "flex", alignItems: "center", gap: "4px" }} className="hidden-mobile">
                        {navLinks.map((link) => (
                            <Link key={link.label} href={link.href} className="nav-link">
                                {link.label}
                            </Link>
                        ))}
                        <div style={{ marginLeft: "8px", paddingLeft: "8px", borderLeft: "1px solid #30363d" }}>
                            <ThemeToggle />
                        </div>
                    </nav>

                    {/* Mobile controls */}
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }} className="show-mobile">
                        <ThemeToggle />
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            style={{
                                width: "38px", height: "38px", borderRadius: "8px",
                                border: "1px solid #30363d", background: "rgba(33,38,45,0.8)",
                                display: "flex", alignItems: "center", justifyContent: "center",
                                cursor: "pointer", color: "#e6edf3",
                            }}
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileOpen && (
                    <div style={{
                        borderTop: "1px solid #30363d",
                        paddingBottom: "16px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "4px",
                    }}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                style={{
                                    display: "block",
                                    padding: "12px 16px",
                                    color: "#7d8590",
                                    textDecoration: "none",
                                    fontWeight: 500,
                                    fontSize: "14px",
                                    borderRadius: "8px",
                                    transition: "all 0.2s",
                                }}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                )}
            </div>

            <style>{`
        @media (min-width: 768px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
        </header>
    );
}
