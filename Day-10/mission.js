// Day 10 Mission Part 1: Reverse

var words = ["ant", "awkward", "car", "zebra"];

// Reverse this array using the built-in reverse function

var reverseWords = words.reverse();
// console.log(reverseWords);

// Reverse this array again, but this time using a loop and without any built-in functions

var reverseWordsLoop = (wordsArray) => {
  let reverseWordsLoopArray = [];
  let i = 0;
  while (i < wordsArray.length) {
    reverseWordsLoopArray.unshift(wordsArray[i]);
    i++;
  }
  return reverseWordsLoopArray;
};

// console.log(reverseWordsLoop(words))

// Day 10 Mission Part 2: LoopSum

var nums = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// Create a variable nammed evenTotal
// Write code that loops through the nums array, adds only the even numbers,
// and stores the final result in the evenTotal variable

var evenTotal = 0

const evenSum = (numsArray) => {
  for (let i = 0; i < numsArray.length; i++) {
    numsArray[i] % 2 === 0 ? evenTotal += numsArray[i] : null
  }
  console.log(evenTotal);
};

evenSum(nums);













// const evenSum = (numsArray) => {
//   var evensArray = [];
//   for (let i = 0; i < numsArray.length; i++) {
//     numsArray[i] % 2 === 0 ? evensArray.push(numsArray[i]) : null;
//   }
//   var evenTotal = evensArray.reduce((acc, cur) => {
//     return acc + cur;
//   }, 0);
//   return evenTotal;
// };

// console.log(evenSum(nums));
