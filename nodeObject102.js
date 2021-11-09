// 객체의 프로퍼티 명이 일치할 때..

let lastName = 'kim';
let age = 40;

// const kim = {
//   name: name,
//   age: age,
// }

const kim = { lastName, age, };

console.log(kim);

// 메소드가 포함된 객체
lastName = 'lee';
age = 20;
// const lee = {
//   lastName: lastName,
//   age: age,
//   sayName: function() {
//     console.log('my name is ' + lastName);
//   }
// };

const lee = {
  lastName,
  age,
  sayName() {
    console.log('my name is ' + lastName);
  }
};
console.log(lee.sayName());

