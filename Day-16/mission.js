// Day 16 Mission Part 1: The Longest String

// Write a function that accepts and array of strings. Return the longest string.
let strArray = ['Joe', 'hello', 'Card']

const longestString = (arr) => {
    let newArray = arr.sort((a,b) => {return b.length - a.length })
    return newArray[0]
    
}

console.log(longestString(strArray))

// Part 2: Junk

// Write a function that takes a string as a parameter.
// If the string contains certain symbols {}[]!<>() replace each with a space and return the string

// str.replaceAll works in the browser but not in node;


let str = 'r(em)ove t{he j}!unk} f<ro]m) t[his st>ri]ng'

const junk = (str) => {
    str = str.replace(/[()[\]!<>{}]/g, ' ');
  return str
}

console.log(junk(str));

