// Day 8: Advanced Mission

var colors = ['blue', 'red', 'green', 'yellow', 'black', 'white']

// Change each element in the array to be all caps with one line of code and w/o bracket notation

var capColors = colors.map(color => color.toUpperCase())
console.log(capColors);



var numbers = [-1, -2, 20, 60, 77]

// Using the 'every' function determine if each item in the array is greater than zero

var greaterThanZero = numbers.every((num) => {return num > 0})
console.log(greaterThanZero);