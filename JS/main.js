// Set All Variables
/*
  Students Tasks:
  [1] Use Sweet Alert If Input Is Empty
  [2] Check If Task Is Exist
  [3] Create Delete All Tasks Button
  [4] Create Finish All Tasks Button
  [5] Add To Tasks To The Local Storage
*/

// Setting Up Variables
let theInput = document.querySelector(".add-task input");
let theAddButton = document.querySelector(".add-task .plus");
let tasksContainer = document.querySelector(".tasks-content");
let tasksCount = document.querySelector(".tasks-count span");
let tasksCompleted = document.querySelector(".tasks-completed span");

// When the window Loaded
window.onload = function () {
  theInput.focus();
  createNoTasks();
};

// Crat the No Task Massage
function createNoTasks() {
  let msgSpan = document.createElement("span");
  msgSpan.className = "no-tasks-massage";
  let msgText = document.createTextNode("No Tasks To Show");
  msgSpan.appendChild(msgText);

  // append to main container
  tasksContainer.appendChild(msgSpan);
}

// creat the task span and delet button
theAddButton.onclick = function () {
  if (theInput.value === "") {
    alert("######@@@@@@@@@!!!!!!");
  } else {
    // [1]check if there is notask massage
    let noTasksMsg = document.querySelector(".no-tasks-massage");
    if (document.body.contains(noTasksMsg)) {
      noTasksMsg.remove();
    }
    // Creat the Task box
    let mainSpanTask = document.createElement("span");
    mainSpanTask.className = "task-box";
    let mainText = document.createTextNode(theInput.value);
    mainSpanTask.appendChild(mainText);

    // Creat the Delete Button
    let delELESpan = document.createElement("span");
    delELESpan.className = "delete";
    let delelmText = document.createTextNode("Delete");
    delELESpan.appendChild(delelmText);

    // Append Del Element To Task BOX
    mainSpanTask.appendChild(delELESpan);
    // APPEND The Main span which containes DelElement and task-box to taskcontainer
    tasksContainer.appendChild(mainSpanTask);

    theInput.value = "";
    calculateTasks();
  }
};

// Activate the Delete Button

document.addEventListener("click", function (e) {
  if (e.target.className === "delete") {
    e.target.parentNode.remove();
    calculateTasks();
  }
  if (tasksContainer.childElementCount == 0) {
    createNoTasks();
  }
  if (e.target.classList.contains("task-box")) {
    e.target.classList.toggle("finished");
  }
  calculateTasks();
});

// creat task count function
function calculateTasks() {
  tasksCount.innerHTML = document.querySelectorAll(
    ".tasks-content .task-box"
  ).length;

  tasksCompleted.innerHTML = document.querySelectorAll(
    ".tasks-content .finished"
  ).length;
}
