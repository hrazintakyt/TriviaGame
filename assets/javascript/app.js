//We want the HTML to be fully loaded before starting anything
$(document).ready(function() {

//creating global variables:
var questionList=["1. At what attack level can you equip a Dragon Dagger?","2. What is the highest F2P arrow?",
"3. What year was the Evolution of Combat?","4. Which quest allows you to use the Ardougne Teleport?",
"5. What monster drops the Staff Of Light?", "6. How many boss monsters are in the God Wars Dungeon?"]

var answerLista=[50, "Mithril", 2011, "Demon Slayer", "Kril Tutsaroth", 2];

var answerListb=[55, "Adamant", 2012, "The Cook's Assistant", "Kree Ara", 3];

var answerListc=[60, "Runite", 2013, "Desert Treasure", "Tz-Tok-Jad", 4];

var answerListd=[70, "Dragon", 2014, "Plague City", "It can only be made", 6];

//correct answer variable to compare the correct answers to the answerList inputs chosen.

var correctAnswer=[60, "Adamant", 2012, "Plague City", "It can only be made", 4];


//for the sake of incrementing it later.
var correct = 0

var incorrect = 0

var i = 0;

var currentQuestion = $(".question").html("<h2>") 

currentQuestion.html(questionList[i]);

var firstChoice = $(".choiceOne").html("<p>")

firstChoice.html(answerLista[i]);

var secondChoice = $(".choiceTwo").html("<p>")

secondChoice.html(answerListb[i]);

var thirdChoice = $(".choiceThree").html("<p>")

thirdChoice.html(answerListc[i]);

var fourthChoice = $(".choiceFour").html("<p>")

fourthChoice.html(answerListd[i]);

var submitButton = $('.submitButton').click(function () {
    return false; 
});





//countdown and visibility function
	$(".startButton").click(function(){
	$(".hiddenForm").css("visibility", "visible")
    $(".startButton").css("display", "none");
    var timeRemaining = 30;
    var timerInterval = setInterval(countdown, 1000);


    function countdown() {
  		if (timeRemaining <= 0) {
    		clearTimeout(timerInterval);
    		alert("You are out of time and you got " + correct + " answers right and " + incorrect + " answers wrong.");
    		location.reload();
  								} else {
    		$(".timer").html(timeRemaining + " seconds left");
    		timeRemaining--;
  										}
								}




// I tried many different loops here but I just could not get them to work :(
	




//mainFunction
});




//doc.ready
});
