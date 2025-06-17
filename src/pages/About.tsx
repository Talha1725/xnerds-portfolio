
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const timeline = [
    {
      year: "2023",
      title: "Founded",
      description: "xNerds Solutions was established in Lahore with a vision to empower businesses through innovative technology solutions."
    },
    {
      year: "2023",
      title: "First Projects",
      description: "Successfully delivered our first web development and mobile app projects, establishing our reputation for quality."
    },
    {
      year: "2024",
      title: "AI Integration",
      description: "Expanded our services to include AI and machine learning solutions, helping clients automate and optimize their operations."
    },
    {
      year: "2024",
      title: "Growth",
      description: "Reached 30+ satisfied clients and 50+ completed projects, building a strong portfolio across multiple industries."
    },
    {
      year: "2025",
      title: "Innovation",
      description: "Continuing to push boundaries with cutting-edge solutions in AI, cloud computing, and digital transformation."
    }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We stay ahead of technology trends to provide cutting-edge solutions that give our clients a competitive advantage.",
      icon: "💡",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Quality",
      description: "Every project is crafted with attention to detail and rigorous testing to ensure exceptional performance and reliability.",
      icon: "⭐",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Collaboration",
      description: "We work closely with our clients as partners, understanding their vision and translating it into successful digital solutions.",
      icon: "🤝",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Growth",
      description: "We're committed to continuous learning and improvement, always expanding our skills and knowledge to serve you better.",
      icon: "📈",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const team = [
    {
      name: "Development Team",
      role: "Full-Stack Developers",
      description: "Expert developers specializing in modern web and mobile technologies.",
      avatar: "👨‍💻"
    },
    {
      name: "AI Specialists",
      role: "Machine Learning Engineers",
      description: "Data scientists and AI engineers creating intelligent solutions.",
      avatar: "🤖"
    },
    {
      name: "DevOps Team",
      role: "Cloud Engineers",
      description: "Infrastructure experts ensuring scalable and secure deployments.",
      avatar: "☁️"
    },
    {
      name: "Design Team",
      role: "UI/UX Designers",
      description: "Creative designers crafting beautiful and intuitive user experiences.",
      avatar: "🎨"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-primary-light/10">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-gray-900 mb-6">
              About xNerds Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              A passionate team of technology enthusiasts dedicated to empowering businesses 
              through innovative AI solutions and exceptional software services since 2023.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-8">
              Our Mission
            </h2>
            <div className="bg-gradient-to-r from-primary to-primary-light p-8 rounded-2xl text-white">
              <p className="text-xl leading-relaxed">
                "To empower businesses through innovative AI solutions and exceptional software services, 
                helping them thrive in the digital age while maintaining the highest standards of quality and customer satisfaction."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From startup to success story - here's how we've grown and evolved
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-primary/20"></div>
              
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex items-center mb-12 animate-fade-in-up ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  {/* Content */}
                  <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                    <Card className="border-0 shadow-lg rounded-2xl bg-white">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4 mb-3">
                          <span className="text-2xl font-heading font-bold text-primary">
                            {item.year}
                          </span>
                          <h3 className="text-xl font-heading font-semibold text-gray-900">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={value.title}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white rounded-2xl animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.gradient} rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
              Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the talented professionals who make it all happen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card
                key={member.name}
                className="group hover:shadow-lg transition-all duration-300 border-0 bg-white rounded-2xl animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    {member.avatar}
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-8">
              Based in Lahore, Pakistan
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Proudly serving clients locally and globally from the heart of Pakistan's technology hub
            </p>
            <Card className="border-0 shadow-lg rounded-2xl bg-gradient-to-r from-primary/5 to-primary-light/5">
              <CardContent className="p-8">
                <div className="text-6xl mb-4">🏢</div>
                <p className="text-lg text-gray-700">
                  Our headquarters in Lahore puts us at the center of Pakistan's thriving tech ecosystem, 
                  allowing us to attract top talent and stay connected with the latest industry trends.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Want to Join Our Success Story?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's work together to create something amazing. Get in touch and see how we can help your business grow.
            </p>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white text-primary border-white hover:bg-gray-100 rounded-full px-8"
            >
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
