import { useState } from "react";
import { Field } from "./field";

export function Embed() {
  const [fields, setFields] = useState([] as boolean[]);

  function addField() {
    setFields([...fields, false]);
  }

  return (
    <div className="embed flex flex-col rounded bg-bg-secondary p-2">
      <input
        type="text"
        name="embed-title"
        placeholder="Title"
        className="border-b-2 border-transparent bg-transparent font-bold focus-visible:border-gray-500 focus-visible:outline-none"
      />
      <textarea
        name="embed-description"
        placeholder="Description"
        className="border-b-2 border-transparent bg-transparent focus-visible:border-gray-500 focus-visible:outline-none"
      />
      <div className="fields">
        {fields.map((item, i) => (
          <Field inline={item} key={i} />
        ))}
      </div>
      <input type="color" name="embed-color" />
      <div className="flex" onClick={addField}>
        <button>Add field</button>
      </div>
    </div>
  );
}
