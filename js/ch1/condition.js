// 조건문, 반복문
// true : 0 제외 숫자, '문자', [](비어있는 리스트), {}(객체)
// false : 0, ''(비어있는 문자), null, undefined, NaN(Not a Number)

const date = new Date(); // 날짜 관련 객체
let hour = date.getHours();

if (hour < 12) {
  console.log("오전");
} else {
  console.log("오후");
}

const num1 = Number("12");
console.log(typeof num1); // number
console.log(Number("abc")); // NaN

console.log(isNaN(num1)); // NaN 판별 // false
console.log(isNaN(Number("abc"))); // true
