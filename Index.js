const form = document.getElementById("messageForm");
const messageList = document.getElementById("messageList");

form.addEventListener("submit", function(event) {
  
 event.preventDefault();

    const nama = document.getElementById("nama").value;
    const pesan = document.getElementById("pesan").value;
    const listItem = document.createElement("li");
    listItem.classList.add("list-group-item");

    listItem.innerHTML = `
        <strong>${nama}</strong><br>
        ${pesan}
    `;

    messageList.appendChild(listItem);

    form.reset();
});