import { GameQuery } from "../App";
import gameService, { Game } from "../services/gameService";
import { useInfiniteQuery } from "@tanstack/react-query";

const useGames = (gameQuery: GameQuery | null) => {
  return useInfiniteQuery<Game[], Error>({
    queryKey: ["games", gameQuery],
    queryFn: async ({ pageParam }) => {
      // Default page size if gameQuery is null
      const pageSize = gameQuery?.pageSize || 10;
      
      // Cast pageParam to number since it's of type unknown
      const pageNumber = pageParam as number;
      
      const response = await gameService.getAll({
        params: {
          page: (pageNumber - 1) * pageSize,
          pageSize: pageSize,
          genres: gameQuery?.genre?.id,
          parent_platforms: gameQuery?.platform?.id,
          ordering: gameQuery?.sort,
          search: gameQuery?.searchText,
        }
      }).request;
      return response.results;
    },
    initialPageParam: 1,
    staleTime: 10000, // 10 seconds
    getNextPageParam: (lastPage, allPages) => {
      // Check if there are more results
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
  });
};

export default useGames;