let arr = [];

function add() {
  arr.push(document.getElementById("value").value);
}

function remove() {
  arr.pop();
}

function display() {
  document.getElementById("result").innerHTML = arr.join(", ");
}