import { useFetcher } from "@remix-run/react";

export function CreateTask() {
  const fetcher = useFetcher();

  return (
    <div className="p-2">
      <div>Create new task</div>
      <fetcher.Form method="post">
        <Input label="Title" />
        <Input label="Description" />
        <div className="flex justify-end p-2">
          <button className="bg-green-500 hover:bg-green-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white">
            {fetcher.state === "idle" ? "Create" : "Creating..."}
          </button>
        </div>
      </fetcher.Form>
    </div>
  );
}

interface InputProps {
  label: string;
  required?: boolean;
}
function Input({ label, required = false }: InputProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor={label}>{label}</label>
      <input
        id={label}
        name={label}
        type="text"
        className="bg-gray-50 border border-gray-300 rounded-xl px-2"
        required={required}
      />
    </div>
  );
}
