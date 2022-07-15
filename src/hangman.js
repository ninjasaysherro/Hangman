class Hangman {
    constructor(words, guess) {
        this.words = words.toLowerCase().split('')
        this.guess = guess
        this.guessedLetters = []
        this.status = 'playing'
    }
    getStatus() {
        const finished = this.words.every((letter) => this.guessedLetters.includes(letter) || letter === ' ')

        if (this.guess === 0) {
            this.status = 'failed'
        } else if (finished) {
            this.status = 'finished'
        } else {
            this.status = 'playing'
        }
    }
    get statusMessage() {
        if (this.status === 'playing') {
            return `Guesses left: ${this.guess}`
        } else if (this.status === 'failed') {
            return `Nice try! The word was "${this.words.join('')}".`
        } else {
            return 'Great work! You guessed the word.'
        }
    }
    get puzzle() {
        let puzz = ''

        this.words.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {
                puzz += letter
            } else {
                puzz += '*'
            }
        })
        return puzz
    }
    makeGuess(guess) {
        guess = guess.toLowerCase()
        const isUnique = !this.guessedLetters.includes(guess)
        const isBadGuess = !this.words.includes(guess)
    
        if (this.status !== 'playing') {
            return
        }
    
        if (isUnique) {
            this.guessedLetters = [...this.guessedLetters, guess]
        }
    
        if (isUnique && isBadGuess) {
            this.guess--
        }
    
        this.getStatus()
    }
}

export { Hangman as default }