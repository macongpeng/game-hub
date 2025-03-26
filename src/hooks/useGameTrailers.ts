import { useQuery } from "@tanstack/react-query";
import { GameTrailer } from "../entities/GameTrailer";
import APIClient from "../services/apiClient";

const useGameTrailers = (id: number) => {
  const apiClient = new APIClient<GameTrailer>(`/games/${id}/movies`);

  const { data, isLoading, error } = useQuery<GameTrailer[], Error>({
    queryKey: ["game-trailers", id],
    queryFn: async () => {
      const response = await apiClient.getAll().request;
      return response.results;
    }
  });

  return { data, isLoading, error };
};

export default useGameTrailers;
