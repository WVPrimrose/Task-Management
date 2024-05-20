// Retrieve tasks and nextId from localStorage
let nextId = JSON.parse(localStorage.getItem("nextId"));
let saveChanges = $('#save');
const toDoContainer = $('#todo-cards');
const inProgressContainer = $('#in-progress-cards');
const doneContainer = $('#done-cards');

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
  const cardHeader = $('<div>').addClass('card-header h4').text(task.title);
  const cardBody = $('<div>').addClass('card-body');
  const cardDescription = $('<p>').addClass('card-text').text(task.taskDescription);
  const cardDueDate = $('<p>').addClass('card-text').text(task.date);
  const cardDeleteBtn = $('<button>')
    .addClass('btn btn-danger delete')
    .text('Delete')
    .attr('data-project-id', task.id);
      cardBody.append(cardDescription, cardDueDate, cardDeleteBtn);
      taskCard.append(cardHeader, cardBody);
  cardDeleteBtn.on('click', handleDeleteTask);
  console.log(createTaskCard)
      toDoContainer.append(taskCard)
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
  let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
  const todoList = $('#todo-cards');
  todoList.empty();

  const inProgressList = $('#in-progress-cards');
  inProgressList.empty();

  const doneList = $('#done-cards');
  doneList.empty();

// .attr('data-project-id', project.id);
for (let i = 0; i < taskList.length; i++) {
  const taskCard = $('<div>')
  .addClass('card project-card draggable my-3')
const cardHeader = $('<div>').addClass('card-header h4').text(taskList[i].title);
const cardBody = $('<div>').addClass('card-body');
const cardDescription = $('<p>').addClass('card-text').text(taskList[i].taskDescription);
const cardDueDate = $('<p>').addClass('card-text').text(taskList[i].date);
const cardDeleteBtn = $('<button>')
.addClass('btn btn-danger delete')
.text('Delete')
// .attr('data-project-id', project.id);
cardDeleteBtn.on('click', handleDeleteTask);
cardBody.append(cardDescription, cardDueDate, cardDeleteBtn)
taskCard.append(cardHeader, cardBody)

    if (taskList[i].status === 'to-do') {
      toDoContainer.append(taskCard)
    } else if (taskList[i].status === 'in-progress') {
      inProgressContainer.append(taskCard)
    } else if (taskList[i].status === 'done') {
      doneContainer.append(taskCard);
    }
  
}

$('.draggable').draggable({
  opacity: 0.7,
  zIndex: 100,
  // ? This is the function that creates the clone of the card that is dragged. This is purely visual and does not affect the data.
  helper: function (e) {
    // ? Check if the target of the drag event is the card itself or a child element. If it is the card itself, clone it, otherwise find the parent card  that is draggable and clone that.
    const original = $(e.target).hasClass('ui-draggable')
      ? $(e.target)
      : $(e.target).closest('.ui-draggable');
    // ? Return the clone with the width set to the width of the original card. This is so the clone does not take up the entire width of the lane. This is to also fix a visual bug where the card shrinks as it's dragged to the right.
    return original.clone().css({
      width: original.outerWidth(),
    });
  },
});

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
    status: 'to-do',
    // id:
  }
  let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
  dayjs(task.date).format("MM/DD/YYYY");

  taskList.push(task);
  localStorage.setItem("tasks", JSON.stringify(taskList));

  console.log(task);
  
// taskList.push(createTaskCard(task));
renderTaskList();
}



// Todo: create a function to handle deleting a task
function handleDeleteTask(event){
    const projectId = $(this).attr('data-project-id');
    const tasks = renderTaskList();  tasks.forEach((task) => {
    if (task.id === taskId) {
      tasks.splice(tasks.indexOf(taskList[i]), 1);
    }
  });

  saveTaskToStorage(tasks);

return renderTaskList();

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
  let taskList = JSON.parse(localStorage.getItem("tasks")) || [];

    // ? Get the project id from the event
    const taskId = ui.draggable[0].dataset.taskId;
    console.log(taskId);
  
    // ? Get the id of the lane that the card was dropped into
    const newStatus = event.target.id;
  console.log(newStatus);
    for (let task of taskList) {
      // ? Find the project card by the `id` and update the project status.
      if (task.id === taskId) {
        task.status = newStatus;
      }
    }
    // ? Save the updated projects array to localStorage (overwritting the previous one) and render the new project data to the screen.
    localStorage.setItem('tasks', JSON.stringify(taskList));
    
    renderTaskList();
}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
saveChanges.on("submit",handleFormSubmit)
$(document).ready(function () {
  renderTaskList();
  $('.lane').droppable({
    accept: '.draggable',
    drop: handleDrop,
  });
});
