// Day 3 
// Advanced Mission Part 1

str1 = "house";
str2 = "carpenter";


const findMatch = (str1, str2) => {
  let answer = [];
  for (let i = 0; i <= str1.length - 1; i++) {
    str2.includes(str1[i]) ? answer.push(true) : null;
  }
  answer.includes(true) ? console.log(true) : console.log(false);
};

findMatch(str1, str2);










// Day 3: Advanced Mission Part 2

str1 = 'house';
str2 = 'carpenter'

const findMatch2 = (str1, str2) => {
  let answer;
  for (let i = 0; i <= str1.length - 1; i++) {
    for (let j = 0; j <= str2.length - 1; j++) {
      if (str1[i] === str2[j]) {
        answer = true;
        return console.log(answer);
      } else {
        answer = false;
      }
    }
  }
  console.log(answer);
};

findMatch2(str1, str2);
