# Typing-Game
## A typing game based on Type of the Dead.

### [Live version.](http://irvingangulo.com/assets/typing-game-f/typing-game/)

_**Typing-Game**_  is a prototype of a typing game based on the game Type of the Dead. The idea is to type the words as fast as possible. The selection of words comes from scientific animal names ( [source: Animals by Scientific Names])(https://a-z-animals.com/animals/scientific/).

## THE GAME:
A word will appear in black. Type the words as fast as possible in the box. A new word will show once you have typed the prompted word, or once the timer reaches cero (0). 
At the beginning, words are three cahracters long (word length = 3). Words will increase in length every five (5) words.

## From a programming standpoint, some interesting features might be:

- A timer object constructed with the class MyTimer.
- Use of filter function on arrays.
- Use of a recursive function (random-word.js, line 41).
- Listeners and interaction with the DOM.
- All Javascript code separated from the HTML code.
- Automatic clearing of the input element by length of word or by timer.
- Assertion of correctness. Input highlighted when word is incorrect.
- Removing words from array after completing them in order to avoid repetition.
- Timer stops automatically at end and displays a "Game Over" message.
- Game starts on first input.

## Possible improvements (future work):

- Adding a score.
- Highlight typed key in word and notify of errors per letter (as opposed to per word as it is at the moment).
- Add a reset button.
- Improve layout, CSS, etc.
- An option to select timer length.
