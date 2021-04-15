// Day 11 Exercise: String Sum

const stringSum = (str) => {
    let numbersArray = (str.match(/\d/g)).map(num => parseInt(num)).reduce((acc, cur) => { acc += cur; return acc}, 0)
    return console.log(numbersArray)
}

// stringSum('hgse3jkj9jkk4')








// Day 11 Exercise: Conditional Statements

const diffDouble = (num) => {
    let result = 0
    num > 27 ?  result = (num-27) * 2 : result = (27 - num)
    return console.log(result)
}

diffDouble(5) // returns 22
diffDouble(50)  // returns 46

const sumTriple = (num1, num2) => {
    let result = 0
    num1 === num2 ? result = (num1 + num2) * 3 : result = num1 + num2
    return console.log(result)
}

sumTriple(5, 15) // returns 20
sumTriple(20, 20) // returns 120

const checkForty = (num1, num2) => {
    let result;
    (num1 === 40 || num2 === 40 || num1 + num2 === 40) ? result = true : result = false
    return console.log(result)
}

checkForty(0, 20) // returns false
checkForty(15, 25) // returns true
checkForty(3, 40) // returns true
