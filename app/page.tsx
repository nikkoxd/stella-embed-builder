"use client";

import { useState } from "react";
import Embed from "./embed";
import ActionRow from "./actionRow";

export default function Home() {
  const [embeds, setEmbeds] = useState([] as number[]);
  const [rows, setRows] = useState([] as ("button" | "select")[]);

  function addEmbed() {
    setEmbeds([...embeds, 0]);
  }

  function addRows(type: "button" | "select") {
    setRows([...rows, type]);
  }

  return (
    <main className="container mx-auto py-10">
      <div className="flex justify-center my-5 p-2 rounded text-4xl font-bold">
        💫 Stella Embed Builder
      </div>
      <input
        type="text"
        name="message"
        placeholder="Message"
        className="my-3 bg-transparent focus-visible:outline-none"
      />
      <div id="embeds">
        {embeds.map((item, i) => (
          <Embed key={i} />
        ))}
      </div>
      <div id="actionRows" className="mt-2">
        {rows.map((item, i) => (
          <ActionRow key={i} type={item} />
        ))}
      </div>

      <div className="flex gap-1">
        <button
          onClick={addEmbed}
          className="mt-2 w-fit h-7 px-2 bg-lime-700 rounded border border-lime-800 hover:bg-lime-600 hover:border-lime-500 transition"
        >
          +Embed
        </button>
        <button
          onClick={() => addRows("button")}
          className="mt-2 w-fit h-7 px-2 bg-lime-700 rounded border border-lime-800 hover:bg-lime-600 hover:border-lime-500 transition"
        >
          +Button row
        </button>
        <button
          onClick={() => addRows("select")}
          className="mt-2 w-fit h-7 px-2 bg-lime-700 rounded border border-lime-800 hover:bg-lime-600 hover:border-lime-500 transition"
        >
          +Select row
        </button>
      </div>
      <div className="flex gap-1">
        <button className="mt-2 w-fit h-7 px-2 bg-blue-700 rounded border border-blue-800 hover:bg-blue-600 hover:border-blue-500 transition">
          Convert to JSON
        </button>
        <button className="mt-2 w-fit h-7 px-2 bg-red-700 rounded border border-red-800 hover:bg-red-600 hover:border-red-500 transition">
          Reset
        </button>
      </div>
    </main>
  );
}
