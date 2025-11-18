// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }

// array.forEach(element => {

// });

// for (const key in object) {
//     if (!Object.hasOwn(object, key)) continue;

//     const element = object[key];

// }

// for (const element of object) {

// }

// while (condition) {

// }

// do {

// } while (condition);

// 1~10 출력
// for (let index = 1; index < 11; index++) {
//   console.log(index);
// }

// let index = 1;
// while (index < 11) {
//   console.log(index);
//   index++;
// }

// index = 1;
// do {
//   console.log(index);
//   index++;
// } while (index < 11);

// 객체 출력
// key:value - java 멤버변수
const myCar = { make: "BMW", model: "mini", year: 2013 };
console.log(myCar);
console.log("제조연도 : ", myCar["year"]);
console.log("제조연도 : ", myCar.model);
// forin => 객체 출력할 때 주로 사용
for (const key in myCar) {
  // console.log(myCar[key]);
  // console.log(key, ":", myCar[key]);
  // printf 와 같은 것 / $ : 변수명 앞에 붙이는 개념
  console.log(`${key} : ${myCar[key]}`);
}

// 0~100 출력 증가+2
// 숫자가 48이 되면 반복문 중지
for (let index = 0; index < 100; index += 2) {
  if (index == 50) break;
  console.log(index);
}
