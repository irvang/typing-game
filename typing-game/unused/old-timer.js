class MyTimer {

	//  timer is set to work on seconds. The subtraction is every 100ms therefore counter-= 0.1. It would otherwise take to long tu update 
	constructor(counterDuration, assertDiv) {
		this.counter = counterDuration;
		this.counterDur = counterDuration;//this
		this.intervalDur = 100; // must be 100 for seconds

		this.htmlElement = {}; // htmlCountDisplay
		this.myInterval = {};

		this.assertDiv = assertDiv;
		this.displayInitialRemainingTime(counterDuration);
	}

	start() {
		this.intervalFunc();
	}

	intervalFunc() {
		this.myInterval = setInterval(this.countAndDisplay(this),
			this.intervalDur);
	}

	/* 		
	another possibility for passing arguments to setInterval():
	https://coderwall.com/p/kxswnw/you-can-pass-arguments-into-settimeout-and-setinterval
	*/
	countAndDisplay(t) {//	(t = this timer)
		return function () {
			t.counter -= 0.1;

			if (t.counter <= 0) {
				t.counter = t.counterDur;
				newWord();//calling global function... 
				clearInput();
				return;
			}

			if (t.counter <= (t.counterDur - 1.5)) {
				t.assertDiv.innerHTML = '      ';
			}
			t.htmlElement.innerHTML = Math.ceil(t.counter);
		}
	}

	assignID(targetID) {
		// had to do it this way so that I can assign ID after object has been created and have object available globally
		this.htmlElement = document.querySelector('#' + targetID);
	}

	//  -------------------------------
	clearAndResetInterval() {
		clearInterval(this.myInterval);
		this.htmlElement.innerHTML = Math.ceil(this.counter);
		this.myInterval = setInterval(this.countAndDisplay(this),
			this.intervalDur);
		this.counter = 0;
	}
	//  -------------------------------
	clearInterval() {

		clearInterval(this.myInterval);

		t.assertDiv.innerHTML = "<i>" + 'The end!' + "</i>"
			+ "<br>" + ' Game has ended.';
		t.assertDiv.className = 'end-input';

		let wordInput = document.querySelector('#word-input');
		wordInput.removeEventListener('input', compareInput);

		console.log('at clearInterval', this.myInterval);
	}

	displayInitialRemainingTime(dur) {
		//called only one time / displays initial remaining value
		document.querySelector('#display-time').innerHTML = dur;
	}

	resetTimer(counterDuration) {
		console.log('resetTimer');
		clearInterval(this.myInterval);

		this.counter = counterDuration;
		this.counterDur = counterDuration;//this

		this.htmlElement.innerHTML = Math.ceil(this.counter);

		this.displayInitialRemainingTime(counterDuration);
	}
} //  MyTimer end of function

//  -----------------------------------
