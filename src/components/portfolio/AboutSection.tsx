import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Target, Zap, Code, Cloud, Brain } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Software Development",
      description: "Proficient in Python and Java with hands-on project experience"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud Computing",
      description: "AWS certified with experience in S3, EC2, RDS, Lambda, and more"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI & Innovation",
      description: "Built AI-powered applications for video generation and emotion detection"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Growth Mindset",
      description: "Committed to continuous learning and contributing to impactful projects"
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
              Passionate About <span className="text-gradient">Technology</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A highly motivated Computer Science graduate with a strong foundation in software development
              and a passion for innovation.
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
                    I am a detail-oriented Computer Science graduate with a strong foundation in software 
                    development. My expertise spans across <strong className="text-primary">Python</strong>, 
                    <strong className="text-primary"> Java</strong>, and 
                    <strong className="text-primary"> cloud computing technologies</strong>.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    As a fresher, I bring a growth mindset, commitment to continuous learning, and keen 
                    interest in developing scalable and efficient software solutions within dynamic and 
                    collaborative tech environments.
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