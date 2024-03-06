import { Field } from "./field";

export function Embed() {
  return (
    <div className="embed flex flex-col rounded bg-bg-secondary p-2">
      <input
        type="text"
        name="embed-title"
        placeholder="Title"
        className="border-b-2 border-transparent bg-transparent focus-visible:border-gray-500 focus-visible:outline-none"
      />
      <textarea
        name="embed-description"
        placeholder="Description"
        className="border-b-2 border-transparent bg-transparent focus-visible:border-gray-500 focus-visible:outline-none"
      />
      <div className="fields">
        <Field />
      </div>
      <input type="color" name="embed-color" />
    </div>
  );
}
