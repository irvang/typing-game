//====LISTENERS
function addListeners() {
	let wordInput = document.querySelector('#word-input');
	wordInput.addEventListener('input', compareInput);

	//start game on first input
	addStartGameListener();

	let startingWordLength = document.querySelector('#wordLength');
	startingWordLength.addEventListener('input', newWordLength);

	let counterDurL = document.querySelector('#counter-dur');
	counterDurL.addEventListener('input', newCounterDuration);
}

//====LISTENERS' FUNCTIONS
//-------------------------------------
function compareInput(evt) {

	let currentInput = evt.target;
	let currentInputVal = currentInput.value;
	let inputValLength = currentInputVal.length;

	//compare selectedWord character, up to the length of the input, with input
	if (selectedWord.substring(0, inputValLength) === currentInputVal) {
		//notify correct
		currentInput.style.backgroundColor = '';
	} else {
		//notify incorrect
		currentInput.style.backgroundColor = 'pink';
	}

	//assert once the input length is equivalent to selectedWord length
	if (currentInputVal.length >= selectedWord.length) {
		if (selectedWord === currentInputVal) {
			assertDiv.innerHTML = 'great!';
			assertDiv.className = 'good-input';
		}
		else {
			assertDiv.innerHTML = 'meh';
			assertDiv.className = 'bad-input';
		}

		timer.clearAndResetInterval();
		clearInput();
	}
	/**SEE BELOW FOR COMPARISON PER CHARACTER */
}

//-------------------------------------
function startGameAndRemoveListener(evt) {
	//start the game and destroy the listener (this function)
	evt.target.removeEventListener('input', startGameAndRemoveListener);
	timer.start();
}

//-------------------------------------
//Game starts on input
function addStartGameListener() {
	let wordInput = document.querySelector('#word-input');
	wordInput.addEventListener('input', startGameAndRemoveListener);
}

//-------------------------------------
function newWordLength(evt) {
	addStartGameListener();
	wordLengthCounter = parseInt(evt.target.value);
	setWord(arrayOfAllWords);
	timer.resetTimer();
}

//-------------------------------------
function newCounterDuration(evt) {
	addStartGameListener();
	timer.newDuration(parseInt(evt.target.value));
}

/** FOR COMPARISON BY CHARACTER USE:
	//compare selectedWord character, at length of the input, 
	// with last input letter
	let charIndex = currentInputVal.length - 1;
	if (selectedWord[charIndex] === currentInputVal[charIndex]) { } else { }
 */