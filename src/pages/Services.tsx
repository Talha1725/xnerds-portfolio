
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
      gradient: "from-blue-500 to-cyan-500",
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
      gradient: "from-purple-500 to-pink-500",
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
      gradient: "from-green-500 to-emerald-500",
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
      gradient: "from-orange-500 to-red-500",
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
      gradient: "from-indigo-500 to-purple-500",
      technologies: ["Python", "TensorFlow", "Power BI", "Tableau", "OpenAI"]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-primary-light/10">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Comprehensive technology solutions tailored to your business needs. 
              From web development to AI, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
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
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center text-2xl`}>
                      {service.icon}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
                      {service.title}
                    </h2>
                  </div>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Service Visual */}
                <div className="flex-1">
                  <Card className="bg-gradient-to-br from-gray-50 to-white border-0 shadow-lg rounded-2xl overflow-hidden">
                    <CardContent className="p-8">
                      <div className={`w-full h-64 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center text-6xl opacity-20`}>
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
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss which services are right for your project and how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white text-primary border-white hover:bg-gray-100 rounded-full px-8"
              >
                <Link to="/contact">Get Started</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary rounded-full px-8"
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
