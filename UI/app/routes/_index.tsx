import { ActionFunctionArgs, json, type MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getApiStatus } from "~/api/status";

export const meta: MetaFunction = () => {
  return [{ title: "ToDo UI" }];
};

export default function Index() {
  return (
    <div className="p-1">
      <div>
        <Link to="tasks" className="no-underline hover:underline text-blue-400">
          Tasks
        </Link>
      </div>
      <div>
        <Link
          to="status"
          className="no-underline hover:underline text-blue-400"
        >
          Status
        </Link>
      </div>
    </div>
  );
}
