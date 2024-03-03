import Head from "next/head";
import { type FormEvent } from "react";

export default function Home() {
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const outputArea = document.getElementById("output");
    const formData = new FormData(event.currentTarget);

    const output = {
      name: formData.get("name"),
      content: formData.get("content"),
      tts: formData.get("tts") ? true : false,
      embeds: [{}],
      rows: [],
      attachments: [],
    };

    const embedTitles = formData.getAll("title");

    embedTitles.forEach((_, i) => {
      output.embeds[i] = {
        title: embedTitles[i],
      };
    });

    if (outputArea) outputArea.textContent = JSON.stringify(output, null, 2);
    else console.log(JSON.stringify(output));
  }

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen items-center justify-center gap-5 dark:bg-black dark:text-white">
        <form onSubmit={onSubmit} className="flex flex-col gap-2">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="border-b-2 border-transparent bg-transparent focus-visible:border-gray-500 focus-visible:outline-none"
          />
          <textarea
            name="content"
            placeholder="Content"
            className="border-b-2 border-transparent bg-transparent focus-visible:border-gray-500 focus-visible:outline-none"
          />
          <div className="flex gap-1">
            <input type="checkbox" name="tts" id="tts" />
            <label htmlFor="tts">Text-to-Speech?</label>
          </div>
          <div className="embeds">
            <div className="embed">
              <input
                type="text"
                name="title"
                placeholder="Title"
                className="border-b-2 border-transparent bg-transparent focus-visible:border-gray-500 focus-visible:outline-none"
              />
            </div>
            <div className="embed">
              <input
                type="text"
                name="title"
                placeholder="Title"
                className="border-b-2 border-transparent bg-transparent focus-visible:border-gray-500 focus-visible:outline-none"
              />
            </div>
          </div>
          <button
            type="submit"
            className="rounded border border-gray-500 bg-gray-600"
          >
            Submit
          </button>
        </form>
        <pre id="output" className="mt-5">
          Output area
        </pre>
      </main>
    </>
  );
}
