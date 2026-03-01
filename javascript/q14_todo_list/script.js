function addTask() {
  let taskText = document.getElementById("taskInput").value;

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  let list = document.getElementById("taskList");

  let listItem = document.createElement("li");

  listItem.innerText = taskText;

  let deleteButton = document.createElement("button");

  deleteButton.innerText = "Delete";

  deleteButton.onclick = function () {
    list.removeChild(listItem);
  };

  listItem.appendChild(deleteButton);

  list.appendChild(listItem);

  document.getElementById("taskInput").value = "";
}
