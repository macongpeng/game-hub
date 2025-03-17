import { useQuery } from "@tanstack/react-query";
import genresService, { Genre } from "../services/genresService";
import genres from "../data/genres";
const useGenres = () => useQuery<Genre[], Error>({
    queryKey: ["genres"],
    queryFn: async () => {
        const response = await genresService.getAll().request;
        return response.results;
    },
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: genres
});

export default useGenres;