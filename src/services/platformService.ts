import APIClient from "./apiClient";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Platform {
    id: number;
    name: string;
    slug: string;
    platforms: {
        id: number;
        name: string;
        slug: string;
        games_count: number;
        image_background: string;
        image: null;
        year_start: number | null;
        year_end: number | null;
    }[];
}
  
const apiClient = new APIClient<Platform>("/platforms/lists/parents");

export default apiClient; 