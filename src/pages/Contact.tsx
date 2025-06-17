import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectInfo: "",
    budget: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", projectInfo: "", budget: "" });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "info@xnerds.com",
      link: "mailto:info@xnerds.com"
    },
    {
      icon: Github,
      title: "Phone",
      content: "+92-323-4314748",
      link: "tel:+923234314748"
    },
    {
      icon: Github,
      title: "Location",
      content: "Lahore, Pakistan",
      link: "#"
    }
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub", color: "hover:text-gray-900" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-600" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-blue-400" },
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
              Let's Build Something Great Together
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Ready to transform your digital presence? Get in touch and let's discuss how we can help bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in-up">
              <Card className="shadow-xl rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-heading font-bold text-slate-100 mb-6">
                    Get a Free Quote
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-slate-100 font-medium">
                        Name *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="mt-2 bg-slate-900/50 border-slate-700 text-slate-100 placeholder:text-slate-400 focus:border-primary rounded-lg"
                        placeholder="Your full name"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-slate-100 font-medium">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="mt-2 bg-slate-900/50 border-slate-700 text-slate-100 placeholder:text-slate-400 focus:border-primary rounded-lg"
                        placeholder="your@email.com"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="budget" className="text-slate-100 font-medium">
                        Project Budget
                      </Label>
                      <Select onValueChange={(value) => handleInputChange("budget", value)}>
                        <SelectTrigger className="mt-2 bg-slate-900/50 border-slate-700 text-slate-100 focus:border-primary rounded-lg">
                          <SelectValue placeholder="Select your budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-5k">Under $5,000</SelectItem>
                          <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                          <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                          <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                          <SelectItem value="over-50k">Over $50,000</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="projectInfo" className="text-slate-100 font-medium">
                        Project Details *
                      </Label>
                      <Textarea
                        id="projectInfo"
                        value={formData.projectInfo}
                        onChange={(e) => handleInputChange("projectInfo", e.target.value)}
                        className="mt-2 bg-slate-900/50 border-slate-700 text-slate-100 placeholder:text-slate-400 focus:border-primary rounded-lg min-h-32"
                        placeholder="Tell us about your project, goals, and requirements..."
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-white rounded-lg py-3 font-semibold"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-slide-in-right">
              <div>
                <h2 className="text-2xl font-heading font-bold text-slate-100 mb-6">
                  Get in Touch
                </h2>
                <p className="text-slate-300 leading-relaxed mb-8">
                  Have a project in mind? We'd love to hear about it. Contact us today 
                  and let's discuss how we can help you achieve your digital goals.
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card
                    key={info.title}
                    className="shadow-lg rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:shadow-xl transition-shadow duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <info.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-100 mb-1">
                            {info.title}
                          </h3>
                          {info.link !== "#" ? (
                            <a
                              href={info.link}
                              className="text-slate-300 hover:text-primary transition-colors duration-200"
                            >
                              {info.content}
                            </a>
                          ) : (
                            <p className="text-slate-300">{info.content}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-semibold text-slate-100 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className={`w-12 h-12 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg flex items-center justify-center text-slate-300 transition-all duration-200 transform hover:scale-110 ${social.color}`}
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Lahore Map/Illustration */}
              <Card className="shadow-lg rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">📍</div>
                  <h3 className="font-heading font-semibold text-slate-100 mb-2">
                    Lahore, Pakistan
                  </h3>
                  <p className="text-slate-300 text-sm">
                    Serving clients globally from the heart of Pakistan's tech hub
                  </p>
                </CardContent>
              </Card>
            </div>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Don't wait - your digital transformation journey starts with a single conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white hover:text-slate-900 rounded-2xl px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <a href="mailto:info@xnerds.com">Email Us</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white hover:text-slate-900 rounded-2xl px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <a href="tel:+923234314748">Call Now</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
