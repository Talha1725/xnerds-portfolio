
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Smartphone, ShoppingCart, Cloud, Brain, Rocket, CheckCircle, Users, Award } from "lucide-react";

const Index = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies",
      icon: Code,
      features: ["Responsive Design", "Custom CMS", "E-commerce Solutions"]
    },
    {
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps for iOS and Android",
      icon: Smartphone,
      features: ["React Native", "Flutter", "Native Development"]
    },
    {
      title: "POS Solutions",
      description: "Complete point-of-sale systems with FBR compliance",
      icon: ShoppingCart,
      features: ["Inventory Management", "Sales Analytics", "FBR Integration"]
    },
    {
      title: "Cloud & DevOps",
      description: "Scalable cloud infrastructure and deployment automation",
      icon: Cloud,
      features: ["AWS/Azure", "CI/CD Pipelines", "Kubernetes"]
    },
    {
      title: "AI & Analytics",
      description: "Intelligent solutions powered by machine learning",
      icon: Brain,
      features: ["Data Analytics", "ML Models", "Business Intelligence"]
    },
    {
      title: "Digital Strategy",
      description: "Comprehensive digital transformation consulting",
      icon: Rocket,
      features: ["Strategy Planning", "Technology Roadmap", "Digital Innovation"]
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "25+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "100%", label: "Client Satisfaction" }
  ];

  const whyChooseUs = [
    {
      title: "Expert Team",
      description: "Skilled professionals with proven track record in modern technologies",
      icon: Users
    },
    {
      title: "Quality Assurance",
      description: "Rigorous testing and quality control for every project",
      icon: Award
    },
    {
      title: "On-Time Delivery",
      description: "Committed to meeting deadlines without compromising quality",
      icon: CheckCircle
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-primary-light/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10 pt-20">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-8 leading-tight">
              Transform Your Business with{" "}
              <span className="bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
                Digital Innovation
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              We deliver cutting-edge technology solutions that drive growth, enhance efficiency, and position your business for the digital future.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-primary-light hover:from-primary/90 hover:to-primary-light/90 text-white rounded-full px-10 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                <Link to="/contact" className="flex items-center gap-2">
                  Start Your Project
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-10 py-6 text-lg border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/30 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(0,71,171,0.3) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="group relative overflow-hidden border-0 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-light/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardContent className="p-8 relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary-light/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-500">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-8 border-2 border-primary/20 text-primary hover:bg-primary/5 hover:border-primary/40 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
              Why Choose xNerds Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine expertise, innovation, and dedication to deliver exceptional results for your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {whyChooseUs.map((item, index) => (
              <div
                key={item.title}
                className="text-center group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-primary-light/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
                  <item.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, white 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, white 2px, transparent 2px)
            `,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-1/4 w-64 h-64 bg-primary-light/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Let's discuss how our technology solutions can drive your business forward and help you achieve your digital transformation goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary-light to-primary hover:from-primary-light/90 hover:to-primary/90 text-white rounded-full px-10 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                <Link to="/contact" className="flex items-center gap-2">
                  Get Started Today
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-10 py-6 text-lg border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/30 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
