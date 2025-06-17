import { Code, Smartphone, ShoppingCart, Cloud, Brain, Rocket, Users, Award, Star, TrendingUp, Shield, Zap, Play, Lightbulb, Target, Palette } from "lucide-react";
import { Feature, Project, Service, Stat, TeamMember, TimelineItem, Value } from "./type";

export const projects: Project[] = [
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

export const services: Service[] = [
  {
    title: "Custom Software Development",
    description: "Tailored software solutions built with cutting-edge technologies to meet your unique business requirements.",
    icon: Code,
    features: ["Web Applications", "API Development", "System Integration"],
    gradient: "from-blue-500 to-purple-600",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D"
  },
  {
    title: "Mobile App Development", 
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
    icon: Smartphone,
    features: ["iOS & Android", "React Native", "Flutter"],
    gradient: "from-teal-500 to-cyan-600",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlJTIwYXBwfGVufDB8fDB8fHww"
  },
  {
    title: "Enterprise Solutions",
    description: "Comprehensive business solutions including ERP, CRM, and POS systems with full compliance and integration.",
    icon: ShoppingCart,
    features: ["ERP Systems", "CRM Solutions", "POS Integration"],
    gradient: "from-purple-500 to-pink-600",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dWklMjBkZXNpZ258ZW58MHx8MHx8fDA%3D"
  },
  {
    title: "Cloud & DevOps",
    description: "Scalable cloud infrastructure and automated deployment solutions for modern businesses.",
    icon: Cloud,
    features: ["AWS/Azure", "CI/CD", "Infrastructure as Code"],
    gradient: "from-indigo-500 to-blue-600",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdWQlMjBjb21wdXRpbmd8ZW58MHx8MHx8fDA%3D"
  },
  {
    title: "AI & Data Analytics",
    description: "Intelligent solutions powered by machine learning and advanced analytics to drive business insights.",
    icon: Brain,
    features: ["Machine Learning", "Data Visualization", "Predictive Analytics"],
    gradient: "from-green-500 to-teal-600",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0aWZpY2lhbCUyMGludGVsbGlnZW5jZXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    title: "Staff Augmentation",
    description: "Extend your team with top-tier engineers, AI specialists, and developers — without the hiring overhead. We help you scale fast and smart.",
    icon: Rocket,
    features: ["Vetted Tech Talent", "On-Demand Scaling", "Seamless Team Integration"],
    gradient: "from-orange-500 to-red-600",
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvY2tjaGFpbnxlbnwwfHwwfHx8MA%3D%3D"
  }
];

export const stats: Stat[] = [
  { number: "50+", label: "Projects Delivered", icon: TrendingUp, color: "text-blue-400" },
  { number: "50+", label: "Happy Clients", icon: Users, color: "text-purple-400" },
  { number: "7+", label: "Years of Excellence", icon: Award, color: "text-teal-400" },
  { number: "100%", label: "Client Satisfaction", icon: Star, color: "text-yellow-400" }
];

export const features: Feature[] = [
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

export const timeline: TimelineItem[] = [
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

export const values: Value[] = [
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

export const team: TeamMember[] = [
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