numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function createPhoneNumber(numbers) {
  let phoneNumber = `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;
  return phoneNumber;
}

// console.log(createPhoneNumber(numArray)); // => returns "(123) 456-7890"

// Valid Braces

// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False   // My code works for all but this one b/c there are two sets of matching braces but not inside each other
// " =>  False

let bracesString = "([{}])";
let matches = { "(": ")", "[": "]", "{": "}" };

// function validBraces(braces) {
//   for (let i = 0; i < braces.length; i++) {
//     if (braces[i] in matches && bracesArray.includes(matches[braces[i]])) {
//       console.log(braces[i], matches[braces[i]]);
//       bracesArray = bracesArray.replace(braces[i], "");
//       bracesArray = bracesArray.replace(matches[braces[i]], "");
//       console.log(bracesArray);
//     }
//   }
//   return bracesArray.length === 0 ? true : false;
// }

// The code below works

function validBraces(str) {
  var prev = "";
  var i = 1;
  while (str.length != prev.length) {
    console.log(prev);
    console.log(str);
    prev = str;
    str = str.replace("()", "").replace("[]", "").replace("{}", "");
    console.log(prev);
    console.log(str);
    console.log(i);
  }
  return str.length === 0;
}

// console.log(validBraces(bracesString));

// Split Strings 6kyu

// should return ['ab', 'c_']
str = "abc";
// should return ['ab', 'cd', 'ef']
// str = 'abcdef'
strArray = [];

function solution(str) {
  if (str.length % 2 != 0) {
    str = str + "_";
  }
  while (str.length !== 0) {
    strArray.push(`${str[0]}${str[1]}`);
    str = str.replace(str[0], "").replace(str[1], "");
  }
  return strArray;
}

// console.log(solution(str))

// Array.diff

// if any values in array b are found in array a, remove them from array a and return the remaining values
// if a value in array b is found in array a remove all instances of that value in array a
// arrayDiff([1,2],[1]) == [2]
// arrayDiff([1,2,2,2,3],[2]) == [1,3]

let arr1 = [1, 2, 2, 2, 3];
let arr2 = [2];

function arrayDiff(a, b) {
  for (let i = 0; i < b.length; i++) {
    while (a.includes(b[i])) {
      let index = a.indexOf(b[i]);
      a.splice(index, 1);
    }
  }
  return a;
}

// Take a 10 Minute Walk
let path = ["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"];

// function isValidWalk(walk) {
//   let i = 0;
//   while (i < walk.length) {
//     if (walk[i] === walk[i + 1]) {
//       walk.splice(i, 1);
//     } else {
//       i++;
//     }
//   }
//   if (walk.length === 10){
//       return true
//   } else {
//       return false
//   }
// }

// isValidWalk(path);

//   Test.expect(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), 'should return true');
// Test.expect(!isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), 'should return false');
// Test.expect(!isValidWalk(['w']), 'should return false');
// Test.expect(!isValidWalk(['n','n','n','s','n','s','n','s','n','s']), 'should return false')


// has to return you to starting point


function isValidWalk(walk){
    let dx = 0;
    let dy = 0;

    for (let i = 0; i<walk.length; i++){
        switch (walk[i]){
            case 'n': dy++; break
            case 's': dy--; break
            case 'w': dx--; break
            case 'e': dx++; break
        }
    }
    return walk.length === 10 && dy === 0 && dx === 0
}

console.log(isValidWalk(['n','s','e','w','n','s','e','w','n','s']))