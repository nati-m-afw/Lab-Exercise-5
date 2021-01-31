// UI vars 
// Selecting ui items
const taskInput = document.querySelector('#task');
const form = document.querySelector('#task-form'); 
const filter = document.querySelector('#filter'); 
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const reloadIcon = document.querySelector('.fa'); 
const orderBtn = document.querySelector('.order-options');

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
orderBtn.addEventListener("change", changeSortOrder);


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
    var date = document.createAttribute("data-date");
    date.value = new Date().getTime();
    li.setAttributeNode(date);
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
    sort(orderBtn.value);
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

function changeSortOrder(e){
    if (orderBtn.value == 2){
       sort(2);
    }
    else{
        sort(1)
    }
}

function reloadPage() {
    //using the reload fun on location object
    location.reload();
}

function sort(type){
    if(type == 2){
        // sort in descending order
        for(let i = 0; i < taskList.childElementCount; i++){
            for (let j = taskList.childElementCount - 1; j > i; j--) {
                if(taskList.children[j].getAttribute("data-date") > taskList.children[j - 1].getAttribute("data-date")){
                    tmp = taskList.children[j].outerHTML;
                    taskList.children[j].outerHTML = taskList.children[j - 1].outerHTML;
                    taskList.children[j - 1].outerHTML = tmp;
                }
            }
        }
    }


    else if(type == 1){
    //sort in ascending order
        for(let i = 0; i < taskList.childElementCount; i++){
            for (let j = taskList.childElementCount - 1; j > i; j--) {
                if(taskList.children[j].getAttribute("data-date") < taskList.children[j - 1].getAttribute("data-date")){
                    tmp = taskList.children[j].outerHTML;
                    taskList.children[j].outerHTML = taskList.children[j - 1].outerHTML;
                    taskList.children[j - 1].outerHTML = tmp;
                }
            }
        }
    }

    return;
}
