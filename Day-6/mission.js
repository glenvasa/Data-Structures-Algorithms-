// Day 6 Mission: Part 1

var status;
var emergencyVehicle;
var isInIntersection;
var rulesOfTheRoad;

const driveOrStop = (status, emergencyVehicle, isInIntersection) => {
  if (isInIntersection === true) {
    rulesOfTheRoad = "You can drive. Do not stop in intersection.";
  } else if (emergencyVehicle === true) {
    rulesOfTheRoad = "Do not drive. Emergency vehicle approaching.";
  } else if (status === "green") {
    rulesOfTheRoad = "You can drive.";
  } else if (status === "yellow") {
    rulesOfTheRoad = "Prepare to stop.";
  } else if (status === "red") {
    rulesOfTheRoad = "Do not drive. Red light.";
  } else {
    rulesOfTheRoad = "The lights aren't working. Proceed with caution!";
  }
  return rulesOfTheRoad;
};

console.log(driveOrStop("yellow", true, false));

// Day 6 Mission: Part 2

var grades = 75;

switch (true) {
  case grades > 90:
    console.log("AA");
    break;
  case grades > 80:
    console.log("AB");
    break;
  case grades > 70:
    console.log("BB");
    break;
  case grades > 60:
    console.log("BC");
    break;
  case grades > 50:
    console.log("CC");
    break;
  case grades > 40:
    console.log("CD");
    break;
  case grades > 30:
    console.log("DD");
    break;
  default:
    console.log("FF");
}

//  Initial attempt; doesn't work yet

// var status = "red";
// var emergencyVehicle = false;
// var isInIntersection = false;

// switch ((status, emergencyVehicle, isInIntersection)) {
//   case (isInIntersection = true):
//     console.log("You can drive");
//     break;
//   case (isInIntersection = false):
//     null;
//   case (emergencyVehicle = true):
//     console.log("Do not drive emergency");
//     break;
//   case (emergencyVehicle = false):
//     null;
//   case "green":
//     console.log("You can drive");
//     break;
//   case "yellow":
//     console.log("Prepare to stop");
//     break;
//   case "red":
//     console.log("Do not drive red light");
//     break;
//   default:
//     console.log("The lights aren't working. Be careful!");
// }
