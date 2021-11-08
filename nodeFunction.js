// 1. function expression (recommanded)
const addTwoNumbers = function (numOne=0, numTwo=0) {
  return numOne + numTwo;
};

// 2. function declaration
function subTwoNumbers(numOne=0, numTwo=0) {
  return numOne - numTwo;
}

console.log(addTwoNumbers(3, 5));
console.log(subTwoNumbers(5, 3));