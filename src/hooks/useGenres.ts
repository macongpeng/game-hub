import { useQuery } from "@tanstack/react-query";
import genresService, { Genre } from "../services/genresService";

const useGenres = () => useQuery<Genre[], Error>({
    queryKey: ["genres"],
    queryFn: async () => {
        const response = await genresService.getAll().request;
        return response.results;
    }
});

export default useGenres;