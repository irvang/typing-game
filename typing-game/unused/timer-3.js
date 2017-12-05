class MyTimer {

	//  timer is set to work on seconds. The subtraction is every 100ms therefore counter-= 0.1. It would otherwise take to long tu update 
	constructor(counterDuration) {
		this.counter = counterDuration;
		this.counterDur = counterDuration;//this

		displayCounter(counterDuration);//display initial remaining time
	}

	start() {
		startInterval(this);
	}

	clearAndResetInterval() {
		stopInterval();
		this.start();
		displayCounter(Math.ceil(this.counter));
		this.counter = 0;
	}

	clearIntervalAtEndOfGame() {
		endGameMsg();
	}

	newDuration(counterDuration) {
		this.counterDur = counterDuration;
		this.resetTimer();
	}

	resetTimer() {
		stopInterval();
		this.counter = this.counterDur;
		displayCounter(Math.ceil(this.counter));
		clearInput();
	}
}

function start() {
	startInterval(this);
}

function clearAndResetInterval() {
	stopInterval();
	this.start();
	displayCounter(Math.ceil(this.counter));
	this.counter = 0;
}

function clearIntervalAtEndOfGame() {
	endGameMsg();
}

function newDuration(counterDuration) {
	this.counterDur = counterDuration;
	this.resetTimer();
}

function resetTimer() {
	stopInterval();
	this.counter = this.counterDur;
	displayCounter(Math.ceil(this.counter));
	clearInput();
}

//-------------------------------------
//====INTERVAL AND RELATED FUNCTIONS
let globalIntervalID;
function startInterval(tmr) {
	globalIntervalID = setInterval(countAndDisplay(tmr), 100);
}

/** SEE NOTE: another possibility for passing arguments to setInterval() */
function countAndDisplay(tmr) {//	(t = this timer)
	return function () {
		tmr.counter -= 0.1;

		if (tmr.counter <= 0) {
			tmr.counter = tmr.counterDur;
			newWord();//calling global function... 
			clearInput();
		}

		if (tmr.counter <= (tmr.counterDur - 1.0)) {
			clearAssert();
		}
		displayCounter(Math.ceil(tmr.counter));
	}
}

function stopInterval () {
	clearInterval(globalIntervalID);
}
//-------------------------------------
//====TIMER HELPER FUNCTIONS
//	these functions interact with the DOM and global ojects
function clearAssert() {
	assertDiv.innerHTML = '      ';
}
//-------------------------------------
function displayCounter(currentCount) {
	htmlCountDisplay.innerHTML = currentCount;
}
//-------------------------------------
function endGameMsg() {
	stopInterval();

	assertDiv.innerHTML = "<i>" + 'The end!' + "</i>"
		+ "<br>" + ' Game has ended.';
	assertDiv.className = 'end-input';

	//remove input listener with compareInput()
	let wordInput = document.querySelector('#word-input');
	wordInput.removeEventListener('input', compareInput);
	// wordInput.readOnly = true;
	wordInput.style.backgroundColor = 'lightGreen';
}

//  -----------------------------------
function clearInput() {
	//maybe use a global variable to avoid redefining every time
	let wordInput = document.querySelector('#word-input');
	wordInput.value = '';
	wordInput.style.backgroundColor = '';
}
//-------------------------------------


	/**
	 * another possibility for passing arguments to setInterval():
	 * https://coderwall.com/p/kxswnw/you-can-pass-arguments-into-settimeout-and-setinterval
	*/


