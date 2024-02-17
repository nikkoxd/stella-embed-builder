export default function EmbedField({ isInline }: { isInline: boolean }) {
  if (isInline) {
    return (
      <div className="inline-flex flex-col mr-5 mt-2">
        <input
          type="text"
          placeholder="Field title"
          className="bg-transparent focus-visible:outline-none font-bold"
        />
        <input
          type="text"
          placeholder="Value"
          className="bg-transparent focus-visible:outline-none"
        />
      </div>
    );
  } else {
    return (
      <div className="flex flex-col mr-5 mt-2">
        <input
          type="text"
          placeholder="Field title"
          className="bg-transparent focus-visible:outline-none font-bold"
        />
        <input
          type="text"
          placeholder="Value"
          className="bg-transparent focus-visible:outline-none"
        />
      </div>
    );
  }
}
