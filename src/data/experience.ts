export interface Experience {
    id: string;
    role: string;
    company: string;
    duration: string;
    type: string;
    bullets: string[];
    current?: boolean;
}

export interface Education {
    degree: string;
    specialization: string;
    institution: string;
    location: string;
    period: string;
    cgpa: string;
}

export interface Achievement {
    title: string;
    year: string;
    icon: "Trophy" | "Medal" | "Target";
}

export interface Certification {
    title: string;
    issuer: string;
}

export const experiences: Experience[] = [
    {
        id: "rdx",
        role: "Software Development Intern",
        company: "RDX Digital Technologies",
        duration: "Dec 2025 – Mar 2026",
        type: "In-Person",
        current: true,
        bullets: [
            "Mitigated SQLi, XSS, and IDOR vulnerabilities through input validation, output encoding, and access control fixes across API endpoints.",
            "Applied OWASP ASVS secure coding practices; reviewed authentication flows and session handling for security weaknesses.",
        ],
    },
    {
        id: "rampex",
        role: "Full-Stack Intern",
        company: "RAMPeX Technologies",
        duration: "Jan – Aug 2024",
        type: "Remote",
        bullets: [
            "Built REST APIs with input validation and secure error handling; analyzed authentication flows for token handling and access control weaknesses.",
            "Monitored server logs during development to identify anomalous requests and potential security risks.",
        ],
    },
];

export const education: Education = {
    degree: "B.E in Computer Science & Engineering",
    specialization: "Specialization: Networking & Cybersecurity",
    institution: "KPR Institute of Engineering and Technology",
    location: "Coimbatore",
    period: "2022 – 2026",
    cgpa: "8.30",
};

export const achievements: Achievement[] = [
    {
        title: "Winner — Ethical HackHive Hackathon",
        year: "2024",
        icon: "Trophy",
    },
    {
        title: "Topper — NPTEL Cybersecurity Course",
        year: "2024",
        icon: "Medal",
    },
    {
        title: "Finalist — Smart India Hackathon",
        year: "2023",
        icon: "Target",
    },
];

export const certifications: Certification[] = [
    {
        title: "Certified Ethical Hacking",
        issuer: "Cisco NetAcad",
    },
    {
        title: "Certified API Hacking Expert (CAPIE)",
        issuer: "CAPIE",
    },
    {
        title: "CCNA Cisco certified Network Associate",
        issuer: "Cisco",
    },
];
