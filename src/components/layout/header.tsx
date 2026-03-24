"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, Shield } from "lucide-react";

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
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Close if clicking outside the header
    useEffect(() => {
        const onClickOutside = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setMobileOpen(false);
            }
        };
        if (mobileOpen) document.addEventListener("mousedown", onClickOutside);
        return () => document.removeEventListener("mousedown", onClickOutside);
    }, [mobileOpen]);

    return (
        <header
            ref={menuRef}
            style={{
                position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
                background: scrolled || mobileOpen
                    ? "rgba(13,17,23,0.97)"
                    : "transparent",
                backdropFilter: "blur(20px)",
                borderBottom: scrolled || mobileOpen
                    ? "1px solid rgba(48,54,61,0.8)"
                    : "none",
                boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.4)" : "none",
                transition: "background 0.4s ease, border 0.4s ease, box-shadow 0.4s ease",
            }}
        >
            {/* Top bar */}
            <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 20px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px" }}>

                    {/* Logo */}
                    <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
                        <div style={{
                            width: "36px", height: "36px", borderRadius: "10px",
                            background: "rgba(0,245,255,0.1)", border: "1px solid rgba(0,245,255,0.35)",
                            display: "flex", alignItems: "center", justifyContent: "center",
                        }}>
                            <Shield size={16} color="#00f5ff" />
                        </div>
                        <span style={{ fontWeight: 800, fontSize: "16px" }}>
                            <span style={{ color: "#00f5ff", fontFamily: "JetBrains Mono, monospace" }}>&lt;</span>
                            <span style={{ color: "#e6edf3" }}>PS</span>
                            <span style={{ color: "#00f5ff", fontFamily: "JetBrains Mono, monospace" }}>/&gt;</span>
                        </span>
                    </Link>

                    {/* Desktop nav */}
                    <nav className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                        {navLinks.map((link) => (
                            <Link key={link.label} href={link.href} className="nav-link">{link.label}</Link>
                        ))}
                    </nav>

                    {/* Hamburger */}
                    <button
                        className="nav-mobile-btn"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        style={{
                            width: "36px", height: "36px", borderRadius: "8px",
                            border: `1px solid ${mobileOpen ? "rgba(0,245,255,0.5)" : "rgba(48,54,61,0.9)"}`,
                            background: mobileOpen ? "rgba(0,245,255,0.08)" : "rgba(22,27,34,0.9)",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            cursor: "pointer",
                            color: mobileOpen ? "#00f5ff" : "#7d8590",
                            transition: "all 0.25s ease",
                        }}
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X size={16} /> : <Menu size={16} />}
                    </button>
                </div>
            </div>

            {/* Compact dropdown (mobile only) */}
            <div
                className="nav-mobile-btn"   /* reuse the "show on mobile" rule */
                style={{
                    maxHeight: mobileOpen ? "320px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.35s cubic-bezier(0.4,0,0.2,1)",
                    borderTop: mobileOpen ? "1px solid rgba(48,54,61,0.6)" : "none",
                }}
            >
                <nav style={{ display: "flex", flexDirection: "column", padding: "8px 20px 16px" }}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            style={{
                                display: "flex", alignItems: "center",
                                padding: "12px 14px",
                                color: "#7d8590", textDecoration: "none",
                                fontWeight: 600, fontSize: "15px",
                                borderRadius: "10px",
                                transition: "all 0.2s ease",
                                letterSpacing: "-0.2px",
                            }}
                            onMouseEnter={e => {
                                (e.currentTarget as HTMLElement).style.color = "#00f5ff";
                                (e.currentTarget as HTMLElement).style.background = "rgba(0,245,255,0.06)";
                            }}
                            onMouseLeave={e => {
                                (e.currentTarget as HTMLElement).style.color = "#7d8590";
                                (e.currentTarget as HTMLElement).style.background = "transparent";
                            }}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </div>

            <style>{`
        @media (min-width: 768px) {
          .nav-desktop    { display: flex !important; }
          .nav-mobile-btn { display: none !important; }
        }
        @media (max-width: 767px) {
          .nav-desktop    { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
        }
      `}</style>
        </header>
    );
}
