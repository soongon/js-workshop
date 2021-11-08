// vanilla javascript.. 개발
// 현재 이렇게 개발이 되지는 않는다!!

var myDivTag = document.getElementById('myDiv');
console.log(myDivTag.textContent);

// myDivTag.textContent = '동적으로 컨텐츠를 변경하였습니다.';

var myButton = document.getElementById('myButton');
myButton.addEventListener('click', function () {
  document.getElementById('myDiv').textContent =
    "버튼을 클릭하였습니다.";
});

// 라이브러리를 사용하여 개발

// 자바스크립트의 개발 방향
// 웹 화면 개발 (웹 개발..) -> 모바일 웹, 하이브리드 앱, 데스크탑 웹
// --> 바닐라가 아닌 라이브러리를 사용(반드시)

// 라이브러리 사용의 역사..
// prototype.js -> jQuery.js(2010년 정도 까지..) 
// jQuery의 쇠약 계기 : 웹 표준의 등장, 웹 개발의 복잡도 증대..
// 라이브러리에서 프레임워크 수준의 고수준 라이브러리의 필요성 요구
// jQuery -> angular.js(앵귤러1) -> react, Vue.js, Angular