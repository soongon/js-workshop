// 구조분해.. 컬렉션의 아이템을 각각 변수로 확보하는 단축 표현방법
const kim = {
  lastName: 'kim',
  age: 40,
}
const hobby = ['golf', 'fishing', 'go'];
// 기존..
const lastName = kim.lastName;
const age = kim.age;

const h1 = hobby[0];
const h2 = hobby[1];
const h3 = hobby[2];
// ES2015 구조분해 등장..
const {lastName, age} = kim;
const [h1, h2, h3] = hobby;
