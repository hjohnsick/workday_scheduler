var tasks = [];

// Display Current Day at the top of the page
var currentDayEl = document.querySelector("#currentDay");
currentDayEl.textContent = moment().format("dddd, MMMM Do YYYY");

var containerDiv = document.querySelector(".container");
var textarea = document.querySelector("textarea");
var times = [
  "9AM",
  "10AM",
  "11AM",
  "12PM",
  "1PM",
  "2PM",
  "3PM",
  "4PM",
  "5PM",
  "6PM",
  "7PM",
  "8PM",
];
var militaryTimes = [
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
];

// Create time blocks
var createTimeBlocks = function () {
  // Display each time period
  for (var i = 0; i < times.length; i++) {
    // create row for each time
    var divRow = $("<div>").addClass("row align-items-start");
    $(containerDiv).append(divRow);
    // add column to display time period
    var timeDiv = $("<div>").addClass("col-md-2 no-padding");
    var timeP = $('<p class="hour">').text(times[i]);
    $(timeDiv).append(timeP);
    // add column to display text area
    var textInputDiv = $("<div>").addClass("col no-padding");
    var textArea = $(`<textarea id="task-${i}">`);
    $(textInputDiv).append(textArea);
    // add column to display button
    var buttonDiv = $("<div>").addClass("col-md-2 no-padding");
    var button = $(
      `<button class="saveBtn" data-index="${i}"><i class="fas fa-save"></i></button>`
    );
    $(buttonDiv).append(button);
    $(divRow).append(timeDiv, textInputDiv, buttonDiv);

    checkTime(i, textArea);
  }
};

var loadTasks = function () {
  debugger;
  $("*[data-index]").each(function () {
    $(this).val(localStorage.getItem("task"));
  });
  createTimeBlocks();
};

var checkTime = function (i, textArea) {
  // remove any old classes from element
  $(textArea).removeClass("past present future");
  var time = moment().set("hour", militaryTimes[i]);
  // apply new class if task is future, present, or past

  if (moment().isSame(time)) {
    $(textArea).addClass("present");
  } else if (moment().isAfter(time)) {
    $(textArea).addClass("past");
  } else if (moment().isBefore(time)) {
    $(textArea).addClass("future");
  }
};

var saveTasks = function (event) {
  // get the index of the button that was clicked
  var index = $(event.target).attr("data-index");
  // use the index to save the task
  var task = document.getElementById(`task-${index}`).value;
  // add the task to the array of tasks
  tasks.push(task);
  // store the task in local storage
  localStorage.setItem("task", JSON.stringify(tasks));
  console.log(`Task ${task} saved`);
};

loadTasks();

$(".saveBtn").on("click", saveTasks);

setInterval(function () {
  $("textarea").each(function (index, el) {
    checkTime(index, el);
    console.log(index);
    console.log(el);
  });
}, 3600000);
