export function Field({ id }: { id: number }) {
  function setInline(target: HTMLInputElement) {
    const field = target.parentElement?.parentElement;

    if (target.checked == true) {
      field?.classList.remove("flex");
      field?.classList.add("inline-flex");
    } else {
      field?.classList.remove("inline-flex");
      field?.classList.add("flex");
    }
  }

  return (
    <div className="field mb-2 mr-2 flex flex-col">
      <input
        type="text"
        name="field-name"
        placeholder="Field name"
        className="font-bold"
        required={true}
      />
      <textarea name="field-value" placeholder="Field value" required={true} />
      <div className="flex gap-1">
        <input
          type="checkbox"
          name="inline"
          id={`inline-${id}`}
          onChange={(e) => setInline(e.target)}
        />
        <label htmlFor={`inline-${id}`}>Inline?</label>
      </div>
    </div>
  );
}
