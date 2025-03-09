import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface DataResponse<T> {
    count: number;
    results: T[];
}

const useData = <T>(endpoint: string) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
      const controller = new AbortController();

      setLoading(true);
      console.log(`isLoading ${endpoint} ${isLoading}`);
      apiClient
        .get<DataResponse<T>>(endpoint, { signal: controller.signal })
        .then((res) => {
          // console.log(res.data.results); // Ensure the correct field name
          setData(res.data.results);
          setLoading(false);
          console.log(`isLoading ${endpoint} ${isLoading}`);
        })
        .catch((err) => {
            if (!(err instanceof CanceledError)) {
                setError(err.message);
              }
              setLoading(false);
        });

        return () => controller.abort(); 
    }, [endpoint, isLoading]); 

    return {data, error, isLoading};    
}

export default useData;