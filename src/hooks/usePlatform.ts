import { useQuery } from "@tanstack/react-query";
import platformService, { Platform } from "../services/platformService";
import platforms from "../data/platforms";

const usePlatform = () => useQuery<Platform[], Error>({
    queryKey: ["platforms"],
    queryFn: async () => {
        const response = await platformService.getAll().request;
        return response.results;
    },
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: platforms
});

export default usePlatform;