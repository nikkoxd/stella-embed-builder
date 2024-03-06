import { useState } from "react";
import { Field } from "./field";

export function Embed() {
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
        required={true}
      />
      <textarea name="embed-description" placeholder="Description" />
      <div className="fields">
        {fields.map((item, i) => (
          <Field inline={item} key={i} />
        ))}
      </div>
      <input type="color" name="embed-color" />
      <div className="flex gap-2">
        <button
          type="button"
          className="hover:underline hover:underline-offset-4"
        >
          Set color
        </button>
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
