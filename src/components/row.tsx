export function Row({ type }: { type: "button" | "select" }) {
  if (type == "button") {
    return (
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
    );
  } else {
    return (
      <div className="row select flex flex-col rounded border border-gray-700 bg-gray-800 p-2">
        <input
          type="text"
          name="select-customId"
          placeholder="Id"
          className="border-b-2 border-transparent bg-transparent focus-visible:border-gray-500 focus-visible:outline-none"
        />
        <input
          type="text"
          name="select-placeholder"
          placeholder="Placeholder"
          className="border-b-2 border-transparent bg-transparent focus-visible:border-gray-500 focus-visible:outline-none"
        />
        <input
          type="number"
          name="select-min"
          placeholder="Min"
          className="border-b-2 border-transparent bg-transparent focus-visible:border-gray-500 focus-visible:outline-none"
        />
        <input
          type="number"
          name="select-max"
          placeholder="Max"
          className="border-b-2 border-transparent bg-transparent focus-visible:border-gray-500 focus-visible:outline-none"
        />
      </div>
    );
  }
}
