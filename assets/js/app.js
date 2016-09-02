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
var number = 30;

function addClickListeners() {
	$('#start').click(triviaGame);
}

function triviaGame() {
	for (var i = 0; i < triviaQuestionArray.length; i++){

			runTimer();
			console.log(questionNumber);
			$('#start').hide();

			$('#questionNumber').empty();
			$('#triviaQuestion').empty();
			$('#answerOption').empty();
			$('#timerCountDown').empty();

			$('#questionNumber').append("Question Number: " + questionNumber);
			console.log(questionNumber);
			$('#triviaQuestion').append(triviaQuestionArray[questionNumber - 1].question);
			console.log(triviaQuestionArray[(questionNumber) - 1].question);
			$('#answerOption').append(triviaQuestionArray[questionNumber - 1].possibleAnswers);
			console.log(triviaQuestionArray[questionNumber - 1].possibleAnswers);
			questionNumber++;
			console.log(questionNumber);	
			
	}
} // for loop

function reset () {
		console.log(questionNumber);
		$('#triviaQuestion').empty();
		$('#answerOption').empty();
		$('#questionNumber').hide();
		$('#restart').show();
		$('#next').hide();
		$('triviaQuestion').append("Game Over!")
}

function runTimer(){
	counter = setInterval(decrement, 1000);
}

function decrement(){
    number--;
    $('#timerCountDown').html(number);
    if (number === 0){
    clearInterval(counter);
    }
}

$(document).ready(function(){
	addClickListeners();

});



//clear timeout