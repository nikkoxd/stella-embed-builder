export function Field({ inline }: { inline: boolean }) {
  return (
    <div className="field flex flex-col">
      <input
        type="text"
        name="field-name"
        placeholder="Field name"
        required={true}
      />
      <textarea name="field-value" placeholder="Field value" required={true} />
    </div>
  );
}
