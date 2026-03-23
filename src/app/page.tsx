import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/aboutsection";
import SkillSection from "@/components/sections/skillsection";
import ExperienceSection from "@/components/sections/experience";
import ProjectSection from "@/components/sections/projectsection";
import ContactSection from "@/components/sections/contactsection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <ExperienceSection />
      <ProjectSection />
      <ContactSection />
    </>
  );
}
