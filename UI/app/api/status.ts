import { ApiStatus } from "./types";

export async function getApiStatus(): Promise<ApiStatus> {
  const response = await fetch(`${process.env.API_SERVER}/api/status`);
  const json = await response.json();
  return json;
}
