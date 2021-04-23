// Day 19 Mission: Fibonacci

// Return the sum of all odd Fibonacci numbers <= num
// If num = 10, the sum should be 10 b/c the odd Fibonacci numbers <= 10 are 1,1,3,5

const fibonacci = (num) => {
    let fibArray = [1, 1]
    let i = 2
    while(fibArray[fibArray.length-1] < num){
        let n = fibArray[i-1] + fibArray[i-2]
        fibArray.push(n)
        i++     
    }

    let sum = fibArray.filter(x => (x % 2 !== 0) && (x <= num)).reduce((a,c) =>{ return a + c})
    console.log(`The sum of all odd Fibonacci numbers <= ${num} is ${sum}`);
}

fibonacci(10)
fibonacci(100)