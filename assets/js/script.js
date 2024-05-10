// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
let nextId = JSON.parse(localStorage.getItem("nextId"));
let saveChanges = $('#save');
const toDoContainer =document.getElementById('todo-cards');

// Todo: create a function to generate a unique task id
function generateTaskId() {
const timeDisplayEl = $('#time-display');
const projectDisplayEl = $('#project-display');
const projectFormEl = $('#project-form');
const projectNameInputEl = $('#project-name-input');
const projectTypeInputEl = $('#project-type-input');
const projectDateInputEl = $('#taskDueDate');
if (nextId === null) {
  
}
}

// Todo: create a function to create a task card
function createTaskCard(task) {
    const taskCard = $('<div>')
    .addClass('card project-card draggable my-3')
    // .attr('data-project-id', project.id);
  const cardHeader = $('<div>').addClass('card-header h4').text(task.name);
  const cardBody = $('<div>').addClass('card-body');
  const cardDescription = $('<p>').addClass('card-text').text(task.type);
  const cardDueDate = $('<p>').addClass('card-text').text(task.dueDate);
  const dueDate = $('<input>').text(dueDate.format(MM/DD/YYYY));
  const cardDeleteBtn = $('<button>')
    .addClass('btn btn-danger delete')
    .text('Delete')
    .attr('data-project-id', task.id);
      cardBody.appendChild(cardDescription, cardDueDate, cardDeleteBtn);
      taskCard.appendChild(cardHeader, cardBody);
  cardDeleteBtn.on('click', handleDeleteTask);
  console.log(createTaskCard)

  return taskCard;
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList(task) {
const {title, taskDescription, date} = task
console.log(title, taskDescription, date);
  const taskCard = $('<div>')
.addClass('card project-card draggable my-3')
// .attr('data-project-id', project.id);
for (let i = 0; i < task.length; i++) {
const cardHeader = $('<div>').addClass('card-header h4').text('');
const cardBody = $('<div>').addClass('card-body');
const cardDescription = $('<p>').addClass('card-text').text('');
const cardDueDate = $('<p>').addClass('card-text').text('');
const cardDeleteBtn = $('<button>')
.addClass('btn btn-danger delete')
.text('Delete')
// .attr('data-project-id', project.id);
// cardDeleteBtn.on('click', handleDeleteTask);
cardBody.append(cardHeader, cardDescription, cardDueDate)
toDoContainer.append(cardBody)
}

}

// Todo: create a function to handle adding a new task
function handleAddTask(){
    if (task.dueDate && task.status !== 'done') {
        const now = dayjs();
        const taskDueDate = dayjs(task.dueDate, 'MM/DD/YYYY');
        // ? If the task is due today, make the card yellow. If it is overdue, make it red.
        if (now.isSame(taskDueDate, 'day')) {
          taskCard.addClass('bg-warning text-white');
        } else if (now.isAfter(taskDueDate)) {
          taskCard.addClass('bg-danger text-white');
          cardDeleteBtn.addClass('border-light');
        }
      }
}

function handleFormSubmit (event) {
  event.preventDefault();
  let task = {
    title: document.getElementById('task-title').value,
    date: document.getElementById('task-date').value,
    taskDescription: document.getElementById('description').value,
  }

  taskList.push(task);
  localStorage.setItem("tasks", JSON.stringify(taskList));
  // dayjs(task.date).format(MM/DD/YYYY);
  // dayjs
  console.log(task);
  
console.log(event);
createTaskCard(task);
renderTaskList(task);
}

// for (let task of taskList) {
//     if (task.status === 'to-do') {
//       todoList.append(createProjectCard(task));
//     } else if (task.status === 'in-progress') {
//       inProgressList.append(createProjectCard(task));
//     } else if (task.status === 'done') {
//       doneList.append(createProjectCard(task));
//     }
//   }

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){
    const projectId = $(this).attr('data-project-id');
    const tasks = readTaskFromStorage();  tasks.forEach((task) => {
    if (project.id === projectId) {
      tasks.splice(tasks.indexOf(task), 1);
    }
  });

  saveTaskToStorage(tasks);

  printProjectData();

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
    const tasks = readProjectsFromStorage();

    // ? Get the project id from the event
    const taskId = ui.draggable[0].dataset.projectId;
  
    // ? Get the id of the lane that the card was dropped into
    const newStatus = event.target.id;
  
    for (let task of tasks) {
      // ? Find the project card by the `id` and update the project status.
      if (project.id === taskId) {
        project.status = newStatus;
      }
    }
    // ? Save the updated projects array to localStorage (overwritting the previous one) and render the new project data to the screen.
    localStorage.setItem('projects', JSON.stringify(projects));
    printProjectData();
}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
saveChanges.on("submit",handleFormSubmit)
$(document).ready(function () {

});