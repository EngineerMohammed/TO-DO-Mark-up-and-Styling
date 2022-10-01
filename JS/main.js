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
// ==========================================
// Foucus on the input field
window.onload = function () {
  theInput.focus();
  createNoTasks();
};

// Check if input field is Empety
theAddButton.onclick = function () {
  if (theInput.value === "") {
    alert("###Shoud enter Value Here!!!!");
    return false;
  } else {
    // Creat No-Task-Massage
    let noTasksMsg = document.querySelector(".no-tasks-massage");
    // Check If Span With No Tasks Message Is Exist
    if (document.body.contains(noTasksMsg)) {
      // Remove No Tasks Message
      noTasksMsg.remove();
    }
  }
  // Creat mainSpan
  let mainSpan = document.createElement("span");
  mainSpan.className = "task-box";

  // Creat text Node for Mainspn
  let text = document.createTextNode(theInput.value);
  // Append text to MAIN sPAN
  mainSpan.appendChild(text);

  // Creat delete Button
  let delElement = document.createElement("span");
  delElement.className = "delete";
  // Creat delete Text
  let delText = document.createTextNode("Delete");

  // Append deltext TO del element
  delElement.appendChild(delText);

  // Append Delet-ELement To Mainspan
  mainSpan.appendChild(delElement);

  // Append All To main DIV task-box
  tasksContainer.appendChild(mainSpan);

  theInput.value = "";
  theInput.focus();
  calculateTasks();
};

// ==============================================================
// Activete The Delete Button
document.addEventListener("click", function (e) {
  if (e.target.className === "delete") {
    e.target.parentNode.remove();
    if (tasksContainer.childElementCount == 0) {
      createNoTasks();
    }
  }
  // Finish Task
  if (e.target.classList.contains("task-box")) {
    // Toggle Class 'finished'
    e.target.classList.toggle("finished");
  }
  calculateTasks();
});

// ======================================================
// Creat No Task Massage
function createNoTasks() {
  // Creat Massage Span
  let msgSpan = document.createElement("span");
  msgSpan.className = "no-tasks-massage";
  // Creat msg Text
  let msgText = document.createTextNode("No-Tasks-To-Show");
  msgSpan.appendChild(msgText);
  // Add to taskcontainer
  tasksContainer.appendChild(msgSpan);
}

// / Function To Calculate Tasks
// function calculateTasks() {
//   tasksCount.innerHTML = document.querySelectorAll(
//     ".tasks-content .task-box"
//   ).length;

//   tasksCompleted.innerHTML = document.querySelectorAll(
//     ".tasks-content .finished"
//   ).length;
// }

function calculateTasks() {
  // Calculate All Tasks
  tasksCount.innerHTML = document.querySelectorAll(
    ".tasks-content .task-box"
  ).length;

  // Calculate Completed Tasks
  tasksCompleted.innerHTML = document.querySelectorAll(
    ".tasks-content .finished"
  ).length;
}
