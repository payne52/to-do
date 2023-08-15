import { createAndAppendElement } from "./createAndAppendElement";

export const createTodo = (arr, id, text, date, completed = false) => {
    const inputAddToDo = document.getElementById('add-todo');

    if (!inputAddToDo.value && !text) return;

    const todoId = id || String(Date.now());
    const todoText = text || inputAddToDo.value;
    const dateStr = date || new Date().toLocaleDateString();
    const toDolistItem = createAndAppendElement('li', ['todo__list-item'], '', '', {id: todoId});

    if (completed) toDolistItem.classList.add('completed');

    const checkbox = createAndAppendElement('input', ['todo__checkbox'], toDolistItem, '', {type: 'checkbox', id: 'todo-checkbox-' + todoId});
    checkbox.checked = completed;
    createAndAppendElement('label', ['todo__label'], toDolistItem, '', {for: 'todo-checkbox-' + todoId});
    createAndAppendElement('p', ['todo__text'], toDolistItem, todoText);
    createAndAppendElement('button', ['todo__delete-button'], toDolistItem);    
    createAndAppendElement('div', ['todo__date'], toDolistItem, dateStr);
    arr.push({id: todoId, text: todoText, date: dateStr, completed: completed});
    localStorage.setItem('todos', JSON.stringify(arr));
    return toDolistItem;
}