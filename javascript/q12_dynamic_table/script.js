function addRow() {
    let table = document.getElementById("table");
    let row = table.insertRow();

    row.insertCell(0).innerHTML = document.getElementById("name").value;
    row.insertCell(1).innerHTML = document.getElementById("age").value;
    row.insertCell(2).innerHTML = document.getElementById("dept").value;
}
