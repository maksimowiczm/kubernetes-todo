import { ActionFunctionArgs, json } from "@remix-run/node";
import { useFetcher, useLoaderData } from "@remix-run/react";
import { getApiStatus, getStatus, killApi } from "~/api/status";

export const loader = async () => {
  const apiStatus = await getApiStatus();
  const status = getStatus();
  return json({ apiStatus, status });
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = Object.fromEntries(await request.formData());
  const type = formData.type as "api" | "ui";

  if (type === "ui") {
    process.exit(0);
  }
  if (type == "api") {
    await killApi();
  }

  return {};
};

export default function Index() {
  const fetcher = useFetcher();
  const { apiStatus, status } = useLoaderData<typeof loader>();

  return (
    <div className="p-1">
      <fetcher.Form method="post">
        <div className="p-2">
          <div>STATUS: {JSON.stringify(status)}</div>
          <button type="submit" name="type" value="ui">
            kill
          </button>
        </div>

        <div className="p-2">
          <div>
            API STATUS: {apiStatus ? JSON.stringify(apiStatus) : "DEAD"}
          </div>
          <button type="submit" name="type" value="api">
            kill
          </button>
        </div>
      </fetcher.Form>
    </div>
  );
}
