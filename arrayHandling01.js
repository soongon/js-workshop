var favoriteColors = [
  'red', 'blue', 'orange', 'purple', 'green'
];

// array 순회 by for loop
for (var i = 0; i < favoriteColors.length; i++) {
  console.log(favoriteColors[i]);
}

var favoriteColorsUpperCase = [];

for (var i = 0; i < favoriteColors.length; i++) {
  favoriteColorsUpperCase.push(
    favoriteColors[i].toUpperCase()
  );
}

console.log(favoriteColorsUpperCase);

// =====================================================
// ES6에서 새롭게 소개된 for 문
// =====================================================

// for ~ of loop
for (var color of favoriteColors) {
  console.log(color);
}

var favoriteColorsUpperCaseES6 = [];

for (var color of favoriteColors) {
  favoriteColorsUpperCaseES6.push(color.toUpperCase());
}
console.log(favoriteColorsUpperCaseES6);
