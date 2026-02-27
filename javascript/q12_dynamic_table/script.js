let rowCount = 0;

document.getElementById('entryForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const age = document.getElementById('age').value.trim();
    const department = document.getElementById('department').value.trim();

    rowCount++;

    const tbody = document.getElementById('tableBody');
    const row = document.createElement('tr');

    row.innerHTML = `
    <td>${rowCount}</td>
    <td>${name}</td>
    <td>${age}</td>
    <td>${department}</td>
  `;

    tbody.appendChild(row);

    // Show the table section
    document.getElementById('tableSection').classList.remove('hidden');

    // Clear form
    this.reset();
});
