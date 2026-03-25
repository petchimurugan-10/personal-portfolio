export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    tech: string[];
    githubUrl?: string;
    liveUrl?: string;
    featured: boolean;
    category: string;
    vulnerabilities?: string[];
    mitigations?: string[];
}

export const projects: Project[] = [
    {
        id: "waf",
        title: "Web Application Firewall (WAF)",
        description:
            "Deployed ModSecurity WAF with OWASP CRS on Linux/Nginx to detect and block SQLi, XSS, and RCE payloads. Tuned custom rules and analyzed HTTP logs to identify bypass attempts.",
        longDescription:
            "A comprehensive Web Application Firewall deployment using ModSecurity with OWASP Core Rule Set. Simulated OWASP Top 10 attacks against intentionally vulnerable endpoints to validate detection accuracy. Custom WAF rules were tuned to minimize false positives while maintaining robust security coverage.",
        tech: ["Python", "Linux", "Nginx", "ModSecurity", "OWASP CRS"],
        githubUrl: "https://github.com/petchimurugan-10/Web_application_firewall.git",
        featured: true,
        category: "Security",
    },
    {
        id: "network-scanner",
        title: "Network Scanner",
        description:
            "Built a C++ reconnaissance tool to automate port scanning, OS fingerprinting, banner grabbing, and service enumeration. Maps attack surfaces by identifying exposed services and open ports.",
        longDescription:
            "A powerful C++ network reconnaissance tool that automates the process of port scanning, OS fingerprinting, banner grabbing, and service enumeration. Maps attack surfaces across target hosts by identifying exposed services, open ports, and potential entry points.",
        tech: ["C++", "Linux", "Networking", "TCP/IP", "Socket Programming"],
        githubUrl: "https://github.com/petchimurugan-10/Network_Scanner.git",
        featured: true,
        category: "Security",
    },
    {
        id: "vulnerable-ecommerce",
        title: "Intentionally Vulnerable E-Commerce Lab",
        description:
            "Built a deliberately vulnerable full-stack e-commerce platform to demonstrate real-world attack vectors including SQLi, XSS, and OWASP Top 10 vulnerabilities, then successfully exploited and patched them.",
        longDescription:
            "A comprehensive security lab featuring a fully functional e-commerce platform intentionally embedded with critical vulnerabilities (SQL Injection, Cross-Site Scripting, Broken Authentication). Demonstrates exploitation techniques, vulnerability analysis, and industry-standard remediation strategies with secure coding implementations.",
        tech: ["JavaScript", "React", "Bun", "MySQL", "REST APIs", "Security Testing"],
        featured: false,
        category: "Security",
        vulnerabilities: [
            "SQLi","XSS","Broken Authentication","Sensitive Data Exposure"
        ],
        mitigations: [
            "Parameterized Queries",
            "Input Validation",
            "Password Hashing with argon2",
            "HTTPS/TLS encryption",
        ],
    },
];
