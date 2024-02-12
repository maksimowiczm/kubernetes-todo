import { Link } from "@remix-run/react";
import { ToDoTask } from "~/api/types";
import { CreateTask } from "./createTask";

export function TasksLoading() {
  return <div>Loading...</div>;
}

export function Tasks({ tasks }: { tasks: ToDoTask[] }) {
  return (
    <>
      <div className="border-b-2">
        <CreateTask />
      </div>
      <div className="divide-y divide-slate-200 p-2">
        {tasks.map((task) => (
          <div key={task.id}>
            <Task {...task} />
          </div>
        ))}
      </div>
    </>
  );
}

function Task({ id, title, description }: ToDoTask) {
  return (
    <div className="py-2">
      <div className="flex flex-row justify-between truncate hover:text-pink-400 pb-1">
        <Link to={id} className="text-xl">
          {title}
        </Link>
      </div>
      <div className="text-sm text-slate-500 text-justify italic truncate">
        {description}
      </div>
    </div>
  );
}
