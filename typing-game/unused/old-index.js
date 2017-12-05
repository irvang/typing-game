window.addEventListener('load', init);

//-------------------------------------
//  Global Variables
let selectedWordsCounter, selectedWord, timer, wordArray, wordsByLength, wordLengthCounter;

let htmlCountDisplay, assertDiv;
//-------------------------------------
function init() {
	stringOfWordsToArray();
	assignGlobalVariables();
	addListeners();
	setWord(arrayOfAllWords);
}
//-------------------------------------
//initiate global variables
function assignGlobalVariables() {

	assertDiv = document.querySelector('#assert');
	assertDiv.innerHTML = '    ';

	htmlCountDisplay = document.querySelector('#displayTime');

	timer = new MyTimer(8, assertDiv); // (seconds) / pass assertDiv as well?
	
	wordArray = [];//full array of words
	wordsByLength = [];//array filtered by length
	wordLengthCounter = 3; //length of words / to be incremented every 5 words

	//count how many words of lenght x have been used
	selectedWordsCounter = 0;
	selectedWord = '';
}


//  -----------------------------------

/*

//  --------------------------------------------------------
namesArr.sort(function (a, b) {
  // ASC  -> a.length - b.length
  // DESC -> b.length - a.length
  return b.length - a.length;
});
namesArr.reverse();
(namesArr);


*/