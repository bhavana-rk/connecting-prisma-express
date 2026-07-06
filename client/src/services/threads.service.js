// Already wired for you. You do NOT need to edit this.
import apiClient from "./apiClient";

export async function getThreads() {
  const response = await apiClient.get("/api/threads");
  return response.data;
}
