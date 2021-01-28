// UI vars 
// Selecting ui items
const taskInput = document.querySelector('#task');
const form = document.querySelector('#task-form'); 
const filter = document.querySelector('#filter'); 
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const reloadIcon = document.querySelector('.fa'); 

// Adding event listners
form.addEventListener("submit", addNewTask);
filter.addEventListener("keyup", filterTasks);
clearBtn.addEventListener("click", clearAllTasks);
taskList.addEventListener("click", removeTask);
reloadIcon.addEventListener('click', reloadPage);
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.FormSelect.init(elems);
  });



// Event handlers
function addNewTask(e){
    e.preventDefault();
    
    if (!taskInput.value){
        // taskInput.classList.add("task-input-warning");
        taskInput.style.borderColor = "red"
        return;
    }

    // Create an li element when the user adds a task
    const li = document.createElement('li');
    // Adding a class
    li.className = 'collection-item';
    // Create text node and append it
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new element for the link
    const link = document.createElement('a');
    // Add class and the x marker for a
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append link to li
    li.appendChild(link);
    // Append to ul
    taskList.appendChild(li);
    taskInput.value = '';
    // taskInput.classList.remove("task-input-warning");
    taskInput.style.borderColor = "black";
}

function filterTasks(e){
    const tasks = document.querySelectorAll(".collection-item");
    tasks.forEach(task => {
        if (task.textContent.indexOf(filter.value) != -1){
            task.style.display = 'block';
        }
        else{
            task.style.display = 'none';
        }
    });
    
}

function clearAllTasks(e){
    while (taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
}

function removeTask(e){
    if (e.target.parentElement.classList.contains('delete-item')){
        if (confirm('Are You Sure about that ?')){
            e.target.parentElement.parentElement.remove();
        }
    }

}

function reloadPage() {
    //using the reload fun on location object
    location.reload();
}