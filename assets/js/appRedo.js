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
var number = 5;
var timeOut = setInterval(triviaGame, 10000);

//start button to start trivia game
function addClickListeners() {
	$('#start').click(triviaGame);
}

//timer
function runTimer(){
	counter = setInterval(decrement, 1000);
}

function decrement(){
    number--;
    $('#timerCountDown').html("Time Remaining: " + number);
    if (number === 0){
    clearInterval(counter);
    }
}

//abort interval loop
function abortInterval() {
	clearInterval(timeOut);
}

//trivia game
function triviaGame() {
	for (var i = 0; i < triviaQuestionArray.length; i++) {
		console.log(triviaQuestionArray[(questionNumber) - 1].question);
		questionNumber++;
	}




}

