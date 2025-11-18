// 최대값, 최소값 출력
const numArr = [52, 273, 586, 32, 57, 103, 312, 2];
let max = numArr[0];
let min = numArr[0];

for (let index = 1; index < numArr.length; index++) {
  if (max < numArr[index]) max = numArr[index];
  if (min < numArr[index]) min = numArr[index];
}

document.writeln(`최대값 : ${max}, 최소값 : ${min}`);
document.writeln("<br>");

// const num = numArr.sort((a, b) => a - b);
// console.log("최소값 : ", num[0]);
// console.log("최대값 : ", num[7]);

// 사용자한테 한글로 행성 이름을 입력 받은 후 영어로 된 행성 이름 출력
const planeKor = ["수성", "금성", "지구", "화성", "목성", "토성", "천왕성"];
const planeEng = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus"];

const input = prompt("행성 이름을 한글로 입력하세요.");
document.writeln("입력한 한글 행성 이름 : ", input);
document.writeln("<br>");
document.writeln("영어 행성 이름 : ", planeEng[planeKor.indexOf(input)]);

// switch (input) {
//   case planeKor[0]:
//     console.log(planeEng[0]);
//     break;

//   default:
//     break;
// }
