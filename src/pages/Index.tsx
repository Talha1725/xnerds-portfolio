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
      features: ["Web Applications", "API Development", "System Integration"],
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Mobile App Development", 
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
      icon: Smartphone,
      features: ["iOS & Android", "React Native", "Flutter"],
      gradient: "from-teal-500 to-cyan-600"
    },
    {
      title: "Enterprise Solutions",
      description: "Comprehensive business solutions including ERP, CRM, and POS systems with full compliance and integration.",
      icon: ShoppingCart,
      features: ["ERP Systems", "CRM Solutions", "POS Integration"],
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Cloud & DevOps",
      description: "Scalable cloud infrastructure and automated deployment solutions for modern businesses.",
      icon: Cloud,
      features: ["AWS/Azure", "CI/CD", "Infrastructure as Code"],
      gradient: "from-indigo-500 to-blue-600"
    },
    {
      title: "AI & Data Analytics",
      description: "Intelligent solutions powered by machine learning and advanced analytics to drive business insights.",
      icon: Brain,
      features: ["Machine Learning", "Data Visualization", "Predictive Analytics"],
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "Digital Transformation",
      description: "Strategic consulting and implementation services to modernize your business processes and technology stack.",
      icon: Rocket,
      features: ["Strategy Consulting", "Process Automation", "Technology Roadmap"],
      gradient: "from-orange-500 to-red-600"
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Delivered", icon: TrendingUp, color: "text-blue-400" },
    { number: "25+", label: "Happy Clients", icon: Users, color: "text-purple-400" },
    { number: "5+", label: "Years of Excellence", icon: Award, color: "text-teal-400" },
    { number: "100%", label: "Client Satisfaction", icon: Star, color: "text-yellow-400" }
  ];

  const features = [
    {
      title: "Expert Team",
      description: "Seasoned professionals with deep expertise in modern technologies and industry best practices.",
      icon: Users,
      gradient: "from-blue-500/20 to-purple-500/20",
      iconColor: "text-blue-400"
    },
    {
      title: "Quality Assurance",
      description: "Rigorous testing protocols and quality control measures to ensure flawless delivery.",
      icon: Shield,
      gradient: "from-green-500/20 to-teal-500/20",
      iconColor: "text-green-400"
    },
    {
      title: "Agile Delivery",
      description: "Fast, iterative development process with transparent communication and on-time delivery.",
      icon: Zap,
      gradient: "from-yellow-500/20 to-orange-500/20",
      iconColor: "text-yellow-400"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-float"></div>
          <div className="absolute top-40 right-20 w-48 h-48 bg-purple-500/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-teal-500/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
          <div className="absolute bottom-40 right-1/3 w-40 h-40 bg-pink-500/25 rounded-full blur-xl animate-float" style={{ animationDelay: '6s' }}></div>
        </div>

        {/* Grid Pattern Background */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-10">
          <div className="max-w-6xl mx-auto text-center">
            {/* Animated Badge */}
            <div className="mb-8 animate-fade-in-up">
              <div className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-blue-300 font-semibold text-sm mb-6 backdrop-blur-sm border border-blue-500/20 hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
                Welcome to the Future of Technology
              </div>
            </div>

            {/* Main Heading */}
            <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black text-slate-100 mb-6 leading-tight tracking-tight">
                Transform Your{" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
                  Business
                </span>{" "}
                With Technology
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-4 max-w-4xl mx-auto leading-relaxed font-medium">
                We craft innovative software solutions that drive growth, efficiency, and success for modern businesses
              </p>
              <p className="text-base text-slate-400 max-w-3xl mx-auto font-normal">
                From custom applications to enterprise systems, we deliver technology that makes a difference
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Button
                asChild
                size="lg"
                className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full px-12 py-6 text-lg font-bold shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105"
              >
                <Link to="/contact" className="flex items-center gap-3">
                  Get Started Today
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="group rounded-full bg-transparent text-white hover:bg-blue-500 hover:text-white px-12 py-6 text-lg font-bold border-2 border-blue-500 hover:border-blue-500 shadow-xl hover:shadow-2xl transition-all duration-500 transform backdrop-blur-sm hover:scale-105"
              >
                <Link to="/portfolio" className="flex items-center gap-3">
                  <Play className="h-5 w-5 group-hover:scale-125 transition-transform duration-300" />
                  View Our Work
                </Link>
              </Button>
            </div>

            {/* Animated Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center group cursor-pointer">
                  <div className="w-16 h-16 bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 shadow-xl group-hover:shadow-2xl backdrop-blur-sm border border-slate-600/30">
                    <stat.icon className={`h-8 w-8 ${stat.color} group-hover:scale-125 transition-transform duration-300`} />
                  </div>
                  <div className="text-3xl md:text-4xl font-black text-slate-100 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">{stat.number}</div>
                  <div className="text-slate-400 text-sm font-semibold uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
          onClick={() => {
            const servicesSection = document.querySelector('section:nth-of-type(2)');
            servicesSection?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <div className="w-6 h-10 border-2 border-blue-400/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-400/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-full text-teal-300 font-semibold text-sm mb-6 animate-fade-in-up backdrop-blur-sm border border-teal-500/20">
              Our Expertise
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-black text-slate-100 mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Solutions That Drive{" "}
              <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                Results
              </span>
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up font-medium" style={{ animationDelay: '0.2s' }}>
              From concept to deployment, we deliver comprehensive technology solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="group relative overflow-hidden rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 hover:rotate-1 animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-all duration-500`}></div>
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                
                <CardContent className="p-8 relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} bg-opacity-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-xl backdrop-blur-sm border border-slate-600/30`}>
                    <service.icon className="h-8 w-8 text-slate-300 group-hover:scale-125 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-black text-slate-100 mb-4 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 mb-6 leading-relaxed text-sm font-medium group-hover:text-slate-200 transition-colors duration-300">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-slate-400 group-hover:text-slate-300 transition-colors duration-300 text-sm font-medium" style={{ animationDelay: `${idx * 0.1}s` }}>
                        <CheckCircle className="h-4 w-4 text-teal-400 mr-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
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
              className="group rounded-full bg-transparent text-white hover:bg-blue-500 hover:text-white px-12 py-6 text-lg font-bold border-2 border-blue-500 hover:border-blue-500 shadow-xl hover:shadow-2xl transition-all duration-500 transform backdrop-blur-sm hover:scale-105"
              >
              <Link to="/services" className="flex items-center gap-3">
                Explore All Services
                <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-green-500/15 to-teal-500/15 rounded-full blur-3xl animate-float"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-full text-green-300 font-semibold text-sm mb-6 animate-fade-in-up backdrop-blur-sm border border-green-500/20">
                Why Choose Us
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-black text-slate-100 mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                Excellence in Every{" "}
                <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                  Project
                </span>
              </h2>
              <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up font-medium" style={{ animationDelay: '0.2s' }}>
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
                  <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-xl backdrop-blur-sm border border-slate-600/30`}>
                    <feature.icon className={`h-10 w-10 ${feature.iconColor} group-hover:scale-125 transition-transform duration-300`} />
                  </div>
                  <h3 className="text-xl font-black text-slate-100 mb-4 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-sm font-medium group-hover:text-slate-200 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-1/4 w-56 h-56 bg-purple-500/25 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-blue-500/25 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-teal-500/15 to-purple-500/15 rounded-full blur-3xl animate-pulse"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.4) 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center px-6 py-3 bg-slate-700/50 rounded-full text-slate-300 font-semibold text-sm mb-8 backdrop-blur-sm animate-fade-in-up border border-slate-600/50">
              <div className="w-2 h-2 bg-purple-400/80 rounded-full mr-3 animate-pulse"></div>
              Ready to Get Started?
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-black text-slate-100 mb-8 leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Let's Build Something{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Amazing
              </span>{" "}
              Together
            </h2>
            <p className="text-lg text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto animate-fade-in-up font-medium" style={{ animationDelay: '0.2s' }}>
              Transform your business with our cutting-edge technology solutions. Get in touch with our experts today to discuss your project requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Button
                asChild
                size="lg"
                className="group bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white rounded-full px-12 py-6 text-lg font-black shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-110"
              >
                <Link to="/contact" className="flex items-center gap-3">
                  Start Your Project
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="group rounded-full bg-transparent text-white hover:bg-blue-500 hover:text-white px-12 py-6 text-lg font-bold border-2 border-blue-500 hover:border-blue-500 shadow-xl hover:shadow-2xl transition-all duration-500 transform backdrop-blur-sm hover:scale-105"
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
