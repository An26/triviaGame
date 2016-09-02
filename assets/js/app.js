var triviaQuestionArray = [{
	question: 'Who is Agent Cooper?',
	possibleAnswers: ['FBI Agent sent to investigate Laura Palmer\'s death', 'Laura Palmer\'s father', 'No one', 'The log man'],
	correctAnswer: 'FBI Agent sent to investigate Laura Palmer\'s death',
}, {
	question: 'What does the crazy log lady hold and speak to?',
	possibleAnswers: ['Mr.Pibbles her kitty cat', 'She holds and speaks to herself', 'Nothing', 'Her friendly log'],
	correctAnswer: 'Her friendly log',
}, {
	question: 'Who was Laura Palmer\'s best friend?',
	possibleAnswers: ['Audrey','Billy','Shelly','Donna'],
	correctAnswer: 'Donna',
}];

var questionNumber = 1;
var correct = 0;
var incorrect = 0;
var countDown = 30;

function addClickListeners() {
	$('#start').click(triviaGame);
	$('#next').click(triviaGame);
	$('#restart').click(triviaGame);
}

function triviaGame() {
	console.log(questionNumber);
	$('#start').hide();
	$('#restart').hide();
	$('#next').show();

	$('#questionNumber').empty();
	$('#triviaQuestion').empty();
	$('#answerOption').empty();

	if (questionNumber > 3) {
		reset();
	}

	$('#questionNumber').append("Question Number: " + questionNumber);
		console.log(questionNumber);
	$('#triviaQuestion').append(triviaQuestionArray[questionNumber - 1].question);
		console.log(triviaQuestionArray[(questionNumber) - 1].question);
	$('#answerOption').append(triviaQuestionArray[questionNumber - 1].possibleAnswers);
		console.log(triviaQuestionArray[questionNumber - 1].possibleAnswers);
	
	questionNumber++;
	console.log(questionNumber);

		timer();
}

function reset () {
		console.log(questionNumber);
		$('#triviaQuestion').empty();
		$('#answerOption').empty();

		$('#questionNumber').hide();
		$('#restart').show();
		$('#next').hide();

		$('triviaQuestion').append("Game Over!")
}

function timer(){
	setTimeout(decrement, 3000);
	console.log("3 seconds");
}

function decrement(){
	countDown--;
	$('#timerCountdown').html("Time Left: " + countDown);
}

$(document).ready(function(){

	addClickListeners();


});



