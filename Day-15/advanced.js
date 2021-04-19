// Day 15 Advanced Misson: Anagram

// Create a function that takes in two strings as parameters and returns a boolean that indicates
// whether the first string is an anagram of the second string

const anagram = (str1, str2) => {
  str1 = str1.split("").sort().join("").trim();
  str2 = str2.split("").sort().join("").trim();

  return str1 === str2;
};

console.log(anagram("anagram", "nag a ram"));
console.log(anagram("battle", "tablet"));
console.log(anagram("battle", "tableta"));
console.log(anagram("battela", "tablet"));











// My first solution that works is below; I redid the solution above with sort which is much more efficient, less code

// const anagram = (str1, str2) => {
//     str1 = str1.split(' ').join('')
//     str2 = str2.split(' ').join('')
//   if (str1.length !== str2.length) {
//     return false;
//   }
//   for (let i = 0; i < str1.length; i++) {
//     if (str2.includes(str1[i])) {
//       str2 = str2.replace(str1[i], "");
//     }
//   }
//   return str2.length === 0 ? true : false;
// };
