export function Row({ type }: { type: "button" | "select" }) {
  if (type == "button") {
    return (
      <div className="row button mb-2 flex flex-col rounded bg-bg-secondary p-2">
        <input type="text" name="button-customId" placeholder="Button Id" />
        <input type="text" name="button-label" placeholder="Button Label" />
        <input type="text" name="button-style" placeholder="Button Style" />
        <input type="text" name="button-emoji" placeholder="Button Emoji" />
        <input type="text" name="button-url" placeholder="Button URL" />
        <input type="checkbox" name="button-disabled" />
      </div>
    );
  } else {
    return (
      <div className="row select mb-2 flex flex-col rounded bg-bg-secondary p-2">
        <input type="text" name="select-customId" placeholder="Id" />
        <input
          type="text"
          name="select-placeholder"
          placeholder="Placeholder"
        />
        <input type="number" name="select-min" placeholder="Min" />
        <input type="number" name="select-max" placeholder="Max" />
      </div>
    );
  }
}
