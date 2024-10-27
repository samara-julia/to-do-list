const addButton = document.getElementById('addbtn');
const inputField = document.querySelector('#nova-tarefa');
const tarefasContainer = document.getElementById('tarefas');

addButton.addEventListener('click', () => {
    const taskText = inputField.value;
if (taskText) {
    const taskItem = document.createElement('div');
    taskItem.classList.add('task-item');

const checkbox = document.createElement('input');
checkbox.type = 'checkbox';

checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        taskItem.style.textDecoration = 'line-through';
    }
    else {
        taskItem.style.textDecoration = 'none';
    }
});

taskItem.appendChild(checkbox);
taskItem.appendChild(document.createTextNode(taskText));

const deleteIcon = document.createElement('img');
deleteIcon.src = 'lixinho.png';
deleteIcon.alt = 'apagar tarefa';
deleteIcon.classList.add('delete-icon');


deleteIcon.addEventListener('click', () => {
    tarefasContainer.removeChild(taskItem);
});

taskItem.appendChild(deleteIcon);
tarefasContainer.appendChild(taskItem);
    inputField.value = '';
}
});
