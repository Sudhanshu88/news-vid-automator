import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Folder, Calendar, Video, Brain, ExternalLink, Github } from "lucide-react";

const ExperienceSection = () => {
  const projects = [
    {
      title: "AI Video Generation Tool",
      duration: "May 2025 – June 2025",
      type: "Full-Stack Development",
      description: "Developed an automated system that generates professional news summary videos by aggregating trending stories from multiple sources.",
      features: [
        "Built comprehensive pipeline with news scraper, script generator, video creator, and audio processor",
        "Designed with config-driven architecture for flexibility and reusability",
        "Automated professional video generation from trending news sources"
      ],
      technologies: ["Python", "FastAPI", "OpenCV", "MoviePy", "PIL", "AWS"],
      icon: <Video className="w-6 h-6" />,
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "AI Emotion Detection",
      duration: "March 2025 – Aug 2025",
      type: "Machine Learning & AI",
      description: "AI system that analyzes human emotions through facial expressions, voice tone, body language, and text input using advanced ML algorithms.",
      features: [
        "Multi-modal emotion analysis across visual, auditory, and textual inputs",
        "Applied in customer service, mental health monitoring, and human-computer interaction",
        "Leveraged computer vision, NLP, and machine learning techniques"
      ],
      technologies: ["Python", "Face Transformers", "OpenCV", "NLP", "Machine Learning"],
      icon: <Brain className="w-6 h-6" />,
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 px-4 py-2">
              <Folder className="w-4 h-4 mr-2" />
              Projects
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Innovative solutions showcasing expertise in AI, machine learning, and full-stack development
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="gradient-card shadow-card border-0 transition-smooth hover:shadow-float hover:scale-105 group"
              >
                <CardHeader className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.gradient} flex items-center justify-center text-white shadow-lg`}>
                      {project.icon}
                    </div>
                    <Badge variant="outline" className="border-primary/20 text-primary">
                      {project.type}
                    </Badge>
                  </div>
                  
                  <div>
                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-smooth">
                      {project.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar className="w-4 h-4" />
                      {project.duration}
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Key features */}
                  <div>
                    <h4 className="font-semibold mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="secondary" 
                          className="text-xs bg-primary/5 text-primary border-primary/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button 
                      variant="default" 
                      size="sm" 
                      className="gradient-primary shadow-sm hover:shadow-card transition-smooth"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-primary/20 hover:border-primary transition-smooth"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Source Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;