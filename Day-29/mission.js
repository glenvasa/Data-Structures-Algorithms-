// Day 29 Mission: Battleship

const rs = require("readline-sync");

let gameBoard = [
  ["A1", "A2", "A3"],
  ["B1", "B2", "B3"],
  ["C1", "C2", "C3"],
];
let placedShips = [];
let guesses = [];

const startGame = () => {
  rs.keyInPause("Let's play Battleship!...");
  placeShips();
};

const placeShips = () => {
  let a = randomNumber();
  let b = randomNumber();
  let c = randomNumber();
  let d = randomNumber();

  while (a === c && b === d) {
    c = randomNumber();
    d = randomNumber();
  }

  let ship1 = gameBoard[a][b];
  let ship2 = gameBoard[c][d];

  placedShips.push(ship1, ship2);
  console.log(placedShips);
  strike();
};

const randomNumber = () => {
  let num = Math.floor(Math.random() * gameBoard.length);
  return num;
};

const strike = () => {
  let attack = rs.question("Enter a location to strike (i.e. 'A2'): ");
  if (
    !gameBoard[0].includes(attack) &&
    !gameBoard[1].includes(attack) &&
    !gameBoard[2].includes(attack)
  ) {
    console.log(
      "This is a 3x3 gameboard. Please enter a coordinate that contains A, B, or C and 1, 2, or 3. MISS!!!"
    );
    strike();
  } else if (guesses.includes(attack)) {
    console.log(`You have already guessed ${attack}. MISS!!!`);
    strike();
  } else if (!placedShips.includes(attack)) {
    console.log("MISS!!!");
    guesses.push(attack);
    strike();
  } else if (placedShips.length === 2 && placedShips.includes(attack)) {
    console.log("HIT!!!. You sunk a battleship. 1 ship remaining");
    guesses.push(attack);
    let index = placedShips.indexOf(attack);
    index === 0 ? placedShips.shift(index) : placedShips.pop(index);
    strike();
  } else if (placedShips.length === 1 && placedShips.includes(attack)) {
    win();
  }
};

const win = () => {
  placedShips = [];
  guesses = [];
  let playAgain = rs.keyInYN(
    "HIT!!! You have destroyed all battleships! Do you want to play again?"
  );
  playAgain ? startGame() : console.log("Thanks for playing. Goodbye!");
};

startGame();
