import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "We create stunning, responsive websites that engage your audience and drive results. From simple landing pages to complex web applications, we use the latest technologies to deliver exceptional user experiences.",
      features: [
        "Responsive Design",
        "Custom CMS Solutions",
        "E-commerce Platforms",
        "Progressive Web Apps",
        "API Integration",
        "Performance Optimization"
      ],
      icon: "🌐",
      technologies: ["React", "Next.js", "Vue.js", "Node.js", "WordPress"]
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that provide seamless user experiences across all devices. We build apps that users love and businesses rely on.",
      features: [
        "Native iOS & Android",
        "Cross-platform Solutions",
        "UI/UX Design",
        "App Store Optimization",
        "Push Notifications",
        "Offline Functionality"
      ],
      icon: "📱",
      technologies: ["Flutter", "React Native", "Swift", "Kotlin", "Xamarin"]
    },
    {
      title: "POS Solutions",
      description: "Complete Point-of-Sale systems that streamline your business operations. FBR-compliant solutions with real-time reporting and inventory management.",
      features: [
        "FBR Compliance",
        "Inventory Management",
        "Sales Analytics",
        "Multi-location Support",
        "Payment Integration",
        "Customer Management"
      ],
      icon: "🏪",
      technologies: ["Cloud-based", "Mobile POS", "Hardware Integration"]
    },
    {
      title: "DevOps & Cloud Services",
      description: "Streamline your development workflow with modern DevOps practices and cloud infrastructure. We help you deploy, scale, and maintain applications efficiently.",
      features: [
        "CI/CD Pipelines",
        "Cloud Migration",
        "Container Orchestration",
        "Infrastructure as Code",
        "Monitoring & Logging",
        "Security Implementation"
      ],
      icon: "☁️",
      technologies: ["AWS", "Docker", "Kubernetes", "Jenkins", "Terraform"]
    },
    {
      title: "AI & Data Analytics",
      description: "Harness the power of artificial intelligence and data analytics to make informed decisions and automate processes. Transform your data into actionable insights.",
      features: [
        "Machine Learning Models",
        "Natural Language Processing",
        "Business Intelligence",
        "Predictive Analytics",
        "Data Visualization",
        "AI Chatbots"
      ],
      icon: "🤖",
      technologies: ["Python", "TensorFlow", "Power BI", "Tableau", "OpenAI"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 overflow-hidden">
      {/* Hero Section */}
      <section className="py-20 h-[40vh] lg:h-[60vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
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

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-slate-100 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive technology solutions tailored to your business needs. 
              From web development to AI, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-12 animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Service Content */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary/10 to-primary-light/10 rounded-2xl flex items-center justify-center text-2xl border border-primary/10">
                      {service.icon}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-100">
                      {service.title}
                    </h2>
                  </div>
                  
                  <p className="text-lg text-slate-300 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-slate-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Service Visual */}
                <div className="flex-1">
                  <Card className="relative overflow-hidden border-0 rounded-3xl backdrop-blur-lg bg-slate-800/50 shadow-lg hover:shadow-2xl transition-all duration-500 group">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/5 to-primary-light/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <CardContent className="p-8 relative z-10">
                      <div className="w-full h-64 bg-gradient-to-r from-primary/10 to-primary-light/10 rounded-xl flex items-center justify-center text-6xl border border-primary/10">
                        {service.icon}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-56 h-56 bg-purple-500/25 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-blue-500/25 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-100 mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Let's discuss which services are right for your project and how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white hover:text-slate-900 rounded-2xl px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <Link to="/contact">Get Started</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900 rounded-2xl px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
