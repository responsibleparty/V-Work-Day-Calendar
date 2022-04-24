var currentDay = $("#currentDay") 

console.log(moment().format("dddd, MMMM Do - hh:mm:ss a"));

// Link currentDay id to displayDate variable
var displayDate = document.querySelector("#currentDay");
displayDate.textContent = moment().format("dddd, MMMM Do - hh:mm:ss a");

// Update the time on the jumbotron
function updateTime(){
    var time = moment().format("dddd, MMMM Do - hh:mm:ss a");
    currentDay.text(time);
}
setInterval(updateTime, 1000);

// Update the colors
function updateColors() {
    var currentHour = moment().hour();
    for (var i = 9; i <=17; i++){
        var timeBlock = $("#" + i);
        if (currentHour > i){
            timeBlock.addClass("past");
            timeBlock.removeClass("present");
            timeBlock.removeClass("future");
        } else if (currentHour == i){
            timeBlock.addClass("present");
            timeBlock.removeClass("past");
            timeBlock.removeClass("future");
        } else {
            timeBlock.addClass("future");
            timeBlock.removeClass("past");
            timeBlock.removeClass("present");
        }
    }
};

setInterval(updateColors, 1000);



// Makes a list of all the text areas
var grabTextArea = document.querySelectorAll("textarea");
console.log(grabTextArea[0].id);

console.log(moment().hour());


