export interface SkillCategory {
    id: string;
    name: string;
    color: string;
    skills: string[];
}

export const skillCategories: SkillCategory[] = [
    {
        id: "languages",
        name: "Programming Languages",
        color: "cyan",
        skills: ["Python", "C", "C++", "Java", "Bash", "JavaScript"],
    },
    {
        id: "security",
        name: "Security Tools",
        color: "red",
        skills: [
            "Burp Suite",
            "OWASP ZAP",
            "Wireshark",
            "Nmap",
            "Snyk",
            "Nikto",
            "Metasploit",
            "Packet tracer",
            "SQLmap",   
        ],
    },
    {
        id: "networking",
        name: "Networking",
        color: "purple",
        skills: ["IP", "HTTPS/TLS", "DNS", "Firewall", "VPN", "ARP", "TCP/UDP", "VLAN", "DHCP"],
    },
    {
        id: "databases",
        name: "Databases",
        color: "green",
        skills: ["MySQL", "PostgreSQL", "MongoDB"],
    },
    {
        id: "tools",
        name: "Tools & Platforms",
        color: "orange",
        skills: ["Git", "REST APIs", "Postman", "Nginx", "Linux (Ubuntu,kali linux)", "Log Analysis", "Network Analysis", "Typescript", "Prisma"],
    },
];
