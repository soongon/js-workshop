const myArray = [10, 20, 30];

console.log(myArray);
console.log(...myArray);

const myObject = {
  a: 10,
  b: 20,
  c: 30,
};

console.log(myObject);
// console.log(...myObject); --> 작동이 안됨

// 배열에 데이터를 추가할 때 -> push
myArray.push(40);
console.log(myArray);

// myArray.push([50, 60, 70]);
// console.log(myArray);

myArray.push(...[50, 60, 70]);
console.log(myArray);