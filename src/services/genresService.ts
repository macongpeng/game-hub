import APIClient from "./apiClient";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}
  
const apiClient = new APIClient<Genre>("/genres");

export default apiClient;