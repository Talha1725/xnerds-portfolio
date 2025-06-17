
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowDown, Code, Github, Linkedin, Settings, Calendar, Search } from "lucide-react";

const Index = () => {
  const services = [
    {
      title: "Web Development",
      description: "Responsive design, custom CMS, modern frameworks",
      icon: "🌐",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Mobile Apps",
      description: "Android/iOS, Flutter/React Native solutions",
      icon: "📱",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "POS Solutions",
      description: "FBR-compliant systems, sales tracking",
      icon: "🏪",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "DevOps & Cloud",
      description: "CI/CD, cloud automation, Kubernetes",
      icon: "☁️",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "AI & Analytics",
      description: "NLP, ML models, BI dashboards",
      icon: "🤖",
      gradient: "from-indigo-500 to-purple-500"
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
      icon: Settings
    },
    {
      title: "Expert Team",
      description: "Skilled professionals with proven track record",
      icon: Github
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-white to-primary-light/10 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-primary/5 to-primary-light/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10 pt-16">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-gray-900 mb-6">
              Empowering Your{" "}
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                Digital Future
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              From Web to AI — All Your Tech Needs, One Expert Team
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg font-semibold animate-pulse-glow"
              >
                <Link to="/contact">Get a Free Quote</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8 py-6 text-lg border-primary text-primary hover:bg-primary hover:text-white"
              >
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="h-6 w-6 text-primary" />
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              What We Do
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive tech solutions to help your business thrive in the digital age
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white rounded-2xl overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-8 border-primary text-primary hover:bg-primary hover:text-white"
            >
              <Link to="/services">Explore All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine expertise, innovation, and dedication to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card
                key={item.title}
                className="group text-center hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 rounded-2xl animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help bring your digital vision to life
            </p>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white text-primary border-white hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-semibold"
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
