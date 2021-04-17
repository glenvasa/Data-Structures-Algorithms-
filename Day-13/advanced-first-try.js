var rs = require("readline-sync");

let operationArray = [];
let num1 = 0;
let num2 = 0;
let operation = "";
let result = 0;

const chooseOperation = () => {
  wholeOperation = rs.question(
    "Please enter the entire operation you would like to perform (i.e. '6 / 6' or '5 * 3'). Make sure to enter a space between each character: "
  );

  
  operationArray = wholeOperation.split(" ");
  if (operationArray.length !== 3) {
    console.log("You did not enter the entire operation correctly");
    chooseOperation();
  }

  if (
   Object.is(Math.abs(operationArray[0]), NaN) === true ||  Object.is(Math.abs(operationArray[2]), NaN) === true
  ) {
    console.log("You did not enter two valid numbers in your operation");
    chooseOperation();
  }

  if (
    operationArray[1] === "/" ||
    operationArray[1] === "*" ||
    operationArray[1] === "+" ||
    operationArray[1] === "-"
  ) {
    operation = operationArray[1];
    num1 = operationArray[0];
    num2 = operationArray[2];
    calculate(operation, num1, num2);
  } else {
    console.log(
      `${operationArray[1]} is not a valid operator. Please use '/', '*', '-', or '+' as the operator in your operation`
    );
    chooseOperation();
  }
};

const calculate = (operation, num1, num2) => {
  if (operation === "/") {
    result = `${Math.floor(num1 / num2)} remainder ${num1 % num2} `;
  } else if (operation === "*") {
    result = num1 * num2;
  } else if (operation === "-") {
    result = num1 - num2;
  } else {
    result = parseInt(num1) + parseInt(num2);
  }

  console.log(`The result of ${num1} ${operation} ${num2} is ${result}`);
};

chooseOperation();
