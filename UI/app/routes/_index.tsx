import { type MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "ToDo UI" }];
};

export default function Index() {
  return <div>siema nic tu nie ma</div>;
}
