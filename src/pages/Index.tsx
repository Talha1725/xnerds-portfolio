
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
    <div className="min-h-screen bg-slate-900 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float"></div>
          <div className="absolute top-40 right-20 w-48 h-48 bg-primary-light/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-primary/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
          <div className="absolute bottom-40 right-1/3 w-40 h-40 bg-primary-light/25 rounded-full blur-xl animate-float" style={{ animationDelay: '6s' }}></div>
        </div>

        {/* Grid Pattern Background */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(122, 184, 245, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(122, 184, 245, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="max-w-6xl mx-auto text-center">
            {/* Animated Badge */}
            <div className="mb-12 animate-fade-in-up">
              <div className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary/20 to-primary-light/20 rounded-full text-primary-light font-bold text-base mb-8 backdrop-blur-sm border border-primary/20 hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg">
                <div className="w-3 h-3 bg-primary-light rounded-full mr-4 animate-pulse"></div>
                Welcome to the Future of Technology
              </div>
            </div>

            {/* Main Heading */}
            <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-black text-slate-100 mb-10 leading-tight tracking-tight">
                Transform Your{" "}
                <span className="bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
                  Business
                </span>{" "}
                With Technology
              </h1>
              <p className="text-2xl md:text-3xl text-slate-300 mb-8 max-w-5xl mx-auto leading-relaxed font-medium">
                We craft innovative software solutions that drive growth, efficiency, and success for modern businesses
              </p>
              <p className="text-xl text-slate-400 max-w-4xl mx-auto font-normal">
                From custom applications to enterprise systems, we deliver technology that makes a difference
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-24 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Button
                asChild
                size="lg"
                className="group bg-gradient-to-r from-primary to-primary-light hover:from-primary/90 hover:to-primary-light/90 text-white rounded-full px-16 py-10 text-2xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105"
              >
                <Link to="/contact" className="flex items-center gap-4">
                  Get Started Today
                  <ArrowRight className="h-7 w-7 group-hover:translate-x-3 transition-transform duration-300" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="group rounded-full px-16 py-10 text-2xl font-bold border-3 border-slate-600 text-slate-300 hover:bg-slate-800/50 hover:border-primary/40 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 backdrop-blur-sm"
              >
                <Link to="/portfolio" className="flex items-center gap-4">
                  <Play className="h-6 w-6 group-hover:scale-125 transition-transform duration-300" />
                  View Our Work
                </Link>
              </Button>
            </div>

            {/* Animated Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center group cursor-pointer">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-primary-light/20 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 shadow-xl group-hover:shadow-2xl backdrop-blur-sm border border-primary/10">
                    <stat.icon className="h-12 w-12 text-primary-light group-hover:scale-125 transition-transform duration-300" />
                  </div>
                  <div className="text-5xl md:text-6xl font-black text-slate-100 mb-4 group-hover:text-primary-light transition-colors duration-300">{stat.number}</div>
                  <div className="text-slate-400 text-base font-bold uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-3 border-primary-light/40 rounded-full flex justify-center">
            <div className="w-2 h-4 bg-primary-light/60 rounded-full mt-3 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-40 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-primary/10 to-primary-light/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-24">
            <div className="inline-flex items-center justify-center px-8 py-4 bg-primary/20 rounded-full text-primary-light font-bold text-lg mb-10 animate-fade-in-up backdrop-blur-sm border border-primary/20">
              Our Expertise
            </div>
            <h2 className="text-5xl md:text-7xl font-heading font-black text-slate-100 mb-10 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Solutions That Drive{" "}
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                Results
              </span>
            </h2>
            <p className="text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up font-medium" style={{ animationDelay: '0.2s' }}>
              From concept to deployment, we deliver comprehensive technology solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="group relative overflow-hidden border-0 rounded-3xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-6 hover:rotate-1 animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary-light/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-primary-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                
                <CardContent className="p-12 relative z-10">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-primary-light/20 rounded-3xl flex items-center justify-center mb-10 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-xl group-hover:shadow-2xl backdrop-blur-sm border border-primary/20">
                    <service.icon className="h-12 w-12 text-primary-light group-hover:scale-125 transition-transform duration-300" />
                  </div>
                  <h3 className="text-3xl font-black text-slate-100 mb-8 group-hover:text-primary-light transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 mb-10 leading-relaxed text-xl font-medium group-hover:text-slate-200 transition-colors duration-300">
                    {service.description}
                  </p>
                  <ul className="space-y-5">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-slate-400 group-hover:text-slate-300 transition-colors duration-300 text-lg font-medium" style={{ animationDelay: `${idx * 0.1}s` }}>
                        <CheckCircle className="h-6 w-6 text-primary-light mr-5 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                        <span>{feature}</span>
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
              className="group rounded-full px-16 py-8 text-xl font-bold border-3 border-primary/30 text-primary-light hover:bg-primary/10 hover:border-primary/60 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 backdrop-blur-sm"
            >
              <Link to="/services" className="flex items-center gap-4">
                Explore All Services
                <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-40 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-primary-light/15 to-primary/15 rounded-full blur-3xl animate-float"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-24">
              <div className="inline-flex items-center justify-center px-8 py-4 bg-primary/20 rounded-full text-primary-light font-bold text-lg mb-10 animate-fade-in-up backdrop-blur-sm border border-primary/20">
                Why Choose Us
              </div>
              <h2 className="text-5xl md:text-7xl font-heading font-black text-slate-100 mb-10 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                Excellence in Every{" "}
                <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                  Project
                </span>
              </h2>
              <p className="text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up font-medium" style={{ animationDelay: '0.2s' }}>
                We combine technical expertise with business acumen to deliver solutions that drive real results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="text-center group cursor-pointer animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-28 h-28 bg-gradient-to-br from-primary/20 to-primary-light/20 rounded-3xl flex items-center justify-center mx-auto mb-10 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-xl group-hover:shadow-2xl backdrop-blur-sm border border-primary/20">
                    <feature.icon className="h-14 w-14 text-primary-light group-hover:scale-125 transition-transform duration-300" />
                  </div>
                  <h3 className="text-3xl font-black text-slate-100 mb-8 group-hover:text-primary-light transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-xl font-medium group-hover:text-slate-200 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-1/4 w-64 h-64 bg-primary-light/25 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-primary/25 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/15 to-primary-light/15 rounded-full blur-3xl animate-pulse"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(122, 184, 245, 0.4) 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, rgba(122, 184, 245, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center justify-center px-8 py-4 bg-slate-700/50 rounded-full text-slate-300 font-bold text-lg mb-12 backdrop-blur-sm animate-fade-in-up border border-slate-600/50">
              <div className="w-3 h-3 bg-primary-light/80 rounded-full mr-4 animate-pulse"></div>
              Ready to Get Started?
            </div>
            <h2 className="text-5xl md:text-7xl font-heading font-black text-slate-100 mb-12 leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Let's Build Something{" "}
              <span className="bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
                Amazing
              </span>{" "}
              Together
            </h2>
            <p className="text-2xl text-slate-300 mb-16 leading-relaxed max-w-4xl mx-auto animate-fade-in-up font-medium" style={{ animationDelay: '0.2s' }}>
              Transform your business with our cutting-edge technology solutions. Get in touch with our experts today to discuss your project requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Button
                asChild
                size="lg"
                className="group bg-gradient-to-r from-primary-light to-primary hover:from-primary-light/90 hover:to-primary/90 text-white rounded-full px-16 py-10 text-2xl font-black shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-110"
              >
                <Link to="/contact" className="flex items-center gap-4">
                  Start Your Project
                  <ArrowRight className="h-7 w-7 group-hover:translate-x-3 transition-transform duration-300" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="group rounded-full px-16 py-10 text-2xl font-bold border-3 border-slate-600/50 text-slate-300 hover:bg-slate-700/30 hover:border-slate-500/70 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3"
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
