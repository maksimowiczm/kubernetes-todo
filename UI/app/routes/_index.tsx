import { json, type MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getApiStatus } from "~/api/status";

export const meta: MetaFunction = () => {
  return [{ title: "ToDo UI" }];
};

export const loader = async () => {
  const PID = process.pid;
  const status = await getApiStatus();
  return json({ PID, status });
};

export default function Index() {
  const { PID, status } = useLoaderData<typeof loader>();

  return (
    <div className="p-1">
      <div>PID: {PID}</div>
      <div>API INFO: {JSON.stringify(status)}</div>
      <Link to="tasks" className="no-underline hover:underline text-blue-400">
        Tasks
      </Link>
    </div>
  );
}
