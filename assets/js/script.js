// Display Current Day at the top of the page
var currentDayEl = document.querySelector("#currentDay");
currentDayEl.textContent = moment().format("dddd, MMMM Do YYYY");

var containerDiv = document.querySelector(".container");
var textarea = document.querySelector("textarea");
var times = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

// Store the current time
var currentTime = moment().format("hA");

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
    $(divRow).append(timeDiv, textInputDiv);
    // // add column to display button
    // var buttonTD = $('<button class="saveBtn"><i class="fas fa-save"></i></button>');
    // $(row).append(timeTD, textInputTD, buttonTD);
 }
}

// Load tasks from storage
var loadTasks = function() {
    createTimeBlocks();
}

var saveTasks = function() {
    localStorage.setItem("tasks", );
}

var checkTime = function(textArea) {

}

loadTasks();

setInterval(function() {
    $("textarea").each(function(index, el) {
        checkTime(el);
    });
} (1000 * 60) * 60);