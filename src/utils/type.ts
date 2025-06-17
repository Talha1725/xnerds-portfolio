import { LucideIcon } from "lucide-react";

export interface Project {
    title: string;
    description: string;
    image: string;
    tags: string[];
    category: string;
    url: string;
  }
  
  export interface Service {
    title: string;
    description: string;
    icon: LucideIcon;
    features: string[];
    gradient: string;
    technologies?: string[];
  }
  
  export interface Stat {
    number: string;
    label: string;
    icon: LucideIcon;
    color: string;
  }
  
  export interface Feature {
    title: string;
    description: string;
    icon: LucideIcon;
    gradient: string;
    iconColor: string;
  }
  
  export interface TimelineItem {
    year: string;
    title: string;
    description: string;
    icon: LucideIcon;
    color: string;
  }
  
  export interface Value {
    title: string;
    description: string;
    icon: LucideIcon;
    gradient: string;
  }
  
  export interface TeamMember {
    name: string;
    role: string;
    description: string;
    icon: LucideIcon;
  }

  export interface Message {
    text: string;
    isUser: boolean;
  }
  