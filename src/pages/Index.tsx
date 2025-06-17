
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Smartphone, ShoppingCart, Cloud, Brain, Rocket, CheckCircle, Users, Award, Star, TrendingUp, Shield, Zap } from "lucide-react";

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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, #0047AB 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, #7AB8F5 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="max-w-6xl mx-auto text-center">
            {/* Main Heading */}
            <div className="mb-8 animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-slate-900 mb-6 leading-tight">
                Innovate.{" "}
                <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                  Build.
                </span>{" "}
                Scale.
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-slate-600 mb-4 max-w-4xl mx-auto leading-relaxed">
                We transform businesses through cutting-edge technology solutions
              </p>
              <p className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto">
                Partner with xNerds Solutions to accelerate your digital transformation journey with custom software, mobile apps, and enterprise solutions.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-primary-light hover:from-primary/90 hover:to-primary-light/90 text-white rounded-full px-12 py-8 text-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                <Link to="/contact" className="flex items-center gap-3">
                  Get Started
                  <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-12 py-8 text-xl border-2 border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-primary/30 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary-light/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{stat.number}</div>
                  <div className="text-slate-600 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="inline-flex items-center justify-center px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-4">
              Our Services
            </div>
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 mb-8">
              Solutions That Drive Results
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              From concept to deployment, we deliver comprehensive technology solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="group relative overflow-hidden border-0 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-light/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardContent className="p-10 relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-primary-light/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-300">
                    <service.icon className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-slate-500">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-10 py-6 text-lg border-2 border-primary/20 text-primary hover:bg-primary/5 hover:border-primary/40 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link to="/services">Explore All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20 animate-fade-in-up">
              <div className="inline-flex items-center justify-center px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-4">
                Why Choose Us
              </div>
              <h2 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 mb-8">
                Excellence in Every Project
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                We combine technical expertise with business acumen to deliver solutions that drive real results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="text-center group animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-primary/10 to-primary-light/10 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-all duration-300">
                    <feature.icon className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
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
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, white 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, white 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-1/4 w-64 h-64 bg-primary-light/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <div className="inline-flex items-center justify-center px-4 py-2 bg-white/10 rounded-full text-white/80 font-semibold text-sm mb-6 backdrop-blur-sm">
              Ready to Get Started?
            </div>
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-8 leading-tight">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              Transform your business with our cutting-edge technology solutions. Get in touch with our experts today to discuss your project requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary-light to-primary hover:from-primary-light/90 hover:to-primary/90 text-white rounded-full px-12 py-8 text-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                <Link to="/contact" className="flex items-center gap-3">
                  Start Your Project
                  <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-12 py-8 text-xl border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/30 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
