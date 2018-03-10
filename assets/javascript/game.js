
$(document).ready(function(){


// VARIABLES
// =======================================================================================================
var targetNumber = getRandomArbitrary(20, 100);
var buttonNumberOptions = [10, 5, 3, 7]; 
var imageJewel = $("<img>");
var counter = 0; 

// FUNCTIONS 
// =======================================================================================================

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

// MAIN PROCESS 
// =======================================================================================================

//Assign a random number to Number to Guess field
$("#numberToGuess").text(targetNumber);



});
