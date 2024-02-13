import { Status } from "./types";

export async function getApiStatus(): Promise<Status | undefined> {
  try {
    const response = await fetch(`${process.env.API_SERVER}/api/status`);
    const json = await response.json();
    return json;
  } catch (e) {
    return undefined;
  }
}

const STATUS = {
  pid: process.pid,
  id: crypto.randomUUID(),
};

export const getStatus = (): Status => STATUS;

export async function killApi() {
  try {
    await fetch(`${process.env.API_SERVER}/susu`, { method: "post" });
  } catch (e) {}
}
