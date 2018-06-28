//Randomly generate number between 19 and 120
//crystals are given a random number between 1 and 12
//When you click on a crystal, the score increases by a certain number, depending on the crystal clicked
//the score will increase with whatever crystal is pressed
//if you are able to increase you score to the same amount as the randomly generated number, wins increases by 1 and you are told "You won!"
//if you go over the number amount, losses increases by 1 and you are told "you lost!"


//declare variables 
$(document).ready(function() {

wins = 0;
losses = 0;
yourScore = 0;

var randomNumber = Math.floor(Math.random () * 121);
    console.log(randomNumber);
    $('#randomNumber').text(randomNumber);
    
var crystalNumbers = [12, 1, 6, 5];

for (var i = 0; i < crystalNumbers.length; i++) {
    crystalImage = $('.crystal-image');
    crystalImage.attr("data-crystalvalue", crystalNumbers[i]);
   
}

$('.crystal-image').on('click', function() {
    crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    yourScore += crystalValue;
    $('#yourScore').text(crystalValue);
    console.log(crystalValue);
})


});
//Create buttons with click functions
