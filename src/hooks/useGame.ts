import { useQuery } from "@tanstack/react-query";
import gameService, { Game } from "../services/gameService";

const useGame = (slug: string) => {
    return useQuery<Game, Error>({
        queryKey: ["game", slug],
        queryFn: () => gameService.get(slug).request,
    });
};

export default useGame; 