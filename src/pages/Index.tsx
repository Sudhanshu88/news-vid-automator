import Navigation from "@/components/portfolio/Navigation";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import SkillsSection from "@/components/portfolio/TechnologiesSection";
import ExperienceSection from "@/components/portfolio/ProjectsSection";
import EducationSection from "@/components/portfolio/EducationSection";
import ContactSection from "@/components/portfolio/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <HeroSection />
        
        <section id="about">
          <AboutSection />
        </section>
        
        <section id="skills">
          <SkillsSection />
        </section>
        
        <section id="experience">
          <ExperienceSection />
        </section>
        
        <section id="education">
          <EducationSection />
        </section>
        
        <section id="contact">
          <ContactSection />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-lg font-medium mb-2">Himanshu Ranjan</p>
          <p className="opacity-90">Business Administration Graduate • Management Professional • Ready to Lead</p>
          <p className="text-sm opacity-70 mt-4">
            © 2025 Himanshu Ranjan. Built with passion and dedication.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
