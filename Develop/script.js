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

var hourofDay = new Date().getHours();
var hours = [nineEl, tenEl, elevenEl, noonEl, oneEl, twoEl, threeEl, fourEl, fiveEl];
var hoursNumber = [9,10,11,12,13,14,15,16,17];

// Loop through the hoursNumber array to compare to actual hour of the day to adjust background colors on calender.
for (i=0; i < hoursNumber.length; i++) {
    if (hoursNumber[i] === hourofDay){
        hours[i].css("background-color", "red");
    }

    else if (hoursNumber[i] < hourofDay) {
        hours[i].css("background-color", "gray");
    }

    else {
        hours[i].css("background-color", "green");
    }
};

function displayText(){
    nineEl.innerHTML = localStorage.getItem("hournine");
}



// saveBtn click listener 
saveBtnEl.on("click", function(event) {
    event.preventDefault();
    var btnClicked = $(event.target);
    var textInput = btnClicked.siblings(".description").val();
    var timeSlot = btnClicked.siblings().attr('id');


    console.log(textInput);
    localStorage.setItem(timeSlot,textInput);
    displayText();
});

