// Day 18 Mission Part 1: Add Digit

// Create a function that takes any number. Add one to each of its digits and return the number 
// 787 => 898; 998 => 10109

const addDigit = (num) => {
  let result = parseInt(num.toString().split("").map((n) => parseInt(n) + 1).join(""));
  return console.log(`addDigit: ${result}`);
};

addDigit(998);

// Part 2: Enhance

const enhance = (num) => {
  let numArray = [];
  let digit;
  while (num !== 0) {
    digit = num % 10;
    numArray.unshift(digit + 1);
    num = Math.floor(num / 10);
  }
  let answer = parseInt(numArray.join(""));
  return console.log(`enhance: ${answer}`);
};

enhance(998);
