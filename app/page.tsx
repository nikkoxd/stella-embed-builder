"use client";

import { useState } from "react";
import Embed from "./embed";

export default function Home() {
  const [embeds, setEmbeds] = useState([] as number[]);

  function addEmbed() {
    setEmbeds([...embeds, 0]);
  }

  return (
    <main className="container mx-auto py-10">
      <div className="flex justify-center my-5 p-2 rounded text-4xl font-bold">
        💫 Stella Embed Builder
      </div>
      <input
        type="text"
        placeholder="Message"
        className="my-3 bg-transparent focus-visible:outline-none"
      />
      <div className="embeds">
        {embeds.map((item, i) => (
          <Embed key={i} />
        ))}
      </div>

      <button
        onClick={addEmbed}
        className="mt-2 w-fit h-7 px-2 bg-lime-700 rounded border border-lime-800 hover:bg-lime-600 hover:border-lime-500 transition"
      >
        +Embed
      </button>
    </main>
  );
}
