import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
}

interface GameResponse {
  count: number;
  results: Game[]; // Fixed to 'results' to match expected API response
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    // const API_KEY = import.meta.env.VITE_RAWG_API_KEY;
    // console.log(`API Key is ${API_KEY}`);

    apiClient
      .get<GameResponse>("/games")
      .then((res) => {
        // console.log(res.data.results); // Ensure the correct field name
        setGames(res.data.results);
      })
      .catch((err) => setError(err.message));
  }, []); // Added dependency array to prevent infinite re-renders

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
