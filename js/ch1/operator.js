// 연산자
let a = 4,
  b = 5;
// 산술연산자
console.log("\n산술연산자");
console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b); // 0.8 (자바와 다른 값, 자바는 몫만)
console.log("a % b = ", a % b);

// 비교
console.log("\n비교연산자");
console.log("a == b = ", a == b);
console.log("a === b = ", a === b); // false
console.log("a != b = ", a != b);
console.log("a !== b = ", a !== b); // true
let c = "4";
console.log("a == c = ", a == c); // true 4 == "4" (숫자와 문자 비교)
console.log("a === c = ", a === c); // false 값, 타입 비교
console.log("a != c = ", a != c);
console.log("a !== c = ", a !== c);
// 연결
console.log("\n연결연산자");
console.log("a + c = ", a + c); // 44 (4 + "4")
let d = "5";
console.log("d + c = ", d + c); // 54 ("5" + "4")

// 단항
console.log("\n단항연산");
let i = 0;
while (i < 10) {
  i++;
  if (i == 5) continue;
  console.log(i);
}
