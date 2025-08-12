import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Target, Zap, Code, Cloud, Brain } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Leadership & Management",
      description: "Experience in team management, training, and operational excellence"
    },
    {
      icon: <User className="w-6 h-6" />,
      title: "Business Development",
      description: "Skilled in lead generation, client relationships, and strategic partnerships"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Customer Relations",
      description: "Expert in customer service, complaint resolution, and satisfaction enhancement"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Strategic Thinking",
      description: "Committed to driving organizational success through innovative solutions"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 px-4 py-2">
              <User className="w-4 h-4 mr-2" />
              About Me
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Passionate About <span className="text-gradient">Excellence</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A highly motivated Business Administration graduate with strong leadership skills
              and a passion for driving organizational success.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* About text */}
            <div className="space-y-6">
              <Card className="gradient-card shadow-card border-0">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Zap className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold">My Journey</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    I seek challenging opportunities where I can fully use my skills for the success of 
                    the organization. My expertise spans across <strong className="text-primary">Business Administration</strong>, 
                    <strong className="text-primary"> Management</strong>, and 
                    <strong className="text-primary"> Human Resources</strong>.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    With proven experience in team management, customer relations, and business development, 
                    I excel in leadership, communication, and project management to drive success in dynamic 
                    business environments.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Highlights grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <Card 
                  key={index} 
                  className="gradient-card shadow-card border-0 transition-smooth hover:shadow-float hover:scale-105"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                      {highlight.icon}
                    </div>
                    <h4 className="font-semibold mb-2">{highlight.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;