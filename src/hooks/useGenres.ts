import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genres {
    id: number;
    name: string;

}

interface GenresResponse {
    count: number;
    results: Genres[];
}

const useGenres = () => {
    const [genres, setGenres] = useState<Genres[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
      const controller = new AbortController();

      setLoading(true);
      apiClient
        .get<GenresResponse>("/genres", { signal: controller.signal })
        .then((res) => {
          // console.log(res.data.results); // Ensure the correct field name
          setGenres(res.data.results);
          setLoading(false);
        })
        .catch((err) => {
            if (!(err instanceof CanceledError)) {
                setError(err.message);
              }
              setLoading(false);
        });

        return () => controller.abort(); 
    }, []); 

    return {genres, error, isLoading};    
}

export default useGenres;