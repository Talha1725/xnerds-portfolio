
export type Sector = "Trading & fintech" | "Prop firms" | "AI products" | "Business platforms";

export interface Project {
    title: string;
    description: string;
    /** Screenshot of the live product; omitted when no clean public capture exists. */
    image?: string;
    /** Short capability points shown under the description (3–5, each a few words). */
    highlights?: string[];
    tags: string[];
    category: string;
    /** Public URL; empty for private deployments. */
    url: string;
    sector?: Sector;
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
  