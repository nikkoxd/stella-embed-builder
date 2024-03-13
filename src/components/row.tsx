import { Input } from "./ui/input";

export function Row({ id, type }: { id: number; type: "button" | "select" }) {
  if (type == "button") {
    return (
      <div className="row button mb-2 flex flex-col rounded bg-bg-secondary p-2">
        <Input
          type="text"
          name="button-customId"
          placeholder="Button Id"
          required={true}
        />
        <Input
          type="text"
          name="button-label"
          placeholder="Button Label"
          required={true}
        />
        <Input
          type="text"
          name="button-style"
          placeholder="Button Style"
          required={true}
        />
        <Input type="text" name="button-emoji" placeholder="Button Emoji" />
        <Input type="text" name="button-url" placeholder="Button URL" />
        <div className="flex gap-1">
          <input
            type="checkbox"
            name="button-disabled"
            id={`button-diabled-${id}`}
          />
          <label htmlFor={`button-diabled-${id}`}>Disabled?</label>
        </div>
      </div>
    );
  } else {
    return (
      <div className="row select mb-2 flex flex-col rounded bg-bg-secondary p-2">
        <input
          type="text"
          name="select-customId"
          placeholder="Select Menu Id"
          required={true}
        />
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
