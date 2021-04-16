// Day 12 Advanced Mission: Sum Range

// Create a function that takes an array of two numbers as a parameter
// Return the sum of those two numbers, plus all of the numbers in between

const sumRange = (arr) => {
  const [num1, num2] = arr;
  let sum = 0;
  if (num1 < num2) {
    for (i = num1; i <= num2; i++) {
      sum += i;
    }
  } else if (num1 > num2) {
    for (i = num1; i >= num2; i--) {
      sum += i;
    }
  } else sum = num1 + num2;
  return sum;
};

console.log(sumRange([4, 4]));
console.log(sumRange([1, 4]));
console.log(sumRange([4, 1]));
