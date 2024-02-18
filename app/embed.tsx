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
    <div className="flex flex-col my-2 px-3 py-5 rounded border border-gray-100 bg-gray-300 dark:border-gray-600 dark:bg-gray-800 backdrop-blur">
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
      <div className="flex gap-2 mt-2">
        <button
          onClick={() => addFields(false)}
          title="Add field"
          className="p-0 w-fit text-gray-400 hover:text-black dark:hover:text-white transition"
        >
          <span className="material-symbols-rounded">splitscreen_add</span>
        </button>
        <button
          onClick={() => addFields(true)}
          title="Add inline field"
          className="p-0 w-fit text-gray-400 hover:text-black dark:hover:text-white transition"
        >
          <span className="material-symbols-rounded">
            splitscreen_vertical_add
          </span>
        </button>
        <label
          htmlFor="color"
          title="Select color"
          className="w-fit text-gray-400 hover:text-black dark:hover:text-white hover:cursor-pointer transition"
        >
          <span className="material-symbols-rounded">colors</span>
        </label>
        <input id="color" type="color" className="hidden" />
      </div>
    </div>
  );
}
