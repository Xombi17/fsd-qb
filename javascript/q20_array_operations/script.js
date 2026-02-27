let dataArray = [];

function renderArray() {
    const list = document.getElementById('arrayList');
    list.innerHTML = '';

    if (dataArray.length === 0) {
        const li = document.createElement('li');
        li.className = 'empty';
        li.textContent = 'Array is empty.';
        list.appendChild(li);
        return;
    }

    dataArray.forEach(function (item) {
        const li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
    });
}

function setMessage(text, type) {
    const msg = document.getElementById('message');
    msg.textContent = text;
    msg.className = type;
}

// Add
document.getElementById('addBtn').addEventListener('click', function () {
    const val = document.getElementById('addInput').value.trim();
    if (val === '') {
        setMessage('Please enter a value to add.', 'info');
        return;
    }
    dataArray.push(val);
    renderArray();
    setMessage(`"${val}" added to the array.`, 'found');
    document.getElementById('addInput').value = '';
});

// Remove
document.getElementById('removeBtn').addEventListener('click', function () {
    const val = document.getElementById('removeInput').value.trim();
    const index = dataArray.indexOf(val);

    if (index === -1) {
        setMessage(`"${val}" not found in the array.`, 'not-found');
        return;
    }

    dataArray.splice(index, 1);
    renderArray();
    setMessage(`"${val}" removed from the array.`, 'found');
    document.getElementById('removeInput').value = '';
});

// Search
document.getElementById('searchBtn').addEventListener('click', function () {
    const val = document.getElementById('searchInput').value.trim();
    const index = dataArray.indexOf(val);

    if (index === -1) {
        setMessage(`"${val}" was NOT found in the array.`, 'not-found');
    } else {
        setMessage(`"${val}" found at index ${index}.`, 'found');
    }
});
