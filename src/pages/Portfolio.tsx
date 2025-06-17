
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const projects = [
    {
      title: "ACTFlow",
      description: "A comprehensive process automation platform that streamlines business workflows and increases operational efficiency.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tags: ["Process Automation", "React", "Node.js", "MongoDB"],
      category: "Web Application"
    },
    {
      title: "Antaragame",
      description: "AI-powered gaming platform that creates personalized gaming experiences using machine learning algorithms.",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop",
      tags: ["AI Gaming", "Machine Learning", "Unity", "Python"],
      category: "AI Platform"
    },
    {
      title: "Bitlenz",
      description: "Advanced data analytics dashboard providing real-time insights and business intelligence for enterprise clients.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tags: ["Data Analytics", "Business Intelligence", "Vue.js", "D3.js"],
      category: "Analytics Dashboard"
    },
    {
      title: "BasedAgent",
      description: "Intelligent virtual AI assistant that helps businesses automate customer service and support operations.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
      tags: ["AI Assistant", "NLP", "Chatbot", "OpenAI"],
      category: "AI Solution"
    },
    {
      title: "FIGMENT",
      description: "Robust fintech trading backend system handling high-frequency transactions with enterprise-grade security.",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=400&fit=crop",
      tags: ["Fintech", "Trading", "Backend", "Microservices"],
      category: "Backend System"
    },
    {
      title: "Smart POS Pro",
      description: "FBR-compliant point-of-sale system with inventory management and real-time sales analytics for retail businesses.",
      image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=600&h=400&fit=crop",
      tags: ["POS System", "FBR Compliant", "Inventory", "Flutter"],
      category: "Mobile App"
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-surface-light">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-surface-light to-primary-light/10">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-surface-dark mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-slate-dark max-w-3xl mx-auto mb-8">
              Explore our latest projects and see how we've helped businesses 
              transform their digital presence with innovative solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="group relative overflow-hidden border-0 rounded-3xl backdrop-blur-lg bg-white/90 hover:bg-white/95 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-light/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/95 backdrop-blur-sm text-sm font-medium text-surface-dark rounded-full border border-primary/10">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                {/* Subtle glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/5 to-primary-light/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardContent className="p-6 relative z-10">
                  <h3 className="text-xl font-heading font-bold text-surface-dark mb-3 group-hover:text-primary transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-slate-dark mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20 group-hover:bg-primary/15 transition-colors duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Button
                    variant="outline"
                    className="w-full border-primary/20 text-primary hover:bg-primary hover:text-white rounded-2xl transition-all duration-200 hover:shadow-lg"
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50+", label: "Projects Completed" },
              { number: "30+", label: "Happy Clients" },
              { number: "2+", label: "Years Experience" },
              { number: "100%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="animate-fade-in-up p-6 rounded-3xl bg-gradient-to-r from-primary/5 to-primary-light/5 border border-primary/10"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-dark font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-surface-dark via-slate-dark to-surface-dark">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-slate-light mb-8 max-w-2xl mx-auto">
              Join our growing list of satisfied clients and let us help you build something amazing.
            </p>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white text-surface-dark border-white hover:bg-slate-light rounded-2xl px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <Link to="/contact">Start Your Project</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
