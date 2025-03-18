import { GameQuery } from "../App";
import gameService, { Game } from "../services/gameService";
import { useQuery } from "@tanstack/react-query";

const useGames = (gameQuery: GameQuery | null) => useQuery<Game[], Error>({
  queryKey: ["games", gameQuery],
  queryFn: async () => {
    // Create request params from gameQuery
    const params: Record<string, unknown> = {};
    
    if (gameQuery) {
      if (gameQuery.genre) params.genres = gameQuery.genre?.id;
      if (gameQuery.platform) params.parent_platforms = gameQuery.platform?.id;
      if (gameQuery.sort) params.ordering = gameQuery.sort;
      if (gameQuery.searchText) params.search = gameQuery.searchText;
    }
    
    const response = await gameService.getAll(params).request;
    return response.results;
  },
  staleTime: 24 * 60 * 60 * 1000, // 24 hours
});

export default useGames;