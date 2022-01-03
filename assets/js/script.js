// Display Current Day at the top of the page
var currentDayEl = document.querySelector("#currentDay");
currentDayEl.textContent = moment().format("dddd, MMMM Do YYYY");

var containerDiv = document.querySelector(".container");
var textarea = document.querySelector("textarea");
var times = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM", "8PM"];
var militaryTimes = ["9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];
// Store the current time
var currentTime = moment().format("H");

// Create time blocks
var createTimeBlocks = function() {
 // Display each time period
 for (var i = 0; i < times.length; i++) {
    // create row for each time
    var divRow = $("<div>").addClass("row align-items-start");
    $(containerDiv).append(divRow);
    // add column to display time period
    var timeDiv = $('<div>').addClass("col");
    var timeP = $('<p class="hour">').text(times[i]);
    $(timeDiv).append(timeP);
    // add column to display text area
    var textInputDiv = $('<div>').addClass("col");
    var textArea = $('<textarea>');
    $(textInputDiv).append(textArea);
    // add column to display button
    var buttonDiv = $('<div>').addClass("col");
    var button = $('<button class="saveBtn"><i class="fas fa-save"></i></button>');
    $(buttonDiv).append(button);
    $(divRow).append(timeDiv, textInputDiv, buttonDiv);
    checkTime(i, textArea);
 }
}

// Load tasks from storage
var loadTasks = function() {
    createTimeBlocks();
}

var saveTasks = function() {
    localStorage.setItem("tasks", );
}

var checkTime = function(i, textArea) {
    // remove any old classes from element
    $(textArea).removeClass("past present future");

    // apply new class if task is future, present, or past
        if (currentTime > militaryTimes[i]) {
            $(textArea).addClass("past");
        }
        if (currentTime === militaryTimes[i]) {
            $(textArea).addClass("present");
            
        }
        if (currentTime < militaryTimes[i]) {
            $(textArea).addClass("future");
        }
   
        console.log(`This is the current time:${currentTime}`);
        console.log(militaryTimes[i]);
}

loadTasks();

setInterval(function() {
    $("textarea").each(function(index, el) {
        checkTime(index, el);
    });
}, 3600000);