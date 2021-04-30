// Day 26 Mission: Roman Numerals
const numeralPairs = [ 
    [1000, "M"], [900, "CM"], [500, "D"], [400, "CD"], [100, "C"], [90, "XC"], [50, "L"], [40, "XL"], [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"],
];

let answer = "";

const romanNumerals = (num) => {
  let answer = "";
  while (num > 0) {
    for (let i = 0; i < numeralPairs.length; i++) {
      if (num >= numeralPairs[i][0]) {
        answer += numeralPairs[i][1];
        num -= numeralPairs[i][0];
        break;
      }
    }
  }
  console.log(answer);
};

romanNumerals(2); // "II"
romanNumerals(3); // "III"
romanNumerals(44); //// "XLIV"
romanNumerals(649); // "DCXLIX"
romanNumerals(2014); // "MMXIV"
romanNumerals(3999); // "MMMCMXCIX"
