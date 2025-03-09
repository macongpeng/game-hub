import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}
export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform}[];
    metacritic: number;
  }


interface GameResponse {
    count: number;
    results: Game[]; // Fixed to 'results' to match expected API response
  }

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
  
    useEffect(() => {
      const controller = new AbortController();
      apiClient
        .get<GameResponse>("/games", { signal: controller.signal })
        .then((res) => {
          // console.log(res.data.results); // Ensure the correct field name
          setGames(res.data.results);
        })
        .catch((err) => {
            if (!(err instanceof CanceledError)) {
                setError(err.message);
              }
        });

        return () => controller.abort(); 
    }, []); 

    return {games, error};
}

export default useGames;