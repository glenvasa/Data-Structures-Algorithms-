// Day 4 Advanced Mission

// Write code to find the factorials of the following numbers
// 6, 8, 101, 16, 49

// const factorial = (num) => {
//     const numArray = []
//     for ( let i = 1; i <= num; i++) {
//         numArray.push(i)
//     }
//     const answer = numArray.reduce(function(acc, cur) {
//         return acc *= cur
//     })
//    console.log(`The factorial of ${num} is ${answer}`)
//    return
// }

// factorial(6)
// factorial(8)
// factorial(101)
// factorial(16)
// factorial(49)

// Alt solution to find factorial of all 5 numbers with one fn call

const numArray = [6, 8, 101, 16, 49]
var result = 1

const factorial = (array) => {
    for (let i= 0; i < array.length; i++){
        for (let j=array[i]; j > 0; j--){
            result = result * j     
        } 
        console.log(`The factorial of ${array[i]} equals ${result}`)
        result = 1
    } 
}

factorial(numArray)
