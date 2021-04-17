var rs = require("readline-sync");

let operation = "";
let result = 0;

const chooseOperation = () => {
  operation = rs.question("What operation would you like to perform? ");
  if (
    operation === "/" ||
    operation === "*" ||
    operation === "+" ||
    operation === "-"
  ) {
    console.log(`Great!!! Let's do some ${operation}`);
    calculate(operation);
  } else {
    console.log(`${operation} is not a valid operation`);
    chooseOperation();
  }
};

const calculate = (operation) => {
  firstNumber = rs.questionInt("Please enter the first number ");
  secondNumber = rs.questionInt("Please enter the second number ");
  operation === "/"
    ? (result = firstNumber / secondNumber)
    : operation === "*"
    ? (result = firstNumber * secondNumber)
    : operation === "-"
    ? (result = firstNumber - secondNumber)
    : operation === "+"
    ? (result = firstNumber + secondNumber)
    : null;
  console.log(
    `The result of ${firstNumber} ${operation} ${secondNumber} is ${result}`
  );
};

chooseOperation();
