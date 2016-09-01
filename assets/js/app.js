var triviaQuestionArray = [{
	question: 'Who is Agent Cooper?',
	possibleAnswers: ['yes', 'no', 'maybe', 'never'],
	correctAnswer: 'yes',
}, {
	question: 'What does the crazy log lady hold and speak to?',
	possibleAnswers: ['yes', 'no', 'maybe', 'her friendly log'],
	correctAnswer: 'maybe',
}, {
	question: 'Who was Laura Palmer\'s best friend?',
	possibleAnswers: ['Audrey','Billy','Shelly','Donna'],
	correctAnswer: 'Donna',
}];

var questionNumber = 1;
var correct = 0;
var incorrect = 0;

function addClickListeners() {
	$('#start').click(triviaGame);
	$('#next').hide();

	$('#next').click(triviaGame);
	$('#restart').click(triviaGame);
}

function triviaGame() {
	$('#start').hide();
	$('#restart').hide();
	$('#next').show();
	$('#triviaQuestion').empty();
	$('#answerOption').empty();
	$('#triviaQuestion').append(triviaQuestionArray[questionNumber - 1].question);
		console.log(triviaQuestionArray[(questionNumber) - 1].question);
		console.log(triviaQuestionArray[questionNumber - 1].possibleAnswers);
	

	if (questionNumber > 4) {
		reset();
	}
	questionNumber++;
	console.log(questionNumber);

}

function reset () {
		console.log(questionNumber);
		$('#triviaQuestion').empty();
		$('#answerOption').empty();
		$('#restart').show();
		$('#next').hide();
		questionNumber = 1;
}

$(document).ready(function(){
	addClickListeners();

});



