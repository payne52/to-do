import { buttonDeleteAll, buttonDeleteLast, inputAddToDo, buttonAddToDo, buttonShowAll, buttonShowCompleted, toDoSearch, toDoList } from "./renderAppElements";
import { createTodo } from "./createTodo";
import { changeTodoCounts, showCompleted, showAll, filterTodos } from "./utils";

let todosArr = [];
const todosFromStorage = JSON.parse(localStorage.getItem('todos')) || [];

const removeLastTodo = () => {    
    const toDoListLength = document.querySelectorAll('.todo__list-item').length;

    if (!toDoListLength) return;

    toDoList.childNodes[toDoListLength].remove();
    changeTodoCounts();
    todosArr.pop();
    localStorage.setItem('todos', JSON.stringify(todosArr));
}

const removeAllTodo = () => {
    toDoList.innerHTML = '';
    todosArr = [];
    localStorage.setItem('todos', JSON.stringify(todosArr))
    changeTodoCounts();
}

const handleTodoClick = event => {
    const { target } = event;
    const { classList, parentElement } = target;
    const { classList: parentClasslist } = parentElement;

    if (!classList.contains('todo__label') && !classList.contains('todo__delete-button')) return;

    if (classList.contains('todo__label')) {
        parentClasslist.toggle('completed');
        changeTodoCounts();
        const id = parentElement.id;

        todosArr.forEach(elem => {
            if (elem.id === id) {
                elem.completed ? elem.completed = false : elem.completed = true;
            }
        });

        localStorage.setItem('todos', JSON.stringify(todosArr));
    } else {
        parentElement.remove();
        changeTodoCounts();
        const id = parentElement.id;

        todosArr.forEach(function (elem, idx, arr) {
            if (elem.id === id) {            
                arr.splice(idx, 1);
            }
        });

        localStorage.setItem('todos', JSON.stringify(todosArr));
    }   
}

const addTodo = () => {
    const dotoItem = createTodo(todosArr);

    if (!dotoItem) return;

    toDoList.append(dotoItem);
    dotoItem.addEventListener('click', handleTodoClick);
    inputAddToDo.value = '';
    changeTodoCounts();
}

const enterTodo = event => {
    if (event.keyCode === 13) addTodo();
}
   
todosFromStorage.forEach(elem => {
    const { id, text, date, completed } = elem;
    const todo = createTodo(todosArr, id, text, date, completed);
    toDoList.append(todo);
    todo.addEventListener('click', handleTodoClick);
    changeTodoCounts();
});

buttonDeleteLast.addEventListener('click', removeLastTodo);
buttonDeleteAll.addEventListener('click', removeAllTodo);
buttonShowCompleted.addEventListener('click', showCompleted);
buttonShowAll.addEventListener('click', showAll);
buttonAddToDo.addEventListener('click', addTodo);
inputAddToDo.addEventListener('keydown', enterTodo);
toDoSearch.addEventListener('input', filterTodos);
