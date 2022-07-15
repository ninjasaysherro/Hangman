import Hangman from './hangman'
import getPuzzle from './requests'

const puzzEl = document.querySelector('#puzzle')
const guessEl = document.querySelector('#guesses')
let game

// puzzEl.textContent = game.puzzle
// guessEl.textContent = game.statusMessage

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game.makeGuess(guess)
    render()
})

const render = () => {
    puzzEl.innerHTML = ''
    guessEl.textContent = game.statusMessage

    game.puzzle.split('').forEach((letter) => {
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        puzzEl.appendChild(letterEl)
    })
}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()