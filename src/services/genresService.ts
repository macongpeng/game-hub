import Genre from "../entities/Genres";
import APIClient from "./apiClient";

const apiClient = new APIClient<Genre>("/genres");

export default apiClient;