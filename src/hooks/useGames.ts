import useData from "./useData";
import { GameQuery } from "../App";
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

const useGames = (gameQuery: GameQuery | null) => useData<Game>(
  "/games", 
  { 
    params: { 
      genres: gameQuery?.genre?.id, 
      platforms: gameQuery?.platform?.id, 
      ordering: gameQuery?.sort,
      search: gameQuery?.searchText
    }}, 
    [gameQuery]);

export default useGames;