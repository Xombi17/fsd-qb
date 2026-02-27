function addData()
{
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let department = document.getElementById("department").value;
    
    let table = document.getElementById("table");
    
    let row=table.insertRow();
    
    row.insertcell(0).innerHTML = name;
    row.insertcell(1).innerHTML = age;
    row.insertcell(2).innerHTML = department;
}


