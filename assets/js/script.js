var currentDayEl = document.querySelector("#currentDay");
// Display Current Day at the top of the page
currentDayEl.textContent = moment().format("dddd, MMMM Do YYYY");

// Store the current time
var currentTime = moment().format("hA");
