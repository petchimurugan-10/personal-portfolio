export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    tech: string[];
    githubUrl: string;
    liveUrl?: string;
    featured: boolean;
    category: string;
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
        githubUrl: "https://github.com/petchimurugan",
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
        githubUrl: "https://github.com/petchimurugan",
        featured: true,
        category: "Security",
    },
];
