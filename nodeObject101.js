const kim = {
  name: 'kim soongon',
  age: 40,
  hobby: ['reading', 'listening', 'jogging'],
};


const aFunction = function (person={}) {
  // ....
};

aFunction(kim);

aFunction({
  name: 'park',
  age: 30,
  hobby: ['fishing'],
});

const bFunction = function (name='', age=0, hobby=[]) {
  // ..
};

// 자바스크립트 가이드라인
// 함수의 파라미터는 2개 이하가 적당..
// 함수의 파라미터가 3개 이상은 많다고 봄..
// 3개 이상의 파라미터를 가지는 함수는 객체로 파라미터를 넘기는 것을 추천(강제..)