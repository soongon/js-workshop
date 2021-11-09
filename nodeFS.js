// node.js 파일시스템 모듈(fs.js) 사용한 예제
const fs = require('fs');

// const file = fs.readFile('./index.html');
// console.log(file);

fs.readFile('./index.html', 'utf-8', function(err, data) {
  if (err != undefined) {
    console.log('에러발생.. ' + err);
  } else {
    // success..
    console.log(data);
  }
});

console.log('라인 수행..');
