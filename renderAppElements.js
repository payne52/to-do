import { createAndAppendElement } from "./createAndAppendElement";

const root = document.getElementById('root');
const header = createAndAppendElement('div', ['header'], root);
const buttonDeleteAllText = 'Delete all';
const buttonDeleteAll = createAndAppendElement('button', ['button', 'button_tonal', 'header__delete-all-button'], header, buttonDeleteAllText);
const buttonDeleteLastText = 'Delete last';
const buttonDeleteLast = createAndAppendElement('button', ['button', 'button_tonal', 'header__delete-last-button'], header, buttonDeleteLastText);
const inputAddToDo = createAndAppendElement('input', ['input', 'header__todo-input'], header, '', {placeholder: 'Enter todo...', id: 'add-todo'});
const buttonAddToDoText = 'Add';
const buttonAddToDo = createAndAppendElement('button', ['button', 'button_filled', 'header__add-button'], header, buttonAddToDoText);
const container = createAndAppendElement('div', ['container', 'todo'], root);
const toDoNavigation = createAndAppendElement('div', ['todo__navigation'], container);
const toDoAllText = 'All: ';
const toDoAll = createAndAppendElement('div', ['todo__all'], toDoNavigation, toDoAllText);
const toDoCompletedText = 'Completed: ';
const toDoCompleted = createAndAppendElement('div', ['todo__completed'], toDoNavigation, toDoCompletedText);
const buttonShowAllText = 'Show all';
const buttonShowAll = createAndAppendElement('button', ['button', 'button_text', 'todo__show-all-button'], toDoNavigation, buttonShowAllText);
const buttonShowCompletedText = 'Show completed';
const buttonShowCompleted = createAndAppendElement('button', ['button', 'button_text', 'todo__show-completed-button'], toDoNavigation, buttonShowCompletedText);
const toDoSearch = createAndAppendElement('input', ['input', 'todo__search-input'], toDoNavigation, '', {placeholder: 'Search...'});
const toDoList = createAndAppendElement('ul', ['todo__list'], container, '', {id: 'todo-list'});
createAndAppendElement('span', ['todo__all-count'], toDoAll, '0', {id: 'all-count'});
createAndAppendElement('span', ['todo__completed-count'], toDoCompleted, '0', {id: 'completed-count'});

export { buttonDeleteAll, buttonDeleteLast, inputAddToDo, buttonAddToDo, buttonShowAll, buttonShowCompleted, toDoSearch, toDoList }