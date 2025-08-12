import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Cloud, Database, Settings, Cpu, Terminal } from "lucide-react";

const TechnologiesSection = () => {
  const techCategories = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Programming Languages",
      techs: ["Python", "Java"],
      color: "text-tech-blue"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Tools & Platforms",
      techs: ["Git", "GitHub", "Linux", "GitLab"],
      color: "text-primary"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud Technologies",
      techs: ["AWS S3", "EC2", "RDS", "VPC", "Lambda", "API Gateway"],
      color: "text-tech-cyan"
    },
    {
      icon: <Terminal className="w-6 h-6" />,
      title: "Frameworks & Libraries",
      techs: ["FastAPI", "Flask", "Face Transformers", "OpenCV", "MoviePy", "PIL"],
      color: "text-tech-purple"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Database Management",
      techs: ["MySQL", "DynamoDB", "Cloud Data Storage"],
      color: "text-primary"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 px-4 py-2">
              <Cpu className="w-4 h-4 mr-2" />
              Technologies
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Technical <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Proficient in modern technologies and frameworks for building scalable applications
            </p>
          </div>

          {/* Tech grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techCategories.map((category, index) => (
              <Card 
                key={index} 
                className="gradient-card shadow-card border-0 transition-smooth hover:shadow-float hover:scale-105"
              >
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <div className={`${category.color}`}>
                      {category.icon}
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.techs.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary" 
                        className="transition-smooth hover:scale-105 hover:shadow-sm bg-primary/5 text-primary border-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications highlight */}
          <div className="mt-16">
            <Card className="gradient-primary shadow-hero text-white border-0">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Professional Certifications</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <h4 className="font-semibold">AWS VPC</h4>
                    <p className="text-sm opacity-90">Coursera - Nov 2024</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Python Basic</h4>
                    <p className="text-sm opacity-90">HackerRank</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Programming Essentials</h4>
                    <p className="text-sm opacity-90">Cisco Networking Academy</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;