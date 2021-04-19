// Day 15 Mission Part 1: Digits

// Build a function that can take any number as a parameter and then return the sum of all the digits within that number.
// For example if you pass in 412 the function should return 7. Note: You may NOT use any type of String to solve this problem

const sumOfDigits = (num) => {
  let numArray = [];
  while (num) {
    const digit = num % 10;
    numArray.push(digit);
    num = Math.floor(num / 10);
  }
  let sum = numArray.reduce((acc, cur) => {
    return acc + cur;
  });
  return sum;
};

// console.log(sumOfDigits(412));







// Day 15 Mission Part 2: Root
// Build a function that can take any number as a parameter and return the square root of that number

const squareRoot = (num) => {
    let answer = Math.sqrt(num)
    return answer
}

console.log(squareRoot(100));

// Day 15 Mission Part 3: Roots
// Same problem as in Part 2 but write function without using built-in functionality

const squareRoot2 = (num) => {
    for(let i = 1; i <= num; i++){
        if(num / i === i){
            return i
        }
    }  
}

console.log(squareRoot2(100))
