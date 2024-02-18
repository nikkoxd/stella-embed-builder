import { useState } from "react";
import Button from "./button";

export default function ActionRow({ type }: { type: "button" | "select" }) {
  const [buttons, setButtons] = useState([0]);

  function addButton() {
    setButtons([...buttons, 0]);
  }

  if (type == "button") {
    return (
      <div className="actionRow buttonRow flex gap-1">
        {buttons.map((item, i) => (
          <Button key={i} />
        ))}
        <button
          onClick={addButton}
          className="w-fit h-7 px-2 bg-lime-700 rounded border border-lime-800 hover:bg-lime-600 hover:border-lime-500 transition"
        >
          +
        </button>
      </div>
    );
  }
  // TODO: Select menu row code
  if (type == "select") {
    return (
      <div className="actionRow selectRow flex">
        This would be a select menu row!
      </div>
    );
  }
}
