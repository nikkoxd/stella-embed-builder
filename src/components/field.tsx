export function Field() {
  return (
    <div className="field flex flex-col">
      <input
        type="text"
        name="field-name"
        placeholder="Field name"
        className="border-b-2 border-transparent bg-transparent focus-visible:border-gray-500 focus-visible:outline-none"
      />
      <textarea
        name="field-value"
        placeholder="Field value"
        className="border-b-2 border-transparent bg-transparent focus-visible:border-gray-500 focus-visible:outline-none"
      />
    </div>
  );
}
