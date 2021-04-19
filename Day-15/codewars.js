// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.


// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

const eyes = [":", ";"];
const nose = ["-", "~"];
const mouth = [")", "D"];

const countSmileys = (arr) => {
  let count = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].length === 3) {
      eyes.includes(arr[i][0]) &&
      nose.includes(arr[i][1]) &&
      mouth.includes(arr[i][2])
        ? count++
        : null;
    } else if (arr[i].length === 2) {
      eyes.includes(arr[i][0]) && mouth.includes(arr[i][1]) ? count++ : null;
    }
  }
  return count;
};

// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

// Convert String to Camelcase

function toCamelCase(str) {
  let answer = "";
  let strArray = [];
  if (str === answer) {
    return answer;
  }
  if (str.includes("-")) {
    strArray = str.split("-");
  } else if (str.includes("_")) {
    strArray = str.split("_");
  }
  answer += strArray[0];
  for (let i = 1; i < strArray.length; i++) {
    strArray[i] = strArray[i][0].toUpperCase() + strArray[i].substring(1);
    answer += strArray[i];
  }
  return answer;
}

//console.log(toCamelCase("the-stealth-warrior")) //gets converted to "theStealthWarrior"
// toCamelCase("The_Stealth_Warrior"); // gets converted to "TheStealthWarrior"

// Persistant Bugger

function persistence(num) {
  let answer = 10; // set to 10 so while loop will start running
  let tempAnswer = 1;
  let count = 0;
  let numArray = num.toString().split("");

  if (numArray.length <= 1) {
    return count;
  }

  while (answer >= 10) {
    tempAnswer = 1;
    for (let i = 0; i < numArray.length; i++) {
      tempAnswer *= numArray[i];
    }
    answer = tempAnswer;
    numArray = answer.toString().split("");
    count++;
  }

  return count;
}

// console.log(persistence(39)); // === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
// and 4 has only one digit

// console.log(persistence(999)); // === 4 // because 9*9*9 = 729, 7*2*9 = 126,
// 1*2*6 = 12, and finally 1*2 = 2

//persistence(4) === 0 // because 4 is already a one-digit number

//************************************************************** */
// The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata.
// What's the use of saying "Eureka"? Because this sum gives the same number.

// In effect: 89 = 8^1 + 9^2

// The next number in having this property is 135.

// See this property again: 135 = 1^1 + 3^2 + 5^3

// We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b]
// (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

// Let's see some cases:

// sumDigPow(1, 10) == [1, 2, 3, 4, 5, 6, 7, 8, 9]

// sumDigPow(1, 100) == [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]

function sumDigPow(a, b) {
  let numArray = [];
  let answer = 0;
  let answerArray = [];

  for (let i = a; i <= b; i++) {
    numArray = i.toString().split("");
    answer = 0;
    for (let j = 0; j < numArray.length; j++) {
      answer += numArray[j] ** (j + 1);
    }
    if (answer === i) {
      answerArray.push(i);
    }
  }

  return answerArray;
}

console.log(sumDigPow(90, 100))
