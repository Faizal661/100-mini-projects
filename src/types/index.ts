export interface Project {
    id: number;
    title: string;
    emoji: string;
    description: string;
  }
  
  export interface Category {
    id: number;
    title: string;
    description: string;
    projects: Project[];
  }
  