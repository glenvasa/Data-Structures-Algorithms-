// "Imagine I have between m and n Zloty..." (or did he say Quetzal? I can't remember!)
// "If I were to buy 9 cars costing c each, I'd only have 1 Zloty (or was it Meticals?) left."
// "And if I were to buy 7 boats at b each, I'd only have 2 Ringglets (or was it Zloty?) left."
// Could you tell me in each possible case:

// how much money f he could possibly have ?
// the cost c of a car?
// the cost b of a boat?

const howmuch = (m, n) => {
  let c;
  let b;
  let start;
  let end;
  let answer = [];
  if (m < n) {
    start = m;
    end = n;
  } else {
    start = n;
    end = m;
  }

  for (let i = start; i <= end; i++) {
    c = (i - 1) / 9;
    b = (i - 2) / 7;
    if (c - Math.floor(c) === 0 && b - Math.floor(b) === 0) {
      answer.push([`M: ${i}`, `B: ${b}`, `C: ${c}`]);
    }
  }
  return answer;
};

//console.log(howmuch(1, 100))     // => [["M: 37", "B: 5", "C: 4"], ["M: 100", "B: 14", "C: 11"]]
//console.log(howmuch(1000, 1100)) // => [["M: 1045", "B: 149", "C: 116"]]
//console.log(howmuch(10000, 9950)) //=> [["M: 9991", "B: 1427", "C: 1110"]]
//console.log(howmuch(0, 200))    //  => [["M: 37", "B: 5", "C: 4"], ["M: 100", "B: 14", "C: 11"], ["M: 163", "B: 23", "C: 18"]]

// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

function cleanString(s) {
  let sArray = s.split("");
  if (s === "") {
    return "";
  }
  while (sArray.includes("#")) {
    sArray.splice(sArray.indexOf("#") - 1, 2);
  }

  return sArray.join("");
}

// Examples
//cleanString("abc#d##c"); //      ==>  "ac"
//cleanString("abc##d######"); //  ==>  ""
//cleanString("#######"); //       ==>  ""
//cleanString(""); //  ==>  ""
// console.log(cleanString("dfdfffffkkk"));

// Ranking NBA Teams

// A team name is composed of one, two or more words built with letters or digits: Atlanta Hawks, Philadelphia 76ers...

// Given a string of results and the name of a team (parameter : to_find) your function nba_cup (or nbaCup or ...) will return as a string

// the name of the team followed by : and
// the number of matches won by the team
// the number of draws
// the number of matches lost by the team
// the total number of points scored by the team
// the total number of points conceded by the team
// and finally a kind of marks in our ranking system

// a team marks 3 if it is a win
// a team marks 1 if it is a draw
// a team marks 0 if it is a loss

//let r = "Los Angeles Clippers 104 Dallas Mavericks 88,New York Knicks 101 Atlanta Hawks 112,Los Angeles Lakers 89 Boston Celtics 122,Indiana Pacers 103 Memphis Grizzlies 112,Los Angeles Clippers 100 Boston Celtics 120";
var r1 = "Los Angeles Clippers 104 Dallas Mavericks 88,New York Knicks 101 Atlanta Hawks 112,Indiana Pacers 103 Memphis Grizzlies 112,"
    + "Los Angeles Lakers 111 Minnesota Timberwolves 112,Phoenix Suns 95 Dallas Mavericks 111,Portland Trail Blazers 112 New Orleans Pelicans 94,"
    + "Sacramento Kings 104 Los Angeles Clippers 111,Houston Rockets 85 Denver Nuggets 105,Memphis Grizzlies 76 Cleveland Cavaliers 106,"
    + "Milwaukee Bucks 97 New York Knicks 122,Oklahoma City Thunder 112 San Antonio Spurs 106,Boston Celtics 112 Philadelphia 76ers 95,"
    + "Brooklyn Nets 100 Chicago Bulls 115,Detroit Pistons 92 Utah Jazz 87,Miami Heat 104 Charlotte Hornets 94,"
    + "Toronto Raptors 106 Indiana Pacers 99,Orlando Magic 87 Washington Wizards 88,Golden State Warriors 111 New Orleans Pelicans 95,"
    + "Atlanta Hawks 94 Detroit Pistons 106,Chicago Bulls 97 Cleveland Cavaliers 95,";
var r2 = "San Antonio Spurs 111 Houston Rockets 86,Chicago Bulls 103 Dallas Mavericks 102,Minnesota Timberwolves 112 Milwaukee Bucks 108,"  
    + "New Orleans Pelicans 93 Miami Heat 90,Boston Celtics 81 Philadelphia 76ers 65,Detroit Pistons 115 Atlanta Hawks 87,"  
    + "Toronto Raptors 92 Washington Wizards 82,Orlando Magic 86 Memphis Grizzlies 76,Los Angeles Clippers 115 Portland Trail Blazers 109,"  
    + "Los Angeles Lakers 97 Golden State Warriors 136,Utah Jazz 98 Denver Nuggets 78,Boston Celtics 99 New York Knicks 85,"  
    + "Indiana Pacers 98 Charlotte Hornets 86,Dallas Mavericks 87 Phoenix Suns 99,Atlanta Hawks 81 Memphis Grizzlies 82,"  
    + "Miami Heat 110 Washington Wizards 105,Detroit Pistons 94 Charlotte Hornets 99,Orlando Magic 110 New Orleans Pelicans 107,"  
    + "Los Angeles Clippers 130 Golden State Warriors 95,Utah Jazz 102 Oklahoma City Thunder 113,San Antonio Spurs 84 Phoenix Suns 104,"  
    + "Chicago Bulls 103 Indiana Pacers 94,Milwaukee Bucks 106 Minnesota Timberwolves 88,Los Angeles Lakers 104 Portland Trail Blazers 102,"  
    + "Houston Rockets 120 New Orleans Pelicans 100,Boston Celtics 111 Brooklyn Nets 105,Charlotte Hornets 94 Chicago Bulls 86,Cleveland Cavaliers 103 Dallas Mavericks 97";

let r = "Boston Celtics 120 Philadelphia 76ers 90"

function nba_cup(resultSheet, toFind) {
  let teamsArray = [];
  let resultsArray = resultSheet.split(",");
//   console.log(resultsArray);
  if (toFind === "") {
    return console.log(toFind);
  }

  for (let i = 0; i < resultsArray.length; i++) {
    let score = /(\d+)/g;

    // console.log(resultsArray);

    let scoreArray = resultsArray[i].match(score);
    // console.log(scoreArray);
    let score1 = scoreArray[0];
    let score2 = scoreArray[1];
    let firstScoreStart = resultsArray[i].indexOf(scoreArray[0]);
    let secondScoreStart = resultsArray[i].indexOf(scoreArray[1]);
    let team1 = resultsArray[i].slice(0, firstScoreStart - 1);
    let team2 = resultsArray[i].slice(
      firstScoreStart + (score1.length + 1),
      secondScoreStart - 1
    );
    score1 = Number(score1);
    score2 = Number(score2);
    // console.log(team1, score1, team2, score2);
    if (score1 - Math.floor(score1) != 0 || score1 - Math.floor(score1) != 0) {
      return console.log(`Error(float number):${resultsArray[i]}`);
    }

    team1 = {
      Name: team1,
      W: 0,
      D: 0,
      L: 0,
      Scored: 0,
      Conceded: 0,
      Points: 0,
    };
    team2 = {
      Name: team2,
      W: 0,
      D: 0,
      L: 0,
      Scored: 0,
      Conceded: 0,
      Points: 0,
    };

    let findTeam1 = teamsArray.find((x) => x.Name === team1.Name);
    // console.log(findTeam1);
    let findTeam2 = teamsArray.find((x) => x.Name === team2.Name);
    // console.log(findTeam2);

    if (!findTeam1) {
      teamsArray.push(team1);
    }
    if (!findTeam2) {
      teamsArray.push(team2);
    }

    if (findTeam1) {
      team1 = findTeam1;
    }
    if (findTeam2) {
      team2 = findTeam2;
    }

    if (score1 > score2) {
      team1.W += 1;
      team1.Points += 3;
      team2.L += 1;
    } else if (score1 === score2) {
      team1.D += 1;
      team2.D += 1;
      team1.Points += 1;
      team1.Points += 1;
    } else {
      team2.W += 1;
      team2.Points += 3;
      team1.L += 1;
    }
    team1.Scored += score1;
    team1.Conceded += score2;
    team2.Scored += score2;
    team2.Conceded += score1;

    
  }
console.log(teamsArray);
  let searchTeam = teamsArray.find((team) => team.Name === toFind);
  if (searchTeam) {
    return console.log(
      `${searchTeam.Name}:W=${searchTeam.W};D=${searchTeam.D};L=${searchTeam.L};Scored=${searchTeam.Scored};Conceded=${searchTeam.Conceded};Points=${searchTeam.Points}`
    );
  } else {
    return console.log(`${toFind}:This team didn't play!`);
  }
}

//nba_cup(r, "Los Angeles Clippers") //-> "Los Angeles Clippers:W=1;D=0;L=1;Scored=204;Conceded=208;Points=3"
nba_cup(r, "Boston Celtics") //-> "Boston Celtics:W=1;D=0;L=0;Scored=120;Conceded=100;Points=3"
//nba_cup(r, "")// -> ""
//nba_cup(r, "Boston Celt"); //-> "Boston Celt:This team didn't play!"
//r0="New York Knicks 101.12 Atlanta Hawks 112"
//nba_cup(r0, "Atlanta Hawks") //-> "Error(float number):New York Knicks 101.12 Atlanta Hawks 112"
