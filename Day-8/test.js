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


function solution(number){
    let numArray = []
    for(let i = 1; i < number; i++){
      if(i % 3 === 0 || i % 5 === 0){
        console.log(i)
        numArray.push(i)
      }
    }
    let sum = numArray.reduce((a,c) => {
       return a + c
    }, 0) 
    return sum  
  }

//   console.log(solution(56))



function likes(names) {
    let statement = ''
    names.length === 0
    ? statement = 'no one likes this'
    : names.length === 1
    ? statement = `${names[0]} likes this`
    : names.length === 2
    ? statement = `${names[0]} and ${names[1]} like this`
    : names.length === 3
    ? statement = `${names[0]}, ${names[1]} and ${names[2]} like this`
    : statement = `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    return statement
  }

// likes(['alice', 'fred', 'jeff', 'jim', 'steve', 'john', 'cal'])


// 153 is narcissistic b/c 3 digit number and value = sum of each digit raised to power of 3

function narcissistic(value) {
    let sum = 0;
    let valueArray = Array.from(value.toString()).map(Number)
    console.log(valueArray.length);
    valueArray.forEach((val) => {
        sum += (val ** (valueArray.length))
    })
    console.log(value, sum);
    if (value === sum){
        return true
    } else {
        return false
    }
  }

//   console.log(narcissistic(1652))

// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

function filter_list(l) {
    
    let newArray = l.filter((item) => {
        return typeof(item) !== 'string'
    })
    console.log(newArray);
  }

//   filter_list([1,'a','b',0,15])



// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

function order(words){
    return words.split(' ').sort(function(a,b){
        return a.match(/\d/) - b.match(/\d/)
    }).join(' ')
  }

  console.log(order('is2 Thi1s T4est 3a'))