// Day 20 Mission: Pig Latin

// Create a function that takes an English word and returns its Pig Latin equivalent
// If a word begins with a consonant, take the first consonant or consonant group, move it to the end of the word, and add 'ay to it.
// If the word starts with a vowel, add 'way' at the end.

const vowels = ["a", "e", "i", "o", "u"];

const pigLatin = (word) => {
  let pigWord = "";
  let pigWordArray = [];
  let consonantGroup = false;
  let pigSuffix = "";
  

  for (let i = 0; i < vowels.length; i++) {
    if (word.toLowerCase().split("")[0] == vowels[i]) {
      pigWord = word.concat("way");
      return console.log(`The Pig Latin equivalent of ${word} is ${pigWord}`);
    }
  }

  pigWordArray = word.toLowerCase().split("");

  for (let i = 0; i < vowels.length; i++) {
    if (pigWordArray[1] === vowels[i]) {
      consonantGroup = false;
      break;
    } else {
      consonantGroup = true;
    }
  }

  if (consonantGroup) {
    pigSuffix = pigWordArray.slice(0, 2).join("").concat("ay");
    pigWordArray.splice(0, 2);
  }
  else {
    pigSuffix = pigWordArray[0].concat("ay");
    pigWordArray.shift();
  }

  pigWord = pigWordArray.join("").concat(pigSuffix);
  console.log(`The Pig Latin equivalent of ${word} is ${pigWord}`);
};

pigLatin("fire");
pigLatin("California");
pigLatin("Alaska");
pigLatin("break");
pigLatin('prick')
