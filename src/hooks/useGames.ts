import { GameQuery } from "../App";
import { DataResponse } from "../services/apiClient";
import gameService, { Game } from "../services/gameService";
import { useInfiniteQuery } from "@tanstack/react-query";

const useGames = (gameQuery: GameQuery | null) => {
  return useInfiniteQuery<DataResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: async ({ pageParam }) => {
      
      const response = await gameService.getAll({
        params: {
          page: pageParam,
          genres: gameQuery?.genre?.id,
          parent_platforms: gameQuery?.platform?.id,
          ordering: gameQuery?.sort,
          search: gameQuery?.searchText,
        }
      }).request;
      return response;
    },
    initialPageParam: 1,
    staleTime: 10000, // 10 seconds
    getNextPageParam: (lastPage, allPages) => {
      // Check if there are more results
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
};

export default useGames;