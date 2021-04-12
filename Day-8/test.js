//  fizz buzz

// log all numbers from 1 to n, but log fizz if # is multiple of 3, buzz if multiple of 5
// fizzbuzz if multiple of 3 and 5.

const fizzBuzz = (n) => {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
};

// fizzBuzz(35);

str = 'Hello it is nice to meet you'

let matched = str.match(/[aeiou]/gi)
// console.log(matched.length);

// Fibonacci Challenge: find nth value in sequence where n is number inputted

const fib = (n) => {
    let fibArray = [0, 1];
    for(let i = 2; i < n; i++){
        fibArray[i] = (fibArray[i-1] + fibArray[i-2])
    }
    console.log(fibArray)
    console.log(fibArray[n-1])
}

// fib(40);


 