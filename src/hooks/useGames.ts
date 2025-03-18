import { GameQuery } from "../App";
import gameService, { Game } from "../services/gameService";
import { useQuery } from "@tanstack/react-query";

const useGames = (gameQuery: GameQuery | null) => useQuery<Game[], Error>({
  queryKey: ["games", gameQuery],
  queryFn: async () => {
    
    const response = await gameService.getAll({
      params: {
        genres: gameQuery?.genre?.id,
        parent_platforms: gameQuery?.platform?.id,
        ordering: gameQuery?.sort,
        search: gameQuery?.searchText
      }
    }).request;
    return response.results;
  },
  staleTime: 24 * 60 * 60 * 1000, // 24 hours
});

export default useGames;