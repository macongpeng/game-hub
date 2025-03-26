import { Platform } from "./Platform";


export interface Game {
  id: number;
  name: string;
  background_image: string;
  slug: string;
  description_raw: string;
  parent_platforms: { platform: Platform; }[];
  metacritic: number;
  rating_top: number;
}
