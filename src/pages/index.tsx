import Head from "next/head";
import { useState, type FormEvent } from "react";
import { Embed } from "~/components/embed";
import { Row } from "~/components/row";
import type { Button, EmbedField, Output, Option } from "~/types/message";

export default function Home() {
  const [embeds, setEmbeds] = useState([] as number[]);
  const [rows, setRows] = useState([] as ("button" | "select")[]);

  function addEmbed() {
    setEmbeds([...embeds, 0]);
  }

  function addRow(type: "button" | "select") {
    setRows([...rows, type]);
  }

  function reset() {
    setEmbeds([]);
    setRows([]);
  }

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

    const embedFields: EmbedField[] = [];
    const fieldNames = formData.getAll("field-name");
    const fieldValues = formData.getAll("field-value");

    // FIXME: fields are shared between each embed

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
        color: parseInt(String(embedColors[i]).replace("#", ""), 16),
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

    // FIXME: options are shared between each select menu

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
        <title>Stella 💫 Embed Builder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto text-white">
        <div className="my-10 flex items-center justify-between">
          <h1 className="text-3xl font-bold">Stella 💫 Embed Builder</h1>
          <nav>
            <a href="http://discord.gg/starrysky" className="ml-3">
              Discord
            </a>
            <a
              href="http://github.com/nikkoxd/stella-embed-builder"
              className="ml-3"
            >
              GitHub
            </a>
          </nav>
        </div>
        <form onSubmit={onSubmit} className="flex flex-col gap-2">
          <input
            type="text"
            name="name"
            placeholder="Message name"
            required={true}
          />
          <textarea name="content" placeholder="Content" />
          <div className="flex gap-1">
            <input type="checkbox" name="tts" id="tts" />
            <label htmlFor="tts">Text-to-Speech?</label>
          </div>
          <div className="embeds flex flex-col gap-2">
            {embeds.map((_, i) => (
              <Embed key={i} id={i} />
            ))}
          </div>
          <div className="rows">
            {rows.map((item, i) => (
              <Row id={i} type={item} key={i} />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="submit"
              className="rounded bg-primary px-10 py-2 transition hover:bg-primary-focus"
            >
              Submit
            </button>
            <button
              type="button"
              className="rounded bg-secondary px-5 py-2 transition hover:bg-secondary-focus"
              onClick={addEmbed}
            >
              Add Embed
            </button>
            <button
              type="button"
              className="rounded bg-secondary px-5 py-2 transition hover:bg-secondary-focus"
              onClick={() => addRow("button")}
            >
              Add Button Row
            </button>
            <button
              type="button"
              className="rounded bg-secondary px-5 py-2 transition hover:bg-secondary-focus"
              onClick={() => addRow("select")}
            >
              Add Select Row
            </button>
            <button
              type="button"
              className="rounded bg-secondary px-5 py-2 transition hover:bg-secondary-focus"
              onClick={reset}
            >
              Reset components
            </button>
          </div>
        </form>
        <div className="my-10">
          <h1 className="mb-5 text-2xl font-bold">JSON Output</h1>
          <pre id="output" className="rounded bg-bg-secondary p-2">
            Output area
          </pre>
        </div>
      </main>
    </>
  );
}
