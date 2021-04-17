var rs = require("readline-sync");

// prompt name question
// prompt favorite hobby
// ask if there are more hobbies
// add hobbies to list
// store list of user's hobbies
// print user hobby list at the end

var hobbies = [];
var areYouSure = false
var moreHobbies = 0

function getHobbyCount() {
    moreHobbies = rs.questionInt("How many other hobbies do you have? ");  
}

function addHobbies(numHobbies) {
    var counter = 0;
    while (counter < moreHobbies) {
      var input = rs.prompt();
      hobbies.push(input);
      counter++;
  
      if (counter < numHobbies) {
        console.log(
          `---Awesome! ${input} is cool! What are(is) the other ${
            numHobbies - counter
          } hobby(ies)?`
        );
      } else {
        console.log(`I wish I could do ${hobbies} ... but I'm not even real`);
      }
    }

}

var userName = rs.question("What is your name? ");

var favHobby = rs.question(`${userName}, what is your favorite hobby? `);

hobbies.push(favHobby);
getHobbyCount()


if (moreHobbies > 0) {
  console.log('Cool, what are they?');
  addHobbies(moreHobbies)
} else {
  areYouSure = rs.keyInYN(
    `Are you sure that ${hobbies[0]} is all you like to do?`
  );
}

if (!areYouSure && hobbies.length <= 1) {
    console.log('Cool, what are they?');
    getHobbyCount()
    addHobbies(moreHobbies)
} else if (areYouSure){
    console.log(`${hobbies} is cool, good for you`);
}
