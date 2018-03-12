
$(document).ready(function(){

// VARIABLES
// =======================================================================================================
var targetNumber = getRandomArbitrary(19, 120);
var crystalNumberOptions = [10, 5, 3, 7]; 
var counter = 0; 
var totalWins = 0;
var totalLosses = 0;

// FUNCTIONS 
// =======================================================================================================

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

// Reset game to initial conditions
function newGame () {
    targetNumber = getRandomArbitrary(19, 120);
    $('#numberToGuess').text(targetNumber);
    counter = 0;
    $('#yourScore').text(counter);
}

// Display message based on win or loss
function winCheck () {
if (counter === targetNumber) {
    $('#statusMessage').text("You are a winner!");
    totalWins++;
    $("#yourWins").text(totalWins);
    console.log(totalWins);
    newGame();
  }

  else if (counter >= targetNumber) {
    $('#statusMessage').text("You are a loser!");
    totalLosses++;
    $("#yourLosses").text(totalLosses);
    console.log(totalLosses);
    newGame();
  }
};

// MAIN PROCESS 
// =======================================================================================================

// Assign a random number to Number to Guess field
$('#numberToGuess').text(targetNumber);

// Assign starting value of 0 to player's  total score
$('#yourScore').text(counter);

 // Shuffle the array to randomize order
 crystalNumberOptions.sort(function(a, b){return 0.5 - Math.random()});

console.log(crystalNumberOptions);

// Assign crystal array value to a new variable
var crystalValue1 = crystalNumberOptions[0];
console.log(crystalValue1 + ' is Cystal 1"s Value');
var crystalValue2 = crystalNumberOptions[1];
console.log(crystalValue2 + ' is Cystal 2"s Value');
var crystalValue3 = crystalNumberOptions[2];
console.log(crystalValue3 + ' is Cystal 3"s Value');
var crystalValue4 = crystalNumberOptions[3];
console.log(crystalValue4 + ' is Cystal 4"s Value');


// Configured crystals to increase total counter value when clicked
$('#crystal1').on('click', function() {
    counter += crystalValue1;
    $('#yourScore').text(counter);
    winCheck();
})

// Configured crystals to increase total counter value when clicked
$('#crystal2').on('click', function() {
    counter += crystalValue2;
    $('#yourScore').text(counter);
    winCheck();
})

// Configured crystals to increase total counter value when clicked
$('#crystal3').on('click', function() {
    counter += crystalValue3;
    $('#yourScore').text(counter);
    winCheck();
})

// Configured crystals to increase total counter value when clicked
$('#crystal4').on('click', function() {
    counter += crystalValue4;
    $('#yourScore').text(counter);
    winCheck();
})

});
