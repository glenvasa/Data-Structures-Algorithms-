var rs = require("readline-sync");

const chooseOperation = () => {
  wholeOperation = rs.question(
    "Please enter the entire operation you would like to perform (i.e. '6 / 6' or '5 * 3'). Make sure to enter a space between each character: "
  );
  checkValidEntry(wholeOperation);
};

const checkValidEntry = (wholeOperation) => {
  let operationArray = wholeOperation.split(" ");

  if (operationArray.length !== 3) {
    console.log("You did not enter the entire operation correctly");
    chooseOperation();
  } else {
    checkOperands(operationArray);
  }

  function checkOperands(operationArray) {
    if (
      Object.is(Math.abs(operationArray[0]), NaN) === true ||
      Object.is(Math.abs(operationArray[2]), NaN) === true
    ) {
      console.log("You did not enter two valid numbers in your operation");
      chooseOperation();
    } else {
      checkOperator(operationArray);
    }
  };

  function checkOperator(operationArray) {
    if (
      operationArray[1] === "/" ||
      operationArray[1] === "*" ||
      operationArray[1] === "+" ||
      operationArray[1] === "-"
    ) {
      let operator = operationArray[1];
      let num1 = operationArray[0];
      let num2 = operationArray[2];
      calculate(operator, num1, num2);
    } else {
      console.log(
        `${operationArray[1]} is not a valid operator. Please use '/', '*', '-', or '+' as the operator in your operation`
      );
      chooseOperation();
    }
  };
};

const calculate = (operator, num1, num2) => {
  let result = 0
  if (operator === "/") {
    result = `${Math.floor(num1 / num2)} remainder ${num1 % num2} `;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else {
    result = parseInt(num1) + parseInt(num2);
  }

  console.log(`The result of ${num1} ${operator} ${num2} is ${result}`);
};

chooseOperation();
