// Day 4 Advanced Mission

// Write code to find the factorials of the following numbers
// 6, 8, 101, 16, 49

const factorial = (num) => {
    const numArray = []
    for ( let i = 1; i <= num; i++) {
        numArray.push(i)
    }
    const answer = numArray.reduce(function(acc, cur) {
        return acc *= cur
    })
   console.log(`The factorial of ${num} is ${answer}`)
   return
}

factorial(6)
factorial(8)
factorial(101)
factorial(16)
factorial(49)


