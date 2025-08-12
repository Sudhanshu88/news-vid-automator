import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science",
      institution: "Jai Narain College Of Technology",
      duration: "Nov 2021 – May 2025",
      type: "Bachelor's Degree",
      status: "Completed"
    },
    {
      degree: "Higher Secondary (XII)",
      institution: "Sita Ram Uchhtar Madhyamik Vidhyalay Chappra",
      duration: "April 2019 - June 2021",
      type: "12th Grade",
      status: "Completed"
    },
    {
      degree: "Secondary School (X)",
      institution: "St Severin's High School Patna",
      duration: "March 2019",
      type: "10th Grade",
      status: "Completed"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 px-4 py-2">
              <GraduationCap className="w-4 h-4 mr-2" />
              Education
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Academic <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Strong educational foundation in Computer Science and technology
            </p>
          </div>

          {/* Education timeline */}
          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card 
                key={index} 
                className="gradient-card shadow-card border-0 transition-smooth hover:shadow-float hover:scale-105"
              >
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                          <GraduationCap className="w-5 h-5" />
                        </div>
                        <Badge variant="outline" className="border-primary/20 text-primary">
                          {edu.type}
                        </Badge>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                      <p className="text-muted-foreground font-medium mb-2">{edu.institution}</p>
                      
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {edu.duration}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200">
                        <Award className="w-3 h-3 mr-1" />
                        {edu.status}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Achievement highlight */}
          <div className="mt-12">
            <Card className="gradient-primary shadow-hero text-white border-0">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <GraduationCap className="w-8 h-8" />
                  <h3 className="text-2xl font-bold">Fresh Graduate Ready to Excel</h3>
                </div>
                <p className="text-lg opacity-90 max-w-2xl mx-auto">
                  Recently completed Computer Science degree with hands-on project experience 
                  and industry-relevant skills. Ready to contribute to innovative teams and grow professionally.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;