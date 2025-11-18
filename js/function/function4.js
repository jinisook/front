// 화살표 함수
const mult = (a, b) => x * y;
const mult2 = (a, b) => {
  return x * y;
};

const planet = new Array("수성", "금성", "지구", "화성", "목성", "토성", "천왕성");
// planet.forEach((element, idx) => {
//   console.log(`${idx} : ${element}`);
// });
// 중괄호 뻰 버전
planet.forEach((element, idx) => console.log(`${idx} : ${element}`));

const array3 = [12, 6, 9, 1, 10, 7];
console.log(array3.find((item) => item > 5));
console.log(array3.findIndex((item) => item > 5));

// const showMsg = function () {
//   console.log("안녕하세요");
// };
// showMsg();
// function을 => 로 대체

const showMsg = () => {
  console.log("안녕하세요");
};
showMsg();

const showDialog = (greeting, name) => {
  console.log(`${greeting}!! ${name}`);
};
showDialog("Hello", "jini");

const fruits = ["사과", "망고", "바나나", "수박", "자두", "포도"];
const elements = [];

fruits.forEach((item) => elements.push(item)); // (... )이랑 같은 개념
console.log(elements);

// map(), filter()
const arr1 = [1, 4, 9, 16];
// 각 요소에 *2를 한 결과를 저장한 새로운 배열 생성
const arr2 = []; // 비어있는 배열 생성
arr1.forEach((item) => arr2.push(item * 2));
console.log(arr2);
// 위의 내용을 해주는 함수 : map()
const arr3 = arr1.map((item) => item * 2);
console.log(arr3);

// filter()
const arr4 = arr1.filter((i) => i > 5);
console.log(arr4);
