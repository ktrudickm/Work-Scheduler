// Displaying current day of the week and date
var currentDate = moment();
$("#currentDay").text(currentDate.format("dddd, MMM Do"));

var saveBtnEl = $(".saveBtn");
var descriptionEl = $(".description");

var nineEl = $("#hournine");
var tenEl = $("#hourten");
var elevenEl = $("#houreleven");
var noonEl = $("#hournoon");
var oneEl = $("#hourone");
var twoEl = $("#hourtwo");
var threeEl = $("#hourthree");
var fourEl = $("#hourfour");
var fiveEl = $("#hourfive");

// Create variables to be used for determining background color of each time slot text entry field
var hourofDay = new Date().getHours();
var hours = [nineEl, tenEl, elevenEl, noonEl, oneEl, twoEl, threeEl, fourEl, fiveEl];
var hoursNumber = [9,10,11,12,13,14,15,16,17];

// Loop through the hoursNumber array to compare to actual hour of the day to adjust background colors on calender.
for (i=0; i < hoursNumber.length; i++) {
    if (hoursNumber[i] === hourofDay){
        hours[i].addClass("present");
    }

    else if (hoursNumber[i] < hourofDay) {
        hours[i].addClass("past");
    }

    else {
        hours[i].addClass("future");
    }
};


// Function to save the user text inputs in the time slot text fields into local storage
function saveInput (event) {
    event.preventDefault();
 
    console.log($(this).siblings(".description").attr("id"));
    var textInput = $(this).siblings(".description").val();
    var timeSlot = $(this).siblings(".description").attr("id");


    console.log(textInput);
    localStorage.setItem(timeSlot,textInput);
}

// For loop to display user text input at each timeslot using items stored in local storage.
for (let i = 0; i < hours.length; i++) {
   var key = hours[i].attr('id')

   hours[i].val(localStorage.getItem(key))
    
}


// Event listener for when the save button is clicked.
saveBtnEl.on('click', saveInput);