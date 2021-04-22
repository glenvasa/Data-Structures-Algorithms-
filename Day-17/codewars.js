// Greed is Good

// Calculate score for 5 6-sided dice rolls

// Three 1's => 1000 points
// Three 6's =>  600 points
// Three 5's =>  500 points
// Three 4's =>  400 points
// Three 3's =>  300 points
// Three 2's =>  200 points
// One   1   =>  100 points
// One   5   =>   50 point

function score(dice) {
  let onesArray = [];
  let twosArray = [];
  let threesArray = [];
  let foursArray = [];
  let fivesArray = [];
  let sixesArray = [];
  let score = 0;
  for (let i = 0; i < dice.length; i++) {
    dice[i] === 1
      ? onesArray.push(dice[i])
      : dice[i] === 2
      ? twosArray.push(dice[i])
      : dice[i] === 3
      ? threesArray.push(dice[i])
      : dice[i] === 4
      ? foursArray.push(dice[i])
      : dice[i] === 5
      ? fivesArray.push(dice[i])
      : dice[i] === 6
      ? sixesArray.push(dice[i])
      : null;
  }
  if (onesArray.length === 1) {
    score += 100;
  }
  if (onesArray.length === 2) {
    score += 200;
  }
  if (onesArray.length === 3) {
    score += 1000;
  }
  if (onesArray.length === 4) {
    score += 1100;
  }
  if (onesArray.length === 5) {
    score += 1200;
  }

  if (twosArray.length === 3) {
    score += 200;
  }
  if (threesArray.length === 3) {
    score += 300;
  }
  if (foursArray.length === 3) {
    score += 400;
  }

  if (fivesArray.length === 1) {
    score += 50;
  }
  if (fivesArray.length === 2) {
    score += 100;
  }
  if (fivesArray.length === 3) {
    score += 500;
  }
  if (fivesArray.length === 4) {
    score += 550;
  }
  if (fivesArray.length === 5) {
    score += 600;
  }

  if (sixesArray.length === 3) {
    score += 600;
  }
  return score;
}

// console.log(score([1,1,1,3,1]));

//   Throw       Score
//  ---------   ------------------
//  5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
//  1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
//  2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)


