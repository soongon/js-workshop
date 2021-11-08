var favoriteColors = [
  'red', 'blue', 'orange', 'pink', 'purple'
];

// functional loop
// 각 아이템을 출력
favoriteColors.forEach(function (item) {
  console.log(item.toUpperCase());
});

// 각 아이템을 대문자로 바뀌어서 새로운 배열에 저장
var favoriteColorsUpperCase = favoriteColors.map(function (item) {
  return item.toUpperCase();
});

console.log(favoriteColorsUpperCase);
