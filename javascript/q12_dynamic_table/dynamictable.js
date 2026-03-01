function addData() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let department = document.getElementById("department").value;

    let table = document.getElementById("table");
    let row = table.insertRow(-1);

    row.insertCell(0).textContent = name;
    row.insertCell(1).textContent = age;
    row.insertCell(2).textContent = department;
}


