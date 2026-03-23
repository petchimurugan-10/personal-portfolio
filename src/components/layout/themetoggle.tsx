"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);
    if (!mounted) return <div style={{ width: "36px", height: "36px" }} />;

    const isDark = theme === "dark";
    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            style={{
                width: "36px", height: "36px", borderRadius: "8px",
                border: "1px solid #30363d",
                background: "rgba(33,38,45,0.8)",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", color: isDark ? "#00f5ff" : "#f59e0b",
                transition: "all 0.3s ease",
            }}
            aria-label="Toggle theme"
        >
            {isDark ? <Moon size={15} /> : <Sun size={15} />}
        </button>
    );
}
