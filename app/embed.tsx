"use client";

import { useState } from "react";
import EmbedField from "./embedField";

export default function Embed() {
  const [fields, setFields] = useState([] as boolean[]);

  function addFields(isInline: boolean) {
    if (isInline) {
      setFields([...fields, true]);
    } else {
      setFields([...fields, false]);
    }
  }

  return (
    <div className="flex flex-col px-3 py-5 rounded border border-gray-100 bg-gray-300 dark:border-gray-600 dark:bg-gray-800 backdrop-blur">
      <input
        type="text"
        placeholder="Embed title"
        className="bg-transparent text-lg font-bold focus-visible:outline-none"
      />
      <input
        type="text"
        placeholder="Description"
        className="my-2 bg-transparent focus-visible:outline-none"
      />
      <div>
        {fields.map((item, i) => (
          <EmbedField key={i} isInline={item} />
        ))}
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => addFields(false)}
          className="mt-2 w-fit h-7 px-2 bg-lime-700 rounded border border-lime-800 hover:bg-lime-600 hover:border-lime-500 transition"
        >
          +Field
        </button>
        <button
          onClick={() => addFields(true)}
          className="mt-2 w-fit h-7 px-2 bg-lime-700 rounded border border-lime-800 hover:bg-lime-600 hover:border-lime-500 transition"
        >
          +Inline
        </button>
      </div>
    </div>
  );
}
