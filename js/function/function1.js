// 함수(단독) == 메소드(객체 내에 포함)
// function name(params) {}
// const func = function () {};
// const func1 = () => {};
// 함수선언방식
// 1. 파라메터 없는 경우
function showMsg() {
  console.log("안녕하세요");
}
showMsg();

// 2. 파라메터 / return 있는 경우
function multiply(a, b) {
  console.log(a, b);
  return a * b;
}

// 선언 했는데 값을 안주면, 없는 값 : undefined -> 5 * undefined = NaN
const result = multiply(5); // NaN
console.log(result);

function showDialog(greeting, name) {
  console.log(`${greeting}!! ${name}`);
}
showDialog("Hello", "jini");

// 3. 매개변수 기본값 : 매개변수값이 안 넘어오는 경우 기본값 사용
function multiply(a, b = 5) {
  // b의 값이 만약 안들어오면, b는 5
  console.log(a, b);
  return a * b;
}
console.log(multiply(3));
console.log(multiply(5, 6));

console.log();

function multiply(a, b) {
  console.log(a, b);
  b = b || 5;
  return a * b;
}
console.log(multiply(3));
console.log(multiply(5, 6));

// 4. 함수 안에 함수 작성
function a() {
  function b() {
    console.log("b function");
  }
  if (true) {
    function c() {}
  }
  // a 내부에서만 호출 가능
  b();
  c();
}

a(); // a 호출 가능
// b(); // b 호출 불가능 ReferenceError: b is not defined
