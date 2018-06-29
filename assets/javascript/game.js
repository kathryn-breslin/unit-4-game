//Randomly generate number between 19 and 120
//crystals are given a random number between 1 and 12
//When you click on a crystal, the score increases by a certain number, depending on the crystal clicked
//the score will increase with whatever crystal is pressed
//if you are able to increase you score to the same amount as the randomly generated number, wins increases by 1 and you are told "You won!"
//if you go over the number amount, losses increases by 1 and you are told "you lost!"


//declare variables 
$(document).ready(function() {

setRandomNumber ();
wins = 1;
losses = 1;
yourScore = 0;

$('#wins').text("Wins: ");
$('#losses').text("Losses: ");
$('.yourScoreIs').text("Your Score Is: ");
$('#yourScore').text("Score");

function setRandomNumber() {
    randomNumber = Math.floor(Math.random () * 121);
    console.log(randomNumber);
    $('#randomNumber').text(randomNumber);
}

var crystalNumbers = [12, 1, 6, 5];

for (var i = 0; i < crystalNumbers.length; i++) {
   // crystalImage = $('.crystal-image');
   // crystalImage.attr("data-crystalvalue", crystalNumbers[i]);
    
   var crystalImage = $("<img>");
        crystalImage.addClass("crystal-image");
        crystalImage.attr("src", './assets/images/crytal_1.png');
        crystalImage.height('250px');
        crystalImage.width('250px');
        crystalImage.attr("data-crystalvalue", crystalNumbers[i]);
        $("#crystals").append(crystalImage);
}

$('.crystal-image').on('click', function() {
    crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    yourScore += crystalValue;
    $('#yourScore').text(yourScore);

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

function reset() {
    yourScore = 0;
    setRandomNumber ();
    $('#yourScore').html('');
    $('#randomNumber').text(randomNumber);
    $('#scoreMessage').html('');
}

});


//Resetting the game



//});

//Resetting the game


//$('.yourScoreIs').html("<h5> Your Score Is: </h5>");
//$('#yourScore').html("<h3>" + yourScore + "</h3>");
//$('#wins').html("<h4> Wins: " + wins + "</h4>");
//$('#losses').html("<h4> Losses: ") + losses + "</h4>");