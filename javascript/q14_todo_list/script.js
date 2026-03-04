function addTask() {
  let li = document.createElement("li");

  li.innerHTML =
    document.getElementById("task").value +
    " <button onclick='this.parentElement.remove()'>Delete</button>";

  document.getElementById("list").appendChild(li);
  document.getElementById("task").value = "";
}
