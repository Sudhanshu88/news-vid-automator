import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Github, Linkedin, MessageCircle, Send } from "lucide-react";

const ContactSection = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "Sudhanshuranjan029@gmail.com",
      action: "mailto:Sudhanshuranjan029@gmail.com",
      description: "Best for detailed discussions"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "8825234780",
      action: "tel:8825234780",
      description: "Quick conversations"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      value: "Professional Profile",
      action: "https://linkedin.com/in/sudhanshu-ranjan-362127229/",
      description: "Connect professionally"
    },
    {
      icon: <Github className="w-6 h-6" />,
      title: "GitHub",
      value: "View Code Portfolio",
      action: "https://github.com/Sudhanshu88",
      description: "Explore my projects"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 px-4 py-2">
              <MessageCircle className="w-4 h-4 mr-2" />
              Get In Touch
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to contribute to innovative projects and collaborate with dynamic teams. 
              Let's discuss how I can add value to your organization.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact methods */}
            <div className="space-y-6">
              <Card className="gradient-card shadow-card border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Send className="w-6 h-6 text-primary" />
                    Contact Information
                  </h3>
                  
                  <div className="space-y-6">
                    {contactMethods.map((method, index) => (
                      <div key={index} className="group">
                        <a 
                          href={method.action}
                          target={method.action.startsWith('http') ? '_blank' : undefined}
                          rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="flex items-center gap-4 p-4 rounded-lg transition-smooth hover:bg-primary/5 hover:scale-105"
                        >
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-smooth">
                            {method.icon}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-lg group-hover:text-primary transition-smooth">
                              {method.title}
                            </h4>
                            <p className="text-muted-foreground group-hover:text-primary/80 transition-smooth">
                              {method.value}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {method.description}
                            </p>
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* CTA Section */}
            <div className="space-y-6">
              <Card className="gradient-primary shadow-hero text-white border-0">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">Ready to Start?</h3>
                  <p className="text-lg opacity-90 mb-6">
                    I'm excited about opportunities to contribute to innovative projects 
                    and grow with forward-thinking teams.
                  </p>
                  
                  <div className="space-y-4">
                    <Button 
                      variant="secondary" 
                      size="lg" 
                      className="w-full shadow-lg hover:shadow-xl transition-smooth hover:scale-105"
                      asChild
                    >
                      <a href="mailto:Sudhanshuranjan029@gmail.com">
                        <Mail className="w-5 h-5 mr-2" />
                        Send Email
                      </a>
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary transition-smooth"
                      asChild
                    >
                      <a href="https://linkedin.com/in/sudhanshu-ranjan-362127229/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-5 h-5 mr-2" />
                        Connect on LinkedIn
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Availability status */}
              <Card className="gradient-card shadow-card border-0">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="font-semibold text-green-600">Available for Opportunities</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Open to full-time positions, internships, and exciting projects
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;