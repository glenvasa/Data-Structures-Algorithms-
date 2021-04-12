//  Day 8 Mission: Part 1: Fruity

var fruit = ["apple", "banana", "orange", "strawberry"];

// Remove 'orange' from the array
fruit.splice(2, 1);
console.log(fruit);

// Then remove the last item from the array
fruit.pop();
console.log(fruit);

// Then insert 'pear' at the beginning of the array
fruit.unshift("pear");
console.log(fruit);

// Then remove all elements from the array
fruit.splice(0);
console.log(fruit);







// Day 8 Mission: Part 2: Colorful

var colors = ["blue", "red", "green", "yellow", "black", "white"];
var moreColors = ["purple", "magenta", "pink"];

// Remove red, green, and yellow using the 'splice' command

colors.splice(1, 3);
console.log(colors);

// Add the entire moreColors array to the colors array using a single statement
var allColors = colors.concat(moreColors);
console.log(allColors);
