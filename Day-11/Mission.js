// Day 11 Mission Part 1: Loop Refresher

// Create a function called 'numbers' that prints all even numbers between 2 and 100(inclusive)

const numbers = () => {
  for (let i = 2; i <= 100; i++) {
    i % 2 === 0 ? console.log(i) : null;
  }
};

numbers();

// Day 11 Mission Part 2: Enhance
// Get the operation to be 50% more efficient, meaning it should iterate no more than 50 times

const efficientNumbers = () => {
  for (let i = 2; i <= 100; i += 2) {
    console.log(i);
  }
};

efficientNumbers();
