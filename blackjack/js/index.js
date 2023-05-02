let firstCard = getRandomNum();
let secondCard = getRandomNum();
let cards = [firstCard, secondCard];
let titleMsg = document.getElementById("title-msg");
let cardMsg = document.getElementById("card-msg");
let sumMsg = document.getElementById("sum-msg");
let sum = firstCard + secondCard;
let endGame = false;
let hasBlackjack = false;

// if less than or equal to 20 -> "Do you want to draw a new card? 🙂"
// else if exactly 21 -> "Wohoo! You've got Blackjack! 🥳"
// else -> "You're out of the game! 😭"

function start() {
  if (endGame != true) {
    cardMsg.textContent = "Cards: ";
    for (let i = 0; i <= cards.length - 1; i++) {
      cardMsg.textContent += cards[i] + " ";
    }
    sumMsg.textContent = "Sum: " + sum;
    if (sum < 21) {
      titleMsg.textContent = "Do u want to draw a new card? ";
    } else if (sum === 21) {
      titleMsg.textContent = "Wohooo! You've got Blackjack!";
      endGame = true;
      hasBlackjack = true
    } else {
      titleMsg.textContent = "You're out of the game";
      endGame = true;
    }
  } else {
    titleMsg.textContent = "Wanna play a round?";
    cardMsg.textContent = "Cards: ";
    sumMsg.textContent = "Sum: ";
    endGame = false;
    firstCard = getRandomNum();
    secondCard = getRandomNum();
    sum = firstCard + secondCard;
    cards = [firstCard, secondCard];
  }
}

function pull() {
  if (endGame != true && hasBlackjack != true) {
    let newNumber = getRandomNum();
    sum += newNumber;
    cards.push(newNumber);
    start();
  }
}

function getRandomNum() {
  let number = Math.floor(Math.random() * 13) + 1;
  return number;
}
