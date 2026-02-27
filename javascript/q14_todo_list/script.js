document.getElementById('todoForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();

    if (!taskText) return;

    const taskList = document.getElementById('taskList');

    const li = document.createElement('li');

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', function () {
        taskList.removeChild(li);
    });

    li.appendChild(taskSpan);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    input.value = '';
    input.focus();
});
