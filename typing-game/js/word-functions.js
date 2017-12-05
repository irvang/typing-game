//-------------------------------------
//filter array by lenth of word and assign it
function filterWordArray(originalArray, wordLengthCounter) {// (array, number)
	return originalArray.filter(word => word.length === wordLengthCounter);
}

//-------------------------------------
//sets the first word 
function setWord(arr) {
	//filter duplicates from original array
	wordArray = arr.filter(function (elem, index, self) {
		return index === self.indexOf(elem);
	});

	//new array from filtering by length
	wordsByLength = filterWordArray(wordArray, wordLengthCounter);

	//get a new word and display it
	newWord();
}

//-------------------------------------
function newWord() {
	selectedWord = randomWordSelector();
	document.querySelector('#show-word').innerHTML = selectedWord;
}

//-------------------------------------
function stringOfWordsToArray(wordsToFilter) {

	//separate string by line breaks and join by spaces
	let arrayOfAllWords = wordsToFilter.split('\n').join(' ');

	//remove '.' / only one such entry
	arrayOfAllWords = arrayOfAllWords.split('.').join(' ');

	// remove ','
	arrayOfAllWords = arrayOfAllWords.split(',').join(' ');

	//split by spaces and returs array
	arrayOfAllWords = arrayOfAllWords.split(' ');

	return arrayOfAllWords;
}