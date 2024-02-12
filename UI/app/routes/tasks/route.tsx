import { ActionFunctionArgs, defer, redirect } from "@remix-run/node";
import { Await, Outlet, useLoaderData } from "@remix-run/react";
import { Suspense } from "react";
import { createToDoTask, getToDoTasks } from "~/api/toDoTask";
import { Tasks, TasksLoading } from "./tasks";
import { ToDoTask } from "~/api/types";

export const loader = async () => {
  const tasksPromise = getToDoTasks();
  return defer({ tasksPromise });
};

export const action = async ({ request }: ActionFunctionArgs) => {
  if (request.method === "POST") {
    const formData = await request.formData(); // bruh
    const task = await createToDoTask(formData);
    return redirect(`/tasks/${task.id}`);
  }

  throw new Error("Method not allowed");
};

export default function Index() {
  const { tasksPromise } = useLoaderData<typeof loader>();

  return (
    <div className="flex flex-row">
      <div className="w-1/2 border-r-2">
        <Suspense fallback={<TasksLoading />}>
          <Await
            resolve={tasksPromise}
            errorElement={<div>Unexpected error...</div>}
          >
            {(tasks) => <Tasks tasks={tasks} />}
          </Await>
        </Suspense>
      </div>
      <div className="w-1/2">
        <Outlet />
      </div>
    </div>
  );
}
