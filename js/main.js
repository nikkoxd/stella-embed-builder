function addEmbed() {
  const embeds = document.getElementById("embeds");
  const newEmbedContainer = document.createElement("div");
  newEmbedContainer.classList.add("d-flex", "rounded", "discord-embed");

  const newEmbed = `<!-- Color bar -->
            <div class="discord-embed-bar">
              <input type="color" class="discord-color" />
            </div>
            <!-- Embed content -->
            <div
              class="d-flex flex-fill flex-column gap-2 p-3 discord-embed-body"
            >
              <!-- Title -->
              <input
                type="text"
                class="discord-title form-control"
                placeholder="Title"
              />
              <!-- Description -->
              <textarea
                class="form-control"
                rows="1"
                placeholder="Description"
              ></textarea>
              <!-- Fields -->
              <div class="d-flex gap-2" id="fields"></div>
              <button
                type="button"
                onclick="addField()"
                class="btn btn-outline-light mt-2"
              >
                Add field
              </button>
            </div>`;

  newEmbedContainer.innerHTML = newEmbed;
  embeds.appendChild(newEmbedContainer);
}

function addField() {
  const fields = document.getElementById("fields");
  const newFieldContainer = document.createElement("div");
  newFieldContainer.classList.add("d-flex", "gap-2", "fields");

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
