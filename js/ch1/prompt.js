// 함수
// alert("사용자에게 메세지 전달");

// 사용자로부터 입력
// prompt("숫자 입력", 100); // 100 -> default 값

// let input = prompt("숫자 입력");
// console.log("사용자 입력 값", input);

// let isBoss = confirm("당신이 주인입니까?");
// console.log(isBoss ? "주인" : "주인아님");

// 게임의사 물어보기
// if (confirm("게임 한 판 하실래요?")) {
//   document.writeln("좋습니다. 게임 한 판 하시죠."); // console -> 개발자 도구에 보이게 / -> document 브라우저에 보이게
// } else {
//   document.writeln("나중에 한 판 하시죠.");
// }

// 사용자에게 숫자를 입력 받아 양수, 음수, 0 인지 판별
// prompt()
// let input = Number(prompt("숫자 입력"));
// if (input > 0) {
//   document.writeln("양수");
// } else if (input < 0) {
//   document.writeln("음수");
// } else if (input == 0) {
//   document.writeln("0");
// } else if (isNaN(input)) {
//   document.writeln("숫자가 아님");
// }

// 숫자를 입력 받아 짝, 홀 구분
// let input = Number(prompt("숫자 입력"));
// if (input % 2 == 0) {
//   document.writeln("짝수");
// } else if (input % 2 == 1) {
//   document.writeln("홀수");
// } else if (isNaN(input)) {
//   document.writeln("숫자가 아님");
// }

// 숫자 3개를 입력 받아 평균 >=90 A, >=80 B, >=70 C, >=60 D, 나머지 F
let num1 = Number(prompt("첫번째 숫자 입력"));
let num2 = Number(prompt("두번째 숫자 입력"));
let num3 = Number(prompt("세번째 숫자 입력"));

let avg = (num1 + num2 + num3) / 3;

// if (avg >= 90) {
//   document.writeln("A");
// } else if (avg >= 80) {
//   document.writeln("B");
// } else if (avg >= 70) {
//   document.writeln("C");
// } else if (avg >= 60) {
//   document.writeln("D");
// } else {
//   document.writeln("F");
// }

switch (parseInt(avg / 10)) {
  case 10:
  case 9:
    document.writeln("A");
    break;
  case 8:
    document.writeln("B");
    break;
  case 7:
    document.writeln("C");
    break;
  case 6:
    document.writeln("D");
    break;
  default:
    document.writeln("F");
    break;
}
