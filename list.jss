document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            const li = document.createElement('li');
            li.innerHTML = `
                <input type="checkbox" onchange="toggleTaskCompletion(this)">
                <span>${taskText}</span>
                <button onclick="removeTask(this)">Remove</button>
            `;
            taskList.appendChild(li);
            taskInput.value = '';
        }
    }

    function removeTask(button) {
        const li = button.parentElement;
        taskList.removeChild(li);
    }

    function toggleTaskCompletion(checkbox) {
        const span = checkbox.nextElementSibling;
        span.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
    }

    window.addTask = addTask;
    window.removeTask = removeTask;
    window.toggleTaskCompletion = toggleTaskCompletion;
});
