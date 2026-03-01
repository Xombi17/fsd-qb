let rowCount = 0;

document.getElementById('entryForm').addEventListener('submit', function (e) {
    e.preventDefault();

    let name = document.getElementById('name').value.trim();
    let age = document.getElementById('age').value.trim();
    let department = document.getElementById('department').value.trim();

    rowCount++;

    let tbody = document.getElementById('tableBody');
    let row = document.createElement('tr');
    let cell1 = document.createElement('td');
    let cell2 = document.createElement('td');
    let cell3 = document.createElement('td');
    let cell4 = document.createElement('td');

    cell1.textContent = rowCount;
    cell2.textContent = name;
    cell3.textContent = age;
    cell4.textContent = department;

    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);

    tbody.appendChild(row);

    document.getElementById('tableSection').classList.remove('hidden');

    this.reset();
});
