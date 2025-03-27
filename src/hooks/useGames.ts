import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import useGameQueryStore from "../components/stateManagement/gameQueryState";
import { DataResponse } from "../services/apiClient";
import gameService from "../services/gameService";
import Game from "../entities/Game";

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  return useInfiniteQuery<DataResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: async ({ pageParam }) => {
      
      const response = await gameService.getAll({
        params: {
          page: pageParam,
          genres: gameQuery?.genreId,
          parent_platforms: gameQuery?.platformId,
          ordering: gameQuery?.sort,
          search: gameQuery?.searchText,
        }
      }).request;
      return response;
    },
    initialPageParam: 1,
    staleTime: ms("24h"), // 1 day
    getNextPageParam: (lastPage, allPages) => {
      // Check if there are more results
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
};

export default useGames;