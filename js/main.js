function addField() {
  const fields = document.getElementById("fields");
  const newFieldContainer = document
    .createElement("div")
    .classList.add("d-flex", "gap-2", "fields");

  const newField = `
        <div class="d-flex flex-column gap-2 rounded discord-field">
          <input type="text" class="discord-title form-control" placeholder="Name"/>
          <textarea class="form-control" placeholder="Value"></textarea>
        </div>
      `;

  newFieldContainer.innerHTML = newField;
  fields.appendChild(newFieldContainer);
}

function addActionRow() {
  const rows = document.getElementById("rows");
  const newRowContainer = document.createElement("div");
  newRowContainer.classList.add("d-flex", "flex-column", "gap-2", "action-row");

  const newRow = `
            <div class="d-flex flex-column gap-2 rounded border p-3 embed">
              <b>Button 1</b>
            </div>
            Type:
            <select class="form-select" id="type">
              <option value="button" selected>Button</option>
              <option value="select">Select menu</option>
            </select>`;

  newRowContainer.innerHTML = newRow;
  rows.appendChild(newRowContainer);
}
