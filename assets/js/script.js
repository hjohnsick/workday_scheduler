var currentDayEl = document.querySelector("#currentDay");
var containerDiv = document.querySelector(".container");

// Display Current Day at the top of the page
currentDayEl.textContent = moment().format("dddd, MMMM Do YYYY");

// Store the current time
var currentTime = moment().format("hA");
console.log(currentTime);
var times = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

// create table to display times, enter text, and save item
var createTable = function() {
    var timeBlockDiv = document.createElement("div");
    timeBlockDiv.setAttribute("class", "time-block");
    containerDiv.appendChild(timeBlockDiv);
    // Display each time period
    for (var i = 0; i < times.length; i++) {
        // create row to display time, text, and save button
        var rowDiv = document.createElement("div");
        timeBlockDiv.appendChild(rowDiv);
        rowDiv.setAttribute("class", "row");
        var timeP = document.createElement("p");
        rowDiv.appendChild(timeP);
        timeP.setAttribute("class", "hour");
        timeP.textContent = times[i];
        var textInput = document.createElement("textarea");
        rowDiv.appendChild(textInput);
        textInput.setAttribute("class", "description");
        var saveButton = document.createElement("button");
        rowDiv.appendChild(saveButton);
        saveButton.setAttribute("class", "saveBtn");
        saveButton.innerHTML = '<i class="fas fa-save"></i>'; 
        
        if (currentTime === timeP.outerText) {
            textInput.setAttribute("class", "present");
        } 
        else if (currentTime < timeP.outerText) {
            textInput.setAttribute("class", "past");
        } else if (currentTime > timeP.outerText) {
            textInput.setAttribute("class", "future");
        }

        console.log(timeP.outerText);
    }
}

createTable();