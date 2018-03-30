class MyTimer {

	//  timer is set to work on seconds. The subtraction is every 100ms therefore counter-= 0.1. It would otherwise take too long tu update 
	constructor(counterDuration) {
		this.counter = counterDuration;
		this.counterDur = counterDuration;//this
		this.intervalDur = 100; // must be 100 for seconds

		this.myInterval = {};

		displayCounter(counterDuration);//display initial remaining time
	}

	start() {
		this.myInterval = setInterval(this.countAndDisplay(this),
			this.intervalDur);
	}

	clearAndResetInterval() {
		clearInterval(this.myInterval);//clearInterval is defined by API
		this.start();
		displayCounter(Math.ceil(this.counter));
		this.counter = 0;
	}

	clearIntervalAtEndOfGame() {
		clearInterval(this.myInterval);//defined by API
		endGameMsg();
	}

	resetTimer() {
		clearInterval(this.myInterval);
		this.counter = this.counterDur;
		displayCounter(Math.ceil(this.counter));
		clearInput();
	}

	newDuration(counterDuration) {
		this.counterDur = counterDuration;
		this.resetTimer();
	}

	/** SEE NOTE: another possibility for passing arguments to setInterval() */
	countAndDisplay(t) {//	(t = this timer)
		return function () {
			t.counter -= 0.1;

			if (t.counter <= 0) {
				t.counter = t.counterDur;
				newWord();//calling global function... 
				clearInput();
			}

			if (t.counter <= (t.counterDur - 1.0)) {
				clearAssert();
			}
			displayCounter(Math.ceil(t.counter));
		}
	}
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


