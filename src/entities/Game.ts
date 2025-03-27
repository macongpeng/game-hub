import Genre from "./Genres";
import Platform from "./Platform";
import Publisher from "./Publisher";
interface Game {
  id: number;
  name: string;
  background_image: string;
  slug: string;
  description_raw: string;
  genres: Genre[];
  publishers: Publisher[];
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

export default Game;
