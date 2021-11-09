// 구조 분해 사례
const kim = {
  lastName: 'kim',
  age: 40,
  hobby: ['golf', 'fishing', 'go'],
};

const printPerson = function (person = {}) {
  const {lastName, age, hobby} = person;
  const [h1, h2, h3] = hobby;
  console.log(
    `${lastName} 님의 나이는 ${age} 이고 
    취미는 ${h1}, ${h2}, ${h3} 입니다.`);
};
printPerson(kim);