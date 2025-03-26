import { Genre } from "../data/genres";
import APIClient from "./apiClient";

const apiClient = new APIClient<Genre>("/genres");

export default apiClient;