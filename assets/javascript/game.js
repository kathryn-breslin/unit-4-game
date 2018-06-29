$(document).ready(function() {

//declare variables
setRandomNumber ();
wins = 1;
losses = 1;
yourScore = 0;

//Setting the HTML
$('#wins').text("Wins: ");
$('#losses').text("Losses: ");
$('.yourScoreIs').text("Your Score Is: ");
$('#yourScore').text("Score");

//Random number
function setRandomNumber() {
    randomNumber = Math.floor(Math.random () * (120 - 19 + 1)+ 19);
    console.log(randomNumber);
    $('#randomNumber').text(randomNumber);
}

var crystalNumbers = [12, 1, 6, 5];

//Setting the Crystals
for (var i = 0; i < crystalNumbers.length; i++) { 
   var crystalImage = $("<img>");
        crystalImage.addClass("crystal-image");
        crystalImage.attr("src", './assets/images/crytal_1.png');
        crystalImage.height('250px');
        crystalImage.width('250px');
        crystalImage.attr("data-crystalvalue", crystalNumbers[i]);
        $("#crystals").append(crystalImage);
}

//Click
$('.crystal-image').on('click', function() {
    crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    yourScore += crystalValue;
    $('#yourScore').text(yourScore);
    $('#scoreMessage').html('');

    if (yourScore === randomNumber) {
        $('#wins').html("Wins: " + wins++);
        $('#scoreMessage').text("You win!");
        reset();
     }
    
     else if (yourScore >= randomNumber) {
        $('#losses').html("Losses: " + losses++);
         $('#scoreMessage').text("You lost!");
         reset();
        }
 
    })

$(function () {
    $('.crystal-image').css('opacity', '1.0');
    $('.crystal-image').hover(function () {
    $(this).stop().animate({opacity: 0.75}, "fast");
    },
        function() {
        $(this).stop().animate({opacity: 1.0}, "fast");
    });
});

//Resetting the game

function reset() {
    yourScore = 0;
    setRandomNumber ();
    $('#yourScore').html('');
    $('#randomNumber').text(randomNumber);
    
    
}

});
