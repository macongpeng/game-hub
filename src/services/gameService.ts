import APIClient from "./apiClient";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform}[];
    metacritic: number;
    rating_top: number;
  }

const apiClient = new APIClient<Game>("/games");

export default apiClient;