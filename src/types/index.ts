export interface Project {
    id: number;
    title: string;
    emoji: string;
    description: string;
    completed?:boolean;
  }
  
  export interface Category {
    id: number;
    title: string;
    description: string;
    projects: Project[];
  }
  