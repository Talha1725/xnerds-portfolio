
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowDown, Code, Github, Linkedin, Settings, Calendar, Search, Zap, Brain, Rocket } from "lucide-react";

const Index = () => {
  const services = [
    {
      title: "Web Development",
      description: "Responsive design, custom CMS, modern frameworks",
      icon: Code,
      glowColor: "blue"
    },
    {
      title: "Mobile Apps",
      description: "Android/iOS, Flutter/React Native solutions",
      icon: Settings,
      glowColor: "purple"
    },
    {
      title: "POS Solutions",
      description: "FBR-compliant systems, sales tracking",
      icon: Calendar,
      glowColor: "green"
    },
    {
      title: "DevOps & Cloud",
      description: "CI/CD, cloud automation, Kubernetes",
      icon: Zap,
      glowColor: "orange"
    },
    {
      title: "AI & Analytics",
      description: "NLP, ML models, BI dashboards",
      icon: Brain,
      glowColor: "indigo"
    }
  ];

  const whyChooseUs = [
    {
      title: "Modern Tech",
      description: "Latest technologies and frameworks",
      icon: Code
    },
    {
      title: "Fast Delivery",
      description: "Agile development with quick turnaround",
      icon: Rocket
    },
    {
      title: "Expert Team",
      description: "Skilled professionals with proven track record",
      icon: Github
    }
  ];

  return (
    <div className="min-h-screen bg-surface-light">
      {/* Hero Section - Dark Accent */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-surface-dark via-slate-dark to-surface-dark overflow-hidden">
        {/* Tech Grid Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(122,184,245,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(122,184,245,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        {/* Floating Tech Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-32 h-32 bg-primary-light/30 rounded-full blur-xl animate-float"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-primary/40 rounded-lg rotate-45 animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-32 left-32 w-40 h-40 bg-gradient-to-r from-primary-light/20 to-primary/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/3 right-20 w-16 h-16 border-2 border-primary-light/40 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 bg-primary-light/30 rounded-xl rotate-12 animate-float" style={{ animationDelay: '1.5s' }}></div>
        </div>

        {/* Tech Doodles */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="absolute top-32 left-1/4 w-16 h-16 text-primary-light/40 animate-float" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 10.79V3c0-.55.45-1 1-1s1 .45 1 1v14.79c5.16-1.05 9-5.24 9-10.79V7L12 2z"/>
          </svg>
          <svg className="absolute top-1/2 right-1/4 w-12 h-12 text-primary-light/50 animate-float" style={{ animationDelay: '2s' }} viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="3"/>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
          </svg>
          <svg className="absolute bottom-1/3 left-16 w-20 h-20 text-primary/30 animate-float" style={{ animationDelay: '1s' }} viewBox="0 0 24 24" fill="currentColor">
            <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/>
            <circle cx="12" cy="12" r="4"/>
          </svg>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10 pt-16">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight">
              Empowering Your{" "}
              <span className="bg-gradient-to-r from-primary-light via-primary-light to-white bg-clip-text text-transparent">
                Digital Future
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-light mb-8 max-w-3xl mx-auto font-medium">
              From Web to AI — All Your Tech Needs, One Expert Team
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-primary-light hover:from-primary/90 hover:to-primary-light/90 text-white rounded-2xl px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 animate-pulse-glow"
              >
                <Link to="/contact">Get a Free Quote</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-2xl px-8 py-6 text-lg border-2 border-primary-light/40 text-primary-light hover:bg-primary-light/10 hover:border-primary-light/60 backdrop-blur-sm bg-white/10 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center space-y-2">
              <ArrowDown className="h-6 w-6 text-primary-light" />
              <div className="w-px h-8 bg-gradient-to-b from-primary-light to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section - Light Surface */}
      <section className="py-20 bg-surface-light relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(0,71,171,0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-surface-dark mb-6">
              What We Do
            </h2>
            <p className="text-xl text-slate-dark max-w-3xl mx-auto">
              We provide comprehensive tech solutions to help your business thrive in the digital age
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="group relative overflow-hidden border-0 rounded-3xl backdrop-blur-lg bg-white/90 hover:bg-white/95 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Subtle glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/5 to-primary-light/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardContent className="p-8 relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-r from-primary/10 to-primary-light/10 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 border border-primary/10">
                    <service.icon className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-surface-dark mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-dark leading-relaxed">
                    {service.description}
                  </p>
                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-3xl"></div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-2xl px-8 border-2 border-primary/20 text-primary hover:bg-primary/5 hover:border-primary/40 backdrop-blur-sm bg-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link to="/services">Explore All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - White Surface */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary-light/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-surface-dark mb-6">
              Why Choose Us
            </h2>
            <p className="text-xl text-slate-dark max-w-3xl mx-auto">
              We combine expertise, innovation, and dedication to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card
                key={item.title}
                className="group text-center relative overflow-hidden border-0 rounded-3xl backdrop-blur-lg bg-white/90 hover:bg-white/95 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Glassmorphism border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/5 to-primary-light/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardContent className="p-8 relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-r from-primary/10 to-primary-light/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500 border border-primary/10">
                    <item.icon className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-surface-dark mb-4 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-slate-dark leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Dark Accent */}
      <section className="py-20 bg-gradient-to-r from-surface-dark via-slate-dark to-surface-dark relative overflow-hidden">
        {/* Tech Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, white 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, white 2px, transparent 2px)
            `,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-slate-light mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help bring your digital vision to life
            </p>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white text-surface-dark border-white hover:bg-slate-light rounded-2xl px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <Link to="/contact">Let's Talk</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
