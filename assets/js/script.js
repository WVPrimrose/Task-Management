// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
let nextId = JSON.parse(localStorage.getItem("nextId"));
let saveChanges = $('#save')

// Todo: create a function to generate a unique task id
function generateTaskId() {
const timeDisplayEl = $('#time-display');
const projectDisplayEl = $('#project-display');
const projectFormEl = $('#project-form');
const projectNameInputEl = $('#project-name-input');
const projectTypeInputEl = $('#project-type-input');
const projectDateInputEl = $('#taskDueDate');
}

// Todo: create a function to create a task card
function createTaskCard(task) {
    const taskCard = $('<div>')
    .addClass('card project-card draggable my-3')
    .attr('data-project-id', project.id);
  const cardHeader = $('<div>').addClass('card-header h4').text(project.name);
  const cardBody = $('<div>').addClass('card-body');
  const cardDescription = $('<p>').addClass('card-text').text(project.type);
  const cardDueDate = $('<p>').addClass('card-text').text(project.dueDate);
  const dueDate = $('<input>').text(dueDate.format(MM/DD/YYYY));
  const cardDeleteBtn = $('<button>')
    .addClass('btn btn-danger delete')
    .text('Delete')
    .attr('data-project-id', project.id);
  cardDeleteBtn.on('click', handleDeleteProject);
  console.log(createTaskCard)
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {const taskCard = $('<div>')
.addClass('card project-card draggable my-3')
.attr('data-project-id', project.id);
const cardHeader = $('<div>').addClass('card-header h4').text(project.name);
const cardBody = $('<div>').addClass('card-body');
const cardDescription = $('<p>').addClass('card-text').text(project.type);
const cardDueDate = $('<p>').addClass('card-text').text(project.dueDate);
const cardDeleteBtn = $('<button>')
.addClass('btn btn-danger delete')
.text('Delete')
.attr('data-project-id', project.id);
cardDeleteBtn.on('click', handleDeleteProject);

}

// Todo: create a function to handle adding a new task
function handleAddTask(){
    if (project.dueDate && project.status !== 'done') {
        const now = dayjs();
        const taskDueDate = dayjs(project.dueDate, 'MM/DD/YYYY');
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
    title: document.getElementById('task-title'),
    date: document.getElementById('date'),
    taskDescription: document.getElementById('task-description'),
  }

  taskList.push(task);
  localStorage.setItem("tasks", JSON.stringify(taskList));
  // dayjs(task.date).format(MM/DD/YYYY);
  // dayjs
  console.log(task);
  
console.log(event)


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
    const projects = readProjectsFromStorage();  projects.forEach((project) => {
    if (project.id === projectId) {
      projects.splice(projects.indexOf(project), 1);
    }
  });

  saveProjectsToStorage(projects);

  printProjectData();

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
    const projects = readProjectsFromStorage();

    // ? Get the project id from the event
    const taskId = ui.draggable[0].dataset.projectId;
  
    // ? Get the id of the lane that the card was dropped into
    const newStatus = event.target.id;
  
    for (let project of projects) {
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