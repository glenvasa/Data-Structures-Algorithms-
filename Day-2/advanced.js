// Day 2

// Advanced Mission

// Part 1

const str1 = "Good Morning";
const str2 = str1.split("").reverse().join("")

console.log(str2)


// Part 2

const reverseString = (string) => {
    let reversedString= "";
    for (let i = string.length - 1; i >= 0; i--){
        reversedString += string[i]   
} 
return reversedString;
}

console.log(reverseString(str1));

