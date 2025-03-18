import axios from "axios";

const API_KEY = import.meta.env.VITE_RAWG_API_KEY;

// Interface for the RAWG API response structure
export interface DataResponse<T> {
    count: number;
    next: string | null;
    previous: string | null;
    results: T[];
}

// We're keeping the actual implementation unchanged since we're handling the response structure in the hook
const axiosInstance = axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: API_KEY
    }
});

class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll(params?: Record<string, unknown>) {
        const controller = new AbortController();
        const request = axiosInstance.get<DataResponse<T>>(this.endpoint, { 
            params,
            signal: controller.signal 
        }).then(res => res.data);
        return { request, cancel: () => controller.abort() };
    }

    async post(data: T) {
        const res = await axiosInstance.post<T>(this.endpoint, data);
        return res.data;
    }
}

export default APIClient;