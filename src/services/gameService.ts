import Game from "../entities/Game";
import APIClient from "./apiClient";

const apiClient = new APIClient<Game>("/games");

export default apiClient;