// Josephus Permutation

// [1,2,3,4,5,6,7] - initial sequence
// [1,2,4,5,6,7] => 3 is counted out and goes into the result [3]
// [1,2,4,5,7] => 6 is counted out and goes into the result [3,6]
// [1,4,5,7] => 2 is counted out and goes into the result [3,6,2]
// [1,4,5] => 7 is counted out and goes into the result [3,6,2,7]
// [1,4] => 5 is counted out and goes into the result [3,6,2,7,5]
// [4] => 1 is counted out and goes into the result [3,6,2,7,5,1]
// [] => 4 is counted out and goes into the result [3,6,2,7,5,1,4]

// josephus([1,2,3,4,5,6,7],3)==[3,6,2,7,5,1,4]
let result = [];
function josephus(items, k) {
  if (items.length === 1) {
    result.push(items[0]);
    return result;
  }
}

// josephus([1,2,3,4,5,6,7],3)

// FizzBuzz less code version

const fizzbuzz = (n) => {
  for (let i = 1; i <= n; i++) {
    let result = "";
    if (i % 3 === 0) {
      result += "fizz";
    }
    if (i % 5 === 0) {
      result += "buzz";
    }
    if (i % 5 !== 0 && i % 3 !== 0) {
      result = i;
    }
    console.log(result);
  }
};

// fizzbuzz(33);


// From YouTube mock Junior JS interview

// Create fn that takes a word(string) that is jumbled and compare it against a list of 
// correctly spelled words to see if there is a match when the word is unscrambled

let list = ['mouse', 'gggggggg', 'car', 'computer', 'record', 'ffffffff']

const unscramble = (str) => {
  let sortedword = str.split('').sort().join('')
  for(let j = 0; j < list.length; j++){
    let sortedListword = list[j].split('').sort().join('')
    if(sortedListword === sortedword){
      console.log(`When you unscramble ${str} you get ${list[j]}`);
    }   
  }
}

unscramble('trcpmoue')