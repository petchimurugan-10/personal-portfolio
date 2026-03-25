import { Metadata } from "next";
import AllProjectsSection from "@/components/sections/allprojectssection";

export const metadata: Metadata = {
    title: "Projects — Petchimurugan S",
    description: "Security projects including a Web Application Firewall and Network Scanner tool.",
};

export default function ProjectsPage() {
    return (
        <div className="pt-16">
            <AllProjectsSection />
        </div>
    );
}
