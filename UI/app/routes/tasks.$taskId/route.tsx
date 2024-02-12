import { Await, useLoaderData, useNavigation } from "@remix-run/react";
import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { defer, redirect } from "@remix-run/node";
import { deleteToDoTask, getToDoTask } from "~/api/toDoTask";
import { Suspense } from "react";
import { Task, TaskLoading } from "./Task";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const taskId = params.taskId!;
  const taskPromise = getToDoTask(taskId);
  return defer({ taskPromise });
};

export const action = async ({ params, request }: ActionFunctionArgs) => {
  if (request.method === "DELETE") {
    const taskId = params.taskId!;
    await deleteToDoTask(taskId);
    return redirect("/tasks");
  }

  throw new Error("Method not allowed");
};

export default function Index() {
  const { state } = useNavigation();
  const { taskPromise } = useLoaderData<typeof loader>();

  // defer is trash https://github.com/remix-run/react-router/issues/10816 ☠️☠️
  if (state === "loading") {
    return <TaskLoading />;
  }

  return (
    <div className="p-2">
      <Suspense fallback={<TaskLoading />}>
        <Await
          resolve={taskPromise}
          errorElement={<div>Unexpected error...</div>}
        >
          {(task) => <Task {...task} />}
        </Await>
      </Suspense>
    </div>
  );
}
