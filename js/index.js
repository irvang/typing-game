window.addEventListener('load', init);

//-------------------------------------
//  Global Variables
let selectedWordsCounter, selectedWord, timer, wordArray, wordsByLength, wordLengthCounter, arrayOfAllWords;

let htmlCountDisplay, assertDiv;

//-------------------------------------
function init() {
	arrayOfAllWords = stringOfWordsToArray(wordsToFilter);
	assignGlobalVariables();
	addListeners();
	setWord(arrayOfAllWords);
}

//-------------------------------------
//initiate global variables
function assignGlobalVariables() {

	assertDiv = document.querySelector('#assert');
	assertDiv.innerHTML = '    ';

	htmlCountDisplay = document.querySelector('#display-time');

	timer = new MyTimer(7); // (seconds) / pass assertDiv as well?

	wordArray = [];//full array of words
	wordsByLength = [];//array filtered by length
	wordLengthCounter = 3; //length of words / to be incremented every 5 words

	//count how many words of lenght x have been used
	selectedWordsCounter = 0;
	selectedWord = '';
}