import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "ACTFlow",
      description: "A comprehensive process automation platform that streamlines business workflows and increases operational efficiency.",
      image: "/act.png",
      tags: ["Process Automation", "React", "Node.js", "MongoDB"],
      category: "Web Application",
      url: "https://www.actflow.ai/"
    },
    {
      title: "Antaragame",
      description: "AI-powered gaming platform that creates personalized gaming experiences using machine learning algorithms.",
      image: "/antaragame.png",
      tags: ["AI Gaming", "Machine Learning", "Unity", "Python"],
      category: "AI Platform",
      url:"http://antaragame.io/"
    },
    {
      title: "Bitlenz",
      description: "Advanced data analytics dashboard providing real-time insights and business intelligence for enterprise clients.",
      image: "/bitlenz.png",
      tags: ["Data Analytics", "Business Intelligence", "Vue.js", "D3.js"],
      category: "Analytics Dashboard",
      url: "https://www.bitlenz.com/"
    },
    {
      title: "BasedAgent",
      description: "Intelligent virtual AI assistant that helps businesses automate customer service and support operations.",
      image: "/basedagent.png",
      tags: ["AI Assistant", "NLP", "Chatbot", "OpenAI"],
      category: "AI Solution",
      url: "https://basedagent.co/"
    },
    {
      title: "FIGMENT",
      description: "Robust fintech trading backend system handling high-frequency transactions with enterprise-grade security.",
      image: "/figment.png",
      tags: ["Fintech", "Trading", "Backend", "Microservices"],
      category: "Backend System",
      url: "https://figment.trade/"
    },
    {
      title: "Smart POS Pro",
      description: "FBR-compliant point-of-sale system with inventory management and real-time sales analytics for retail businesses.",
      image: "/pos.jpg",
      tags: ["POS System", "FBR Compliant", "Inventory"],
      category: "Mobile App",
      url: ""
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 overflow-hidden">
      {/* Hero Section */}
      <section className="py-20 h-[70vh] lg:h-[60vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
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
              Our Portfolio
            </h1>
            <p className="text-sm lg:text-xl text-slate-300 max-w-3xl mx-auto">
            At xNerds, we don’t just deliver software — we create digital ecosystems tailored to solve specific problems across industries. Our project portfolio reflects our ability to adapt, innovate, and deliver value under varying constraints. From high-frequency crypto platforms to blockchain-based games and intelligent educational tools, we’ve partnered with startups, scaleups, and enterprise clients alike.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-10 bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="group relative overflow-hidden rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 hover:rotate-1 animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-light/5 opacity-0 group-hover:opacity-10 transition-all duration-500"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                
                <CardContent className="p-6 relative z-10">
                  <div className="aspect-video relative rounded-xl overflow-hidden mb-6">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-primary/20 text-primary text-sm font-medium rounded-full backdrop-blur-sm">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-black text-slate-100 mb-4 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {project.url ? (
                      <Link 
                        to={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {project.title}
                      </Link>
                    ) : (
                      project.title
                    )}
                  </h3>
                  <p className="text-slate-300 mb-6 leading-relaxed text-sm font-medium group-hover:text-slate-200 transition-colors duration-300">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative">
        <div className="absolute inset-0">
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-green-500/15 to-teal-500/15 rounded-full blur-3xl animate-float"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50+", label: "Projects Completed" },
              { number: "30+", label: "Happy Clients" },
              { number: "2+", label: "Years Experience" },
              { number: "100%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="animate-fade-in-up p-6 rounded-3xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-heading font-bold text-slate-100 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-900 relative">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-56 h-56 bg-purple-500/25 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-blue-500/25 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-100 mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join our growing list of satisfied clients and let us help you build something amazing.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Button
                asChild
                size="lg"
                className="group bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white rounded-full px-12 py-6 text-lg font-black shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-110"
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

export default Portfolio;
