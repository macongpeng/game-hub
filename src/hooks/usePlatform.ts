import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import platforms from "../data/platforms";
import platformService, { Platform } from "../services/platformService";

const usePlatform = () => useQuery<Platform[], Error>({
    queryKey: ["platforms"],
    queryFn: async () => {
        const response = await platformService.getAll().request;
        return response.results;
    },
    staleTime: ms("24h"), // 24 hours
    initialData: platforms
});

export default usePlatform;