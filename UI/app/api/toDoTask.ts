import { ToDoTask } from "./types";

const API = process.env.API_SERVER;

async function DELAY(duration: number) {
  await new Promise((r) => setTimeout(r, duration));
}

export async function getToDoTasks(): Promise<ToDoTask[]> {
  const response = await fetch(`${API}/api/todotask`);
  const tasks = (await response.json()) as ToDoTask[];

  await DELAY(300);

  return tasks;
}

export async function getToDoTask(id: string): Promise<ToDoTask> {
  const response = await fetch(`${API}/api/todotask/${id}`);
  const tasks = (await response.json()) as ToDoTask;

  await DELAY(1000);

  return tasks;
}

export async function deleteToDoTask(id: string) {
  await fetch(`${API}/api/todotask/${id}`, {
    method: "delete",
  });

  await DELAY(1000);
}

export async function createToDoTask(body: FormData): Promise<ToDoTask> {
  const response = await fetch(`${API}/api/todotask`, {
    method: "post",
    body,
  });
  const task = (await response.json()) as ToDoTask;

  await DELAY(1000);

  return task;
}
