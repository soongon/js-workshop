console.log('자바스크립트 함수 테스트');

// 함수 만드는 방법 두 가지
// 1. 권장되는 방식 -> function expression
var myFunc = function () {
  console.log('함수 표현식으로 작성된 함수');
};

var result = myFunc();
console.log(result);

var result2 = myFunc2();
console.log(result2)

// 2. function declaration
function myFunc2() {
  console.log('함수 선언식으로 작성된 함수.. 호이스팅 됨');
}

// 함수 파라미터 사용법
var addTwoNumber = function(numOne=0, numTwo=0) {
  return numOne + numTwo;
};

var result3 = addTwoNumber(3, 5);
console.log(result3);
