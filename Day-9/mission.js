// Day 9: Mission Part 1: Sum



var odds = [5, 8, 14, 13, 29, 98]
var evens = [11, 6, 2, 87, 43, 22, 104]

// Use the reduce function on the odds array to only store odd numbers

var onlyOdds = odds.reduce((acc, cur) => { cur % 2 !== 0 ? acc.push(cur) : null; return acc}, [])
// console.log(onlyOdds)


// Use the reduce function on the evens array to only store even numbers
var onlyEvens = evens.reduce((acc, cur) => { cur % 2 === 0 ? acc.push(cur) : null; return acc}, [])
// console.log(onlyEvens);


// Add the numbers of both arrays and store the result in a variable and then print it
var sumOfArrays = odds.concat(evens).reduce((acc,cur) => { return acc + cur})
// console.log(sumOfArrays);













// Day 9: Mission Part 2: Filter Map Reduce

var states = ['alaska', 'alabama', 'arkansas', 'missouri', 'texas', 'nevada', 'california']

// Use 'filter' to only select states that start with "a"

var aStates = states.filter((state) => state[0] === 'a')
console.log(aStates);

// Using method chaining use 'map' and reduce each state to 3 characters (i.e. nevada => nev)

var shortNames = states.filter((state) => state[0] === 'a').map(s => s.slice(0, 3))
console.log(shortNames);

// Using method chaining use 'reduce' to add up the count of characters from the remaining words

var numChars = states.filter((state) => state[0] === 'a').map(s => s.slice(0,3)).reduce((acc, cur) => { return acc + cur.length }, 0)
console.log(numChars)


// Exercise: Shopping List
const food = ['fish', 'eggs', 'milk', 'cheese', 'beef']

const inList = (item) => {
    return food.includes(item)
}
console.log(inList('milk'), inList('bacon'))
