var currentDay = $("#currentDay");

// console.log(moment().format("dddd, MMMM Do - hh:mm:ss a"));

// Link currentDay id to displayDate variable
var displayDate = document.querySelector("#currentDay");
displayDate.textContent = moment().format("dddd, MMMM Do - hh:mm:ss a");

// Update the time on the jumbotron
function updateTime() {
  var time = moment().format("dddd, MMMM Do - hh:mm:ss a");
  currentDay.text(time);
}
setInterval(updateTime, 1000);

// Update the colors
function updateColors() {
  var currentHour = moment().hour();
  for (var i = 9; i <= 17; i++) {
    var timeBlock = $("#" + i);
    if (currentHour > i) {
      timeBlock.addClass("past");
      timeBlock.removeClass("present");
      timeBlock.removeClass("future");
    } else if (currentHour == i) {
      timeBlock.addClass("present");
      timeBlock.removeClass("past");
      timeBlock.removeClass("future");
    } else {
      timeBlock.addClass("future");
      timeBlock.removeClass("past");
      timeBlock.removeClass("present");
    }
  }
}

setInterval(updateColors, 1000);


$('.container').on('click','.saveBtn',function(e){
    // it listens to all the button click
    let localStorageArray =[];
for (let i =9; i<18;i++){
    localStorageArray.push([i,document.querySelector(`#input${i}`).value.trim()])
}

console.log(localStorageArray);

// save that array to local
localStorage.setItem('myArray',JSON.stringify(localStorageArray));
});





// function getSelectedItems() {
//   var elements = document.querySelectorAll(".description");
//   var results = [];
//   for (var i = 0; i < elements.length; i++) {
//     var element = elements[i];
//     results.push(element);
//   }
// }

// localStorage.setItem('results',JSON.stringify(localStorageArray));




// Makes a list of all the text areas
// var grabTextArea = document.querySelectorAll("textarea");
// console.log(grabTextArea.id);

// console.log(moment().hour());
