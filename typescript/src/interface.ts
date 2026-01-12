export {}; // 개별 파일 의미

// # object(객체 선언)
let user1: object;
user1 = { name: "Yushi", age: 21 };
console.log(user1);
// console.log(user1.name) => Property 'name' does not exist on type 'object'.

// type 선언 하거나 interface 사용
// type Name = {
//   firstName: string;
//   lastName: string;
// };

// interface는 상속 가능
interface User {
  name: string;
  age: number;
  gender?: string; // gender 는 null일수도 있음, 값이 들어오면 그 값은 string
}
let user2: User = {
  name: "Tokuno",
  age: 21,
};
console.log(user2.name);

let user3: User = {
  name: "Ryo",
  age: 25,
  gender: "male",
};
console.log(user3.name);
console.log(user3.gender);
user3.gender = "female";
console.log(user3.gender);

// 객체 선언할 때 readonly 속성 부여
interface Car {
  readonly model: string;
  year: number;
}

let myCar: Car = {
  model: "BMW mini",
  year: 2020,
};
// myCar.model = "Toyota"; -> 오류

interface Student {
  name: string;
  id: number;
  [key: number]: string;
}

// A~D 사이 점수 부여를 해야 한다면, 값 제안을 줄 때 : enum or type 사용
let student: Student = {
  name: "tokunoyushi",
  id: 12345,
  1: "A",
  2: "B",
  3: "A",
  4: "C",
};

type Score = "A+" | "A" | "B" | "C" | "D";
interface Student2 {
  name: string;
  id: number;
  [key: number]: Score;
}

let student2: Student2 = {
  name: "tokunoyushi",
  id: 12345,
  1: "A",
  2: "B",
  3: "A",
  // 4: "F", => score 안에 값이 아니라 오류 발생
};

// interface 확장 개념
interface Car {
  color: string;
  wheels: number;
  start(): void;
}

// class Truck implements Car {
//   color: string;
//   wheels: number;

//   constructor(color: string, wheels: number) {
//     // 생성자
//     this.color = color;
//     this.wheels = wheels;
//   }
//   start(): void {
//     console.log("Truck start");
//   }
// }
