import { useQuery } from "@tanstack/react-query";
import gameService from "../services/gameService";
import { Game } from "../entities/Game";

const useGame = (slug: string) => {
    return useQuery<Game, Error>({
        queryKey: ["game", slug],
        queryFn: () => gameService.get(slug).request,
    });
};

export default useGame; 