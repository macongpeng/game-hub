import { useQuery } from "@tanstack/react-query";
import genresService from "../services/genresService";
import { Genre } from "../data/genres";
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