//-------------------------------------
/*
 * selects a random word from an array and returns it  
 * increments the length of the words to be selected
 * ends game  
 * may recursively calls itself
 */
function randomWordSelector() {
	
		let randomWord = '';
		selectedWordsCounter = selectedWordsCounter % 5;
	
		if (wordsByLength.length !== 0) {
			// console.log('passed', wordLengthCounter);
	
			let arrIndex = Math.floor(Math.random() * wordsByLength.length);
			wordsByLength[arrIndex];
			randomWord = wordsByLength[arrIndex].toLowerCase();
	
			//if there is at least one word on array, remove a word
			if (arrIndex > -1) wordsByLength.splice(arrIndex, 1);
	
			//if 5 words of selected length, increment the length
			if (selectedWordsCounter === 4) {
				wordLengthCounter++;
				wordsByLength = filterWordArray(wordArray, wordLengthCounter);
			}
	
			//count how many words of lenght x have been used
			selectedWordsCounter++;
	
		} else if ((wordsByLength.length === 0) && (wordLengthCounter < 30)) {
			// if a certain wordLength is not present, 
			// we call recursively up to a word length of 30
			wordLengthCounter++;
			selectedWordsCounter = 0;
			wordsByLength = filterWordArray(wordArray, wordLengthCounter);
			// console.log('elseIf wordLengthCounter', wordLengthCounter);
	
			//return recursive, otherwise 'undefined' or ' ' would be displayed
			return randomWordSelector();
	
		} else { //else, end the game
			timer.clearIntervalAtEndOfGame();
			console.log('else', wordLengthCounter);
			return 'GAME OVER';
		}
		return randomWord;
	}