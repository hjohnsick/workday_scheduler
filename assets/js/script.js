var currentDayEl = document.querySelector("#currentDay");
var containerDiv = document.querySelector(".container");

// Display Current Day at the top of the page
currentDayEl.textContent = moment().format("dddd, MMMM Do YYYY");

// Store the current time
var time = moment().format("hA");
console.log(time);
var times = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

// create table to display times, enter text, and save item
var createTable = function() {
    var table = document.createElement("TABLE");
    containerDiv.appendChild(table);

    // Display each time period
    for (var i = 0; i < times.length; i++) {
        // create row to display time, text, and save button
        var row = document.createElement("TR");
        table.appendChild(row);
        var timeTD = document.createElement("TD");
        row.appendChild(timeTD);
        timeTD.textContent = times[i];
        var textInputTD = document.createElement("INPUT");
        textInputTD.setAttribute("type", "text");
        row.appendChild(textInputTD);
        var saveTD = document.createElement("INPUT");
        saveTD.setAttribute("type", "submit");
        row.appendChild(saveTD);
    }
}

createTable();