const toDoList = document.getElementById('todo-list');
const toDoAllCount = document.getElementById('all-count');
const toDoCompletedCount = document.getElementById('completed-count');
const todos = document.getElementsByClassName('todo__list-item');

const changeTodoCounts = () => {    
    toDoAllCount.innerText = document.querySelectorAll('.todo__list-item').length;
    toDoCompletedCount.innerText = document.querySelectorAll('.todo__list-item.completed').length;
}

const showCompleted = () => {   
    toDoList.classList.add('show-completed');
}

const showAll = () => {
    toDoList.classList.remove('show-completed');
}

const filterTodos = event => {    
    if (!todos.length) return;

    for (const todo of todos) {
        const todoText = todo.querySelector('p').textContent;
        const value = event.target.value;

        if (todoText.includes(value)) {
            todo.classList.remove('hide');
        } else {
            todo.classList.add('hide');
        }
    }
}

export { changeTodoCounts, showCompleted, showAll, filterTodos }