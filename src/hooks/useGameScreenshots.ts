import { useQuery } from "@tanstack/react-query";

import APIClient from "../services/apiClient";
import { GameScreenshot } from "../entities/GameScreenshot";

const useGameScreenshots = (gameId: number) => {
    const apiClient = new APIClient<GameScreenshot>(`/games/${gameId}/screenshots`);

    const { data, isLoading, error } = useQuery<GameScreenshot[], Error>({
        queryKey: ["game-screenshots", gameId],
        queryFn: async () => {
          const response = await apiClient.getAll().request;
          return response.results;
        }
      });
    
      return { data, isLoading, error };
}

export default useGameScreenshots;