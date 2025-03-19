import { useQuery } from "@tanstack/react-query";
import genresService, { Genre } from "../services/genresService";
import genres from "../data/genres";
import ms from "ms";
const useGenres = () => useQuery<Genre[], Error>({
    queryKey: ["genres"],
    queryFn: async () => {
        const response = await genresService.getAll().request;
        return response.results;
    },
    staleTime: ms("24h"), // 24 hours
    initialData: genres
});

export default useGenres;