function addFields() {
  // Create a new container div for the new fields
  var fields = document.getElementById("fields");
  var newFieldContainer = document.createElement("div");
  newFieldContainer.classList.add("d-flex", "gap-2", "fields");

  // Create the HTML for the new fields
  var newField = `
        <div class="d-flex flex-column gap-2 rounded discord-field">
          <input type="text" class="discord-title form-control" placeholder="Name"/>
          <textarea class="form-control" placeholder="Value"></textarea>
        </div>
      `;

  // Append the new fields to the container
  newFieldContainer.innerHTML = newField;
  fields.appendChild(newFieldContainer);
}
