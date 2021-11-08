// window.alert('Hello world');

console.log('Hello world 안녕하세요');

var myNumber = 15000;
var myString = 'hello world';
var myBool = true; // false
var myTest;


console.log(myNumber);
console.log(myTest);

/*
class Person {
  var name;
  var age;
}

var person = new Person()

person.name = 'kim soongon';
person.age = 40;

console.log(person.name);
*/

var person = {
  name: 'kim soongon',
  age: 40
};

console.log(person.name);
console.log(person['age']);

var article = {
  title: '자바스크립트는 즐거워..',
  content: '자바스크립트 어쩌구...',
  author: 'kim soongon',
  likes: 60,
  tags: ['programming', 'javascript'],
  replys: [
    {
      author: 'lee',
      content: 'sldkfjldksfjsl'
    },
    {
      author: 'park',
      content: 'slkdfjlsdkfjskl'
    }
  ]
};

console.log(article.likes);
article.author = '김순곤';
console.log(article.author);

article.writeDate = '2021-11-08';
console.log(article.writeDate);