import APIClient from "./apiClient";
import { Platform } from "./platformService";

export interface Game {
    id: number;
    name: string;
    background_image: string;
    slug: string;
    description_raw: string;
    parent_platforms: { platform: Platform}[];
    metacritic: number;
    rating_top: number;
  }

const apiClient = new APIClient<Game>("/games");

export default apiClient;