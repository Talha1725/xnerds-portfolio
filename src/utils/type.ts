
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
  
  export interface TimelineItem {
    year: string;
    title: string;
    description: string;
  }
  
  export interface Value {
    title: string;
    description: string;
  }
  
  export interface TeamMember {
    name: string;
    role: string;
    description: string;
  }
  