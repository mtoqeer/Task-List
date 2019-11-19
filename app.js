const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


// Load all Event Listeners
loadEventListeners();


// Load All Event Listeners
function loadEventListeners(){


    // Load Tasks from localstorage

    document.addEventListener('DOMContentLoaded', getTasks);

    // Add Task Event
    form.addEventListener('submit', addTask);

    // Delete Task Event
    taskList.addEventListener('click', removeTask);

    // Clear All Tasks
    clearBtn.addEventListener('click', clearTasks);

    // Filter Tasks
    filter.addEventListener('keyup', filterTasks);
}

// Get tasks from LocalStorage
function getTasks(){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task){
            // Create li Element
        const li = document.createElement('li');
        
        // Add class to li element
        li.className = 'collection-item';
    
        // Create text node and append to li
        li.appendChild(document.createTextNode(task));
    
        // Create new link element
        const link = document.createElement('a');
    
        // Add class to link element
        link.className = 'delete-item secondary-content';
    
        // add icon html
        link.innerHTML = '<i class="fa fa-remove"></i>';
    
        // Append the link to li
        li.appendChild(link);
    
        // Append li to ul
        taskList.appendChild(li);
    })
}


// Filter Tasks
function filterTasks(e){
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach
    (function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });
}

// Add Task
function addTask(e){

    if(taskInput.value === ''){
        alert('Add a Task');
    } else {
    // Create li Element
    const li = document.createElement('li');
    
     // Add class to li element
     li.className = 'collection-item';
 
     // Create text node and append to li
     li.appendChild(document.createTextNode(taskInput.value));
 
     // Create new link element
     const link = document.createElement('a');
 
     // Add class to link element
     link.className = 'delete-item secondary-content';
 
     // add icon html
     link.innerHTML = '<i class="fa fa-remove"></i>';
 
     // Append the link to li
     li.appendChild(link);
 
     // Append li to ul
     taskList.appendChild(li);
        
    //  Save Tasks to Local Storage
     storeTaskInLocalStorage(taskInput.value);

     taskInput.value = '';
 
     e.preventDefault();
    } 
}

// Save Task To Local Storage
function storeTaskInLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}


// Delete Task
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure?')){
            e.target.parentElement.parentElement.remove();
        };
    }
}
// Cler Tasks Funciton
function clearTasks(){
    taskList.innerHTML = '';
}