
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Smartphone, ShoppingCart, Cloud, Brain, Rocket, CheckCircle, Users, Award, Star, TrendingUp, Shield, Zap, Play } from "lucide-react";

const Index = () => {
  const services = [
    {
      title: "Custom Software Development",
      description: "Tailored software solutions built with cutting-edge technologies to meet your unique business requirements.",
      icon: Code,
      features: ["Web Applications", "API Development", "System Integration"]
    },
    {
      title: "Mobile App Development", 
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
      icon: Smartphone,
      features: ["iOS & Android", "React Native", "Flutter"]
    },
    {
      title: "Enterprise Solutions",
      description: "Comprehensive business solutions including ERP, CRM, and POS systems with full compliance and integration.",
      icon: ShoppingCart,
      features: ["ERP Systems", "CRM Solutions", "POS Integration"]
    },
    {
      title: "Cloud & DevOps",
      description: "Scalable cloud infrastructure and automated deployment solutions for modern businesses.",
      icon: Cloud,
      features: ["AWS/Azure", "CI/CD", "Infrastructure as Code"]
    },
    {
      title: "AI & Data Analytics",
      description: "Intelligent solutions powered by machine learning and advanced analytics to drive business insights.",
      icon: Brain,
      features: ["Machine Learning", "Data Visualization", "Predictive Analytics"]
    },
    {
      title: "Digital Transformation",
      description: "Strategic consulting and implementation services to modernize your business processes and technology stack.",
      icon: Rocket,
      features: ["Strategy Consulting", "Process Automation", "Technology Roadmap"]
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Delivered", icon: TrendingUp },
    { number: "25+", label: "Happy Clients", icon: Users },
    { number: "5+", label: "Years of Excellence", icon: Award },
    { number: "100%", label: "Client Satisfaction", icon: Star }
  ];

  const features = [
    {
      title: "Expert Team",
      description: "Seasoned professionals with deep expertise in modern technologies and industry best practices.",
      icon: Users
    },
    {
      title: "Quality Assurance",
      description: "Rigorous testing protocols and quality control measures to ensure flawless delivery.",
      icon: Shield
    },
    {
      title: "Agile Delivery",
      description: "Fast, iterative development process with transparent communication and on-time delivery.",
      icon: Zap
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-xl animate-float"></div>
          <div className="absolute top-40 right-20 w-48 h-48 bg-primary-light/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
          <div className="absolute bottom-40 right-1/3 w-40 h-40 bg-primary-light/8 rounded-full blur-xl animate-float" style={{ animationDelay: '6s' }}></div>
        </div>

        {/* Grid Pattern Background */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 71, 171, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 71, 171, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="max-w-6xl mx-auto text-center">
            {/* Animated Badge */}
            <div className="mb-8 animate-fade-in-up">
              <div className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary/10 to-primary-light/10 rounded-full text-primary font-semibold text-sm mb-8 backdrop-blur-sm border border-primary/10 hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse"></div>
                Welcome to the Future of Technology
              </div>
            </div>

            {/* Main Heading with Typewriter Effect */}
            <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-slate-900 mb-8 leading-tight">
                Transform Your{" "}
                <span className="bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
                  Business
                </span>{" "}
                With Technology
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-6 max-w-4xl mx-auto leading-relaxed opacity-90">
                We craft innovative software solutions that drive growth, efficiency, and success for modern businesses
              </p>
              <p className="text-lg text-slate-500 max-w-3xl mx-auto opacity-80">
                From custom applications to enterprise systems, we deliver technology that makes a difference
              </p>
            </div>

            {/* CTA Buttons with Enhanced Animation */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Button
                asChild
                size="lg"
                className="group bg-gradient-to-r from-primary to-primary-light hover:from-primary/90 hover:to-primary-light/90 text-white rounded-full px-12 py-8 text-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 hover:scale-105"
              >
                <Link to="/contact" className="flex items-center gap-3">
                  Get Started Today
                  <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="group rounded-full px-12 py-8 text-xl border-2 border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-primary/30 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
              >
                <Link to="/portfolio" className="flex items-center gap-3">
                  <Play className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  View Our Work
                </Link>
              </Button>
            </div>

            {/* Animated Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center group cursor-pointer">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-primary-light/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                    <stat.icon className="h-10 w-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors duration-300">{stat.number}</div>
                  <div className="text-slate-600 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Floating Action Elements */}
            <div className="absolute top-1/2 left-10 hidden lg:block animate-float">
              <div className="w-4 h-4 bg-primary/20 rounded-full"></div>
            </div>
            <div className="absolute top-1/3 right-16 hidden lg:block animate-float" style={{ animationDelay: '3s' }}>
              <div className="w-6 h-6 bg-primary-light/30 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-gradient-to-br from-white to-slate-50/50 relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-primary/5 to-primary-light/5 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center px-6 py-3 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-8 animate-fade-in-up">
              Our Expertise
            </div>
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Solutions That Drive{" "}
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                Results
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              From concept to deployment, we deliver comprehensive technology solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="group relative overflow-hidden border-0 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 hover:rotate-1 animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-light/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                
                <CardContent className="p-10 relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-primary-light/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                    <service.icon className="h-10 w-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-8 leading-relaxed text-lg opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                    {service.description}
                  </p>
                  <ul className="space-y-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-slate-500 group-hover:text-slate-600 transition-colors duration-300" style={{ animationDelay: `${idx * 0.1}s` }}>
                        <CheckCircle className="h-5 w-5 text-primary mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center animate-fade-in-up">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="group rounded-full px-12 py-6 text-lg border-2 border-primary/20 text-primary hover:bg-primary/5 hover:border-primary/40 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
            >
              <Link to="/services" className="flex items-center gap-3">
                Explore All Services
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-primary-light/10 to-primary/10 rounded-full blur-3xl animate-float"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center justify-center px-6 py-3 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-8 animate-fade-in-up">
                Why Choose Us
              </div>
              <h2 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                Excellence in Every{" "}
                <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                  Project
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                We combine technical expertise with business acumen to deliver solutions that drive real results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="text-center group cursor-pointer animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-primary/10 to-primary-light/10 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                    <feature.icon className="h-12 w-12 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-lg opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-1/4 w-64 h-64 bg-primary-light/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/10 to-primary-light/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, white 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, white 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center px-6 py-3 bg-white/10 rounded-full text-white/80 font-semibold text-sm mb-8 backdrop-blur-sm animate-fade-in-up">
              <div className="w-2 h-2 bg-white/60 rounded-full mr-3 animate-pulse"></div>
              Ready to Get Started?
            </div>
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-8 leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Let's Build Something{" "}
              <span className="bg-gradient-to-r from-primary-light to-white bg-clip-text text-transparent">
                Amazing
              </span>{" "}
              Together
            </h2>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Transform your business with our cutting-edge technology solutions. Get in touch with our experts today to discuss your project requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Button
                asChild
                size="lg"
                className="group bg-gradient-to-r from-primary-light to-primary hover:from-primary-light/90 hover:to-primary/90 text-white rounded-full px-12 py-8 text-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105"
              >
                <Link to="/contact" className="flex items-center gap-3">
                  Start Your Project
                  <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="group rounded-full px-12 py-8 text-xl border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/30 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
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
