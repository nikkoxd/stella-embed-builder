import Head from "next/head";
import { type FormEvent } from "react";
import {
  type Button,
  type EmbedField,
  type Output,
  type Option,
} from "~/types/message";

export default function Home() {
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const outputArea = document.getElementById("output");
    const formData = new FormData(event.currentTarget);

    const messageName = formData.get("name");
    const messageContent = formData.get("content");
    const messageTts = formData.get("tts");

    if (messageName == null) throw Error("Missing required fields");

    const output: Output = {
      name: String(messageName),
      content: String(messageContent),
      tts: messageTts ? true : false,
      embeds: [],
      rows: [],
      attachments: [],
    };

    const embedTitles = formData.getAll("embed-title");
    const embedDescriptions = formData.getAll("embed-description");
    const embedColors = formData.getAll("embed-color");

    let embedFields: EmbedField[];
    const fieldNames = formData.getAll("field-name");
    const fieldValues = formData.getAll("field-value");

    fieldNames.forEach((_, i) => {
      embedFields.push({
        name: String(fieldNames[i]),
        value: String(fieldValues[i]),
      });
    });

    embedTitles.forEach((_, i) => {
      output.embeds.push({
        title: String(embedTitles[i]),
        description: String(embedDescriptions[i]),
        color: String(embedColors[i]),
        fields: embedFields,
      });
    });

    const buttons: Button[] = [];
    const buttonCustomIds = formData.getAll("button-customId");
    const buttonLabels = formData.getAll("button-label");
    const buttonStyles = formData.getAll("button-style");
    const buttonEmojis = formData.getAll("button-emoji");
    const buttonUrls = formData.getAll("button-url");
    const buttonDisabled = formData.getAll("button-disabled");

    buttonCustomIds.forEach((_, i) => {
      buttons.push({
        customId: String(buttonCustomIds[i]),
        label: String(buttonLabels[i]),
        style: Number(buttonStyles[i]),
        emoji: String(buttonEmojis[i]),
        url: String(buttonUrls[i]),
        disabled: buttonDisabled[i] ? true : false,
      });
    });

    output.rows.push(buttons);

    const selectCustomIds = formData.getAll("select-customId");
    const selectPlaceholders = formData.getAll("select-placeholder");
    const selectMins = formData.getAll("select-min");
    const selectMaxs = formData.getAll("select-max");

    const selectOptions: Option[] = [];
    const optionLabels = formData.getAll("option-label");
    const optionValues = formData.getAll("option-value");
    const optionDescriptions = formData.getAll("option-description");
    const optionEmojis = formData.getAll("option-emoji");
    const optionDefault = formData.getAll("option-default");

    optionLabels.forEach((_, i) => {
      selectOptions.push({
        label: String(optionLabels[i]),
        value: String(optionValues[i]),
        description: String(optionDescriptions[i]),
        emoji: String(optionEmojis[i]),
        default: optionDefault ? true : false,
      });
    });

    selectCustomIds.forEach((_, i) => {
      output.rows.push({
        customId: String(selectCustomIds[i]),
        placeholder: String(selectPlaceholders[i]),
        min: Number(selectMins[i]),
        max: Number(selectMaxs[i]),
        options: selectOptions,
      });
    });

    const attachments = formData.getAll("attachment");

    attachments.forEach((item) => {
      output.attachments.push(String(item));
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
      <main className="bg-background flex min-h-screen justify-center gap-5 text-white">
        <form onSubmit={onSubmit} className="mr-16 mt-10 flex flex-col gap-2">
          <h1 className="mb-5 text-3xl font-bold">Generator</h1>
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
            <div className="embed flex flex-col rounded border border-gray-700 bg-gray-800 p-2">
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
              <input type="color" name="embed-color" />
            </div>
          </div>
          <div className="rows">
            <div className="row button flex flex-col rounded border border-gray-700 bg-gray-800 p-2">
              <input
                type="text"
                name="button-customId"
                placeholder="Button Id"
                className="border-b-2 border-transparent bg-transparent focus-visible:border-gray-500 focus-visible:outline-none"
              />
              <input
                type="text"
                name="button-label"
                placeholder="Button Label"
                className="border-b-2 border-transparent bg-transparent focus-visible:border-gray-500 focus-visible:outline-none"
              />
              <input
                type="text"
                name="button-style"
                placeholder="Button Style"
                className="border-b-2 border-transparent bg-transparent focus-visible:border-gray-500 focus-visible:outline-none"
              />
              <input
                type="text"
                name="button-emoji"
                placeholder="Button Emoji"
                className="border-b-2 border-transparent bg-transparent focus-visible:border-gray-500 focus-visible:outline-none"
              />
              <input
                type="text"
                name="button-url"
                placeholder="Button URL"
                className="border-b-2 border-transparent bg-transparent focus-visible:border-gray-500 focus-visible:outline-none"
              />
              <input type="checkbox" name="button-disabled" />
            </div>
          </div>
          <button
            type="submit"
            className="bg-primary hover:bg-primaryFocus rounded py-2 transition"
          >
            Submit
          </button>
        </form>
        <div className="mt-10">
          <h1 className="mb-5 text-3xl font-bold">Output</h1>
          <pre id="output">Output area</pre>
        </div>
      </main>
    </>
  );
}
