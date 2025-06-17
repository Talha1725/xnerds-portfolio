import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Rocket, Users, Target, Lightbulb, Award, Code, Brain, Zap, Palette, ArrowRight } from "lucide-react";
import { useState } from "react";

const About = () => {
  const [activeTimelineItem, setActiveTimelineItem] = useState(2);

  const timeline = [
    {
      year: "2023",
      title: "Founded",
      description: "xNerds Solutions was established in Lahore with a vision to empower businesses through innovative technology solutions.",
      icon: Rocket,
      color: "from-blue-500 to-cyan-500"
    },
    {
      year: "2023",
      title: "First Projects",
      description: "Successfully delivered our first web development and mobile app projects, establishing our reputation for quality.",
      icon: Code,
      color: "from-green-500 to-emerald-500"
    },
    {
      year: "2024",
      title: "AI Integration",
      description: "Expanded our services to include AI and machine learning solutions, helping clients automate and optimize their operations.",
      icon: Brain,
      color: "from-purple-500 to-pink-500"
    },
    {
      year: "2024",
      title: "Growth",
      description: "Reached 30+ satisfied clients and 50+ completed projects, building a strong portfolio across multiple industries.",
      icon: Users,
      color: "from-orange-500 to-red-500"
    },
    {
      year: "2025",
      title: "Innovation",
      description: "Continuing to push boundaries with cutting-edge solutions in AI, cloud computing, and digital transformation.",
      icon: Zap,
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We stay ahead of technology trends to provide cutting-edge solutions that give our clients a competitive advantage.",
      icon: Lightbulb,
      gradient: "from-blue-500 via-blue-600 to-cyan-500"
    },
    {
      title: "Quality",
      description: "Every project is crafted with attention to detail and rigorous testing to ensure exceptional performance and reliability.",
      icon: Award,
      gradient: "from-purple-500 via-purple-600 to-pink-500"
    },
    {
      title: "Collaboration",
      description: "We work closely with our clients as partners, understanding their vision and translating it into successful digital solutions.",
      icon: Users,
      gradient: "from-green-500 via-green-600 to-emerald-500"
    },
    {
      title: "Growth",
      description: "We're committed to continuous learning and improvement, always expanding our skills and knowledge to serve you better.",
      icon: Target,
      gradient: "from-orange-500 via-orange-600 to-red-500"
    }
  ];

  const team = [
    {
      name: "Development Team",
      role: "Full-Stack Developers",
      description: "Expert developers specializing in modern web and mobile technologies.",
      icon: Code
    },
    {
      name: "AI Specialists",
      role: "Machine Learning Engineers",
      description: "Data scientists and AI engineers creating intelligent solutions.",
      icon: Brain
    },
    {
      name: "DevOps Team",
      role: "Cloud Engineers",
      description: "Infrastructure experts ensuring scalable and secure deployments.",
      icon: Zap
    },
    {
      name: "Design Team",
      role: "UI/UX Designers",
      description: "Creative designers crafting beautiful and intuitive user experiences.",
      icon: Palette
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 overflow-hidden">
      {/* Hero Section */}
      <section className="py-20 h-[80vh] lg:h-[70vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
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
              About xNerds Solutions
            </h1>
            <p className="text-sm md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            xNerds has been providing top-notch Digital solutions to its clients globally. With Us, you find solutions to your digital business needs such as mobile app development, website design and development, and digital marketing needs. Our creative designers, competent developers, and immaculate marketers provide appropriate and value-driven solutions that help clients stand out in the digital space. Your success is our focus!
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-10 bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-900 relative">
        {/* Background Animation */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-100 mb-8">
              Our Mission
            </h2>
            <div className="bg-gradient-to-r from-primary to-primary-light p-8 rounded-3xl text-white shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
              <p className="text-xl leading-relaxed relative z-10 font-medium">
                "To empower businesses through innovative AI solutions and exceptional software services, 
                helping them thrive in the digital age while maintaining the highest standards of quality and customer satisfaction."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Timeline Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative">
        <div className="absolute inset-0">
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-green-500/15 to-teal-500/15 rounded-full blur-3xl animate-float"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-100 mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              From startup to success story - here's how we've grown and evolved
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Interactive Timeline */}
            <div className="relative">
              {/* Central Timeline Line */}
              <div className="lg:block hidden absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-primary-light"></div>
              {/* Timeline Events */}
              {timeline.map((event, index) => (
                <div
                  key={event.year}
                  className={`relative mb-12 ${
                    index % 2 === 0 ? "lg:ml-auto lg:mr-[55%] lg:pl-8" : "lg:mr-auto lg:ml-[55%] lg:pr-8"
                  }`}
                >
                  <div  className={`absolute transform top-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full ${
                    index % 2 === 0 ? "right-[-12.7%]" : "left-[-12.7%]"
                  }`}></div>
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 shadow-xl">
                    <div className="text-primary font-bold mb-2">{event.year}</div>
                    <h3 className="text-xl font-bold text-slate-100 mb-2">{event.title}</h3>
                    <p className="text-slate-300">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-900 relative">
        {/* Background Animation */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-100 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={value.title}
                className="group hover:shadow-2xl transition-all duration-500 transform rounded-3xl animate-fade-in-up relative overflow-hidden bg-slate-800/50 backdrop-blur-sm border border-slate-700/50"
                style={{ 
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r ${value.gradient} blur-xl`}></div>
                
                <CardContent className="p-6 text-center relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.gradient} rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-slate-100 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-sm">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative">
        <div className="absolute inset-0">
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-green-500/15 to-teal-500/15 rounded-full blur-3xl animate-float"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-100 mb-6">
              Our Team
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Meet the talented professionals who make it all happen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card
                key={member.name}
                className="group hover:shadow-xl transition-all duration-500 rounded-3xl animate-fade-in-up relative overflow-hidden bg-slate-800/50 backdrop-blur-sm border border-slate-700/50"
                style={{ 
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary/20 to-primary-light/20 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    <member.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-slate-100 mb-2">
                    {member.name}
                  </h3>
                  <div className="text-primary font-medium mb-3">
                    {member.role}
                  </div>
                  <p className="text-slate-300 text-sm">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-900 relative">
        {/* Background Animation */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-100 mb-8">
              Based in Lahore, Pakistan
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Proudly serving clients locally and globally from the heart of Pakistan's technology hub
            </p>
            <Card className="shadow-2xl rounded-3xl overflow-hidden relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary-light/5"></div>
              <CardContent className="p-8 relative z-10">
                <div className="text-6xl mb-6">🏢</div>
                <p className="text-lg text-white leading-relaxed">
                  Our headquarters in Lahore puts us at the center of Pakistan's thriving tech ecosystem, 
                  allowing us to attract top talent and stay connected with the latest industry trends.
                </p>
              </CardContent>
            </Card>
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
              Want to Join Our Success Story?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Let's work together to create something amazing. Get in touch and see how we can help your business grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Button
                asChild
                size="lg"
                className="group bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white rounded-full px-12 py-6 text-lg font-black shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-110"
              >
                <Link to="/contact" className="flex items-center gap-3">
                  Get in Touch
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="group rounded-full bg-transparent text-white hover:bg-blue-500 hover:text-white px-12 py-6 text-lg font-bold border-2 border-blue-500 hover:border-blue-500 shadow-xl hover:shadow-2xl transition-all duration-500 transform backdrop-blur-sm hover:scale-105"
              >
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
