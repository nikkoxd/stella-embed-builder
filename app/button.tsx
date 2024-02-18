export default function Button() {
  return (
    <div className="flex flex-col">
      <input
        type="text"
        name="name"
        placeholder="Button name"
        size={15}
        className="h-7 px-2 bg-lime-700 rounded border border-lime-800 focus-visible:outline-none placeholder:text-white placeholder:text-opacity-50"
      />
      <input
        type="text"
        name="action"
        placeholder="Action name"
        size={15}
        className="mt-1 bg-transparent focus-visible:outline-none"
      />
    </div>
  );
}
