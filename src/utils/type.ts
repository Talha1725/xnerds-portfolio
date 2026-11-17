import { LucideIcon } from "lucide-react";

export type Sector = "Trading & fintech" | "Prop firms" | "AI products" | "Business platforms";

export interface Project {
    title: string;
    description: string;
    /** Screenshot of the live product; omitted when no clean public capture exists. */
    image?: string;
    tags: string[];
    category: string;
    /** Public URL; empty for private deployments. */
    url: string;
    sector?: Sector;
    /** Shown in the large featured rows on the homepage and at the top of Work. */
    featured?: boolean;
  }
  
  export interface Service {
    title: string;
    description: string;
    features: string[];
    image: string;
    icon: LucideIcon;
    gradient: string;
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
  