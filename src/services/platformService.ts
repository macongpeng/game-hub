import { Platform } from "../entities/Platform";
import APIClient from "./apiClient";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

export default apiClient; 