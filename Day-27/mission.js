// Day 27 Mission: The letter "K"

// Using node, parse the K.csv file into one or more data structures
// Create a function that takes a word that starts with "K" as a parameter
// Return definition of that word or print "Word not found" if word not found

const csv = require("csvtojson");
const rs = require("readline-sync");

const findWord = async () => {
  let word = "";
  let definitions = [];

  const k = await csv().fromFile("k.csv");
  const dictionary = k.map((item) => Object.values(item));

  word = rs.question("Please enter a word that starts with the letter 'K': ");
  word = word[0].toUpperCase() + word.slice(1);

  for (let i = 0; i < dictionary.length; i++) {
    if (dictionary[i][0].split(" ")[0] === word) {
      definitions.push(dictionary[i][0]);
    }
  }
    if(definitions.length === 0){
        console.log(`Sorry.... "${word}" is not found in my dictionary`);
    } else {
        console.log(`Here are the definitions I found for the word "${word}":`)
        console.log(definitions);
    }
  findAnother();
};

const findAnother = () => {
  let newWord = rs.keyInYN("Would you like to search for a new word?");
  if (newWord) {
    findWord();
  } else {
    console.log("No problem. Have a great day.");
  }
};

findWord();

