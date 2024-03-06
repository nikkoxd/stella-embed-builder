import { useState } from "react";
import { Field } from "./field";

export function Embed({ id }: { id: number }) {
  const [fields, setFields] = useState([] as boolean[]);

  function addField() {
    setFields([...fields, false]);
  }

  function resetFields() {
    setFields([]);
  }

  return (
    <div className="embed flex flex-col rounded bg-bg-secondary p-2">
      <input
        type="text"
        name="embed-title"
        placeholder="Title"
        className="font-bold"
        required={true}
      />
      <textarea name="embed-description" placeholder="Description" />
      <div className="fields">
        {fields.map((item, i) => (
          <Field key={i} id={i} />
        ))}
      </div>
      <div className="flex gap-2">
        <label
          htmlFor={`color-${id}`}
          className="cursor-pointer hover:underline hover:underline-offset-4"
        >
          Set color
        </label>
        <input
          type="color"
          name="embed-color"
          id={`color-${id}`}
          className="hidden"
        />
        <button
          type="button"
          className="hover:underline hover:underline-offset-4"
          onClick={addField}
        >
          Add field
        </button>
        <button
          type="button"
          className="hover:underline hover:underline-offset-4"
          onClick={resetFields}
        >
          Reset fields
        </button>
      </div>
    </div>
  );
}
