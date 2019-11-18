const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


// Load all Event Listeners
loadEventListeners();


// Load All Event Listeners
function loadEventListeners(){

    // Add Task Event
    form.addEventListener('submit', addTask);
}


// Add Task
function addTask(e){

    if(taskInput.value === ''){
        alert('Add a Task');
    }

    e.preventDefault();
}
