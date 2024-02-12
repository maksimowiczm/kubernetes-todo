import { useFetcher } from "@remix-run/react";
import { ToDoTask } from "~/api/types";

export function TaskLoading() {
  return <div>Loading...</div>;
}

export function Task({ id, title, description }: ToDoTask) {
  const fetcher = useFetcher();

  return (
    <div>
      <div className="text-justify">{id}</div>
      <div className="text-justify">{title}</div>
      <div className="text-justify">{description}</div>
      <fetcher.Form method="delete">
        <div className="flex justify-end px-5">
          <button
            type="submit"
            className="bg-sky-500 hover:bg-sky-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white"
          >
            {fetcher.state === "idle" ? "Delete" : "Deleting..."}
          </button>
        </div>
      </fetcher.Form>
    </div>
  );
}
