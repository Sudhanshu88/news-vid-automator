import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Github, Linkedin, MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 gradient-hero opacity-10" />
      <div className="absolute inset-0 bg-grid-white/5 bg-grid-16" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Status badge */}
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium shadow-card">
            🎓 Fresh Graduate • Available for Opportunities
          </Badge>
          
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="text-gradient">Sudhanshu Ranjan</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
            Computer Science Graduate & Software Developer
          </p>
          
          {/* Specialization */}
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionate about leveraging <span className="text-primary font-semibold">Python</span>, 
            <span className="text-primary font-semibold"> Java</span>, and 
            <span className="text-primary font-semibold"> AWS Cloud Technologies</span> to build 
            scalable and innovative software solutions.
          </p>
          
          {/* Contact buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button 
              variant="default" 
              size="lg" 
              className="gradient-primary shadow-hero transition-smooth hover:shadow-float hover:scale-105"
              asChild
            >
              <a href="mailto:Sudhanshuranjan029@gmail.com" className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Get In Touch
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="transition-smooth hover:shadow-card hover:scale-105 border-primary/20 hover:border-primary"
              asChild
            >
              <a href="tel:8825234780" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call Me
              </a>
            </Button>
          </div>
          
          {/* Social links */}
          <div className="flex gap-6 justify-center">
            <a 
              href="https://linkedin.com/in/sudhanshu-ranjan-362127229/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            
            <a 
              href="https://github.com/Sudhanshu88" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth hover:scale-110"
            >
              <Github className="w-6 h-6" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-6 h-6" />
              <span className="hidden sm:inline">India</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;