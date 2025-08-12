import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Award, Settings, Cpu, Briefcase } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Leadership & Management",
      skills: ["Team Management", "Leadership", "Project Management"],
      color: "text-primary"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Business Development",
      skills: ["Lead Generation", "Client Relations", "Strategic Partnerships"],
      color: "text-tech-blue"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Professional Skills",
      skills: ["Communication", "Problem Solving", "Customer Service"],
      color: "text-tech-cyan"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Technical Skills",
      skills: ["ADCA", "Computer Applications", "Data Analysis"],
      color: "text-tech-purple"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Additional Qualifications",
      skills: ["NSS Volunteer", "Class Representative", "Training & Development"],
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
              Skills
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Professional <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive skill set for driving business success and organizational growth
            </p>
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
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
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="transition-smooth hover:scale-105 hover:shadow-sm bg-primary/5 text-primary border-primary/20"
                      >
                        {skill}
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
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Advanced Diploma in Computer Application (ADCA)</h4>
                    <p className="text-sm opacity-90">Professional Certification</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Youth National Motivational Academy (YNMA)</h4>
                    <p className="text-sm opacity-90">Leadership & Motivation</p>
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

export default SkillsSection;