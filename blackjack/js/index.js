// 1. Create two variables, firstCard and secondCard.
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards

let firstCard = Math.floor(Math.random() * (11 - 2 + 1)) + 2
let secondCard = Math.floor(Math.random() * (11 - 2 + 1)) + 2
let isInGame = true
console.log(firstCard)
console.log(secondCard)

// if less than or equal to 20 -> "Do you want to draw a new card? 🙂"
// else if exactly 21 -> "Wohoo! You've got Blackjack! 🥳"
// else -> "You're out of the game! 😭"

let sum = firstCard + secondCard + 5

if (sum < 21) {
    console.log("Do u want to draw a new card? ")
} else if (sum === 21) {
    console.log("Wohooo! You've got Blackjack!")
} else {
    console.log("You're out of the game")
    isInGame = false
}

console.log(isInGame)