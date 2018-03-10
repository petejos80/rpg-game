
$(document).ready(function(){

// VARIABLES
// =======================================================================================================
var targetNumber = getRandomArbitrary(20, 100);
var crystalNumberOptions = [10, 5, 3, 7]; 
var counter = 0; 

// FUNCTIONS 
// =======================================================================================================

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

// MAIN PROCESS 
// =======================================================================================================

// Assign a random number to Number to Guess field
$('#numberToGuess').text(targetNumber);

 // Shuffle the array to randomize order
crystalNumberOptions.sort(function(a, b){return 0.5 - Math.random()});

console.log(crystalNumberOptions);

// Test - remove
$('#crystal1').on('click', function() {
    alert('hello')
});

// $("#crystal1, #crystal2, #crystal3, #crystal4").val(crystalNumberOptions[0,1,2,3]);

$('#crystal1').val(crystalNumberOptions[0]);
$('#crystal2').val(crystalNumberOptions[1]);
$('#crystal3').val(crystalNumberOptions[2]);
$('#crystal4').val(crystalNumberOptions[3]);

//Testing
var testing1 = $("#crystal1").val();
console.log('Testing' + testing1);

var testing2 = $("#crystal2").val();
console.log('Testing' + testing2);

var testing3 = $("#crystal3").val();
console.log('Testing' + testing3);

var testing4 = $("#crystal4").val();
console.log('Testing' + testing4);










// for (var i = 0; i < crystalNumberOptions.length; i++) {

//     var imageJewel = $('<img>');

//     }   

});
