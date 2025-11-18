// 함수 표현식

const showMsg = function () {
  console.log("안녕하세요");
};
showMsg();

const multiply = function (a, b) {
  return a * b;
};
const result = multiply(5, 3);
console.log(result);

const showDialog = function (greeting, name) {
  console.log(`${greeting}!! ${name}`);
};
showDialog("Hello", "jini");

// a() 이름 부여만 가능, 내부 호출만 가능, 외부 호출 불가능 - 필요할 때만 사용
const showDialog1 = function a(greeting, name) {
  console.log(`${greeting}!! ${name}`);
};
// a(); ReferenceError: a is not defined
showDialog("Hello", "jini");

// function () vs 함수표현식
// 함수 선언하기 전 호출 : hoisting
console.log(multiply2(6, 8));

function multiply2(x, y) {
  return x * y;
}

console.log(z);
var z = 5; // undefined (에러X) -> hoisting

// 함수표현식은 hoisting 안됨
// console.log(multiply3(8, 9)); // ReferenceError: Cannot access 'multiply3' before initialization
// const multiply3 = function () {
//   return x * y;
// };

// var랑 달리 let은 선언 후 호출
// console.log(k); // ReferenceError: Cannot access 'k' before initialization
// let k = 6;
