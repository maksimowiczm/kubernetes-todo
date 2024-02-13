import { getApiServerAddress as API } from "./api";
import { ToDoTask } from "./types";

export async function getToDoTasks(): Promise<ToDoTask[]> {
  const response = await fetch(`${await API()}/api/todotask`);
  const tasks = (await response.json()) as ToDoTask[];

  return tasks;
}

export async function getToDoTask(id: string): Promise<ToDoTask> {
  const response = await fetch(`${await API()}/api/todotask/${id}`);
  const tasks = (await response.json()) as ToDoTask;

  return tasks;
}

export async function deleteToDoTask(id: string) {
  await fetch(`${await API()}/api/todotask/${id}`, {
    method: "delete",
  });
}

export async function createToDoTask(body: FormData): Promise<ToDoTask> {
  const response = await fetch(`${await API()}/api/todotask`, {
    method: "post",
    body,
  });
  const task = (await response.json()) as ToDoTask;

  return task;
}
