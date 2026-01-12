export {}; // 개별 파일 의미
// javascript 타입 : number, string, boolean, [], undefined, null

// let car = "BMW"; // string 으로 유추
// car = 4; -> string 값이 아닐 시 오류
// string 명시하는 방법
let car: string = "BMW";

let age: number = 30;
// age = "45"; -> 오류
// age = true; -> 오류

let isAdult: boolean;
isAdult = true;
// isAdult = "true"; -> 오류

let n: null = null;
// n = undefined; -> 오류

let u: undefined;
u = undefined;
// u = "123"; -> 오류

// # 배열
let fruits0 = ["apple", "banana", "cherry"];
// fruits = "melon"; -> 묵시적 형 유출해서 배열이 아닐 시 오류

// # 배열 선언
let fruits: string[] = ["apple", "banana", "cherry"];
let fruits2: Array<string> = ["apple", "banana", "cherry"];

// 함수를 이용해서 집어 넣기
// fruits.push(1); -> string 선언으로 숫자 못 받음

let score1: number[] = [90, 85, 88];
let score2: Array<number> = [90, 85, 88];

// string + number 담을 떄,
let mixed: (string | number)[] = ["apple", 45, "banana", 46, 78];

// 읽기 전용 배열(push 못받도록)
const vegetables: readonly string[] = ["carrot", "broccoli", "spinach"];
// vegetables.push() -> push 자체에 오류남 -> 읽기 전용이기 떄문에

const newArray = [...vegetables, "potato"]; // ...vegetables => 복제를 의미함 : 읽기 전용은 복제는 가능
console.log(newArray);

// 타입 스크립트 제공 : 튜플, any, unknown, void, never, enum
// 1. 튜플 (배열처럼 생김) : 배열 안에 타입 넣기
//  : 순서, 길이 고정
let person: [string, number];
// person = [25, "Alice"]; -> 오류
person = ["Alice", 25];
console.log(person[0].toLowerCase()); // [0]은 string이기 때문에, 문자 관련 메소드 사용 가능
// console.log(person[1].toLowerCase()); // [1]은 number이기 때문에, 문자 관련 메소드 사용 불가능 / 숫자 관련 메소드만 사용

function getUserInfo0() {
  // 이름, 나이, 성인여부 리턴 -> 자바에서는 DTO(객체)로 던지기 가능
  // -> 타입스크립트는 튜플로 사용
  return ["Bob", 30, true];
}
// 타입 선언 가능
function getUserInfo(): [string, number, boolean] {
  // 이름, 나이, 성인여부 리턴 -> 자바에서는 DTO(객체)로 던지기 가능
  // -> 타입스크립트는 튜플로 사용
  return ["Bob", 30, true];
}

console.log(getUserInfo0());

const [name1, age1, adult] = getUserInfo();
console.log(`name: ${name1}, age: ${age1}, isAdult: ${adult}`);

console.log("배열과 튜플의 비교");
const inferredArray = [1, "two"];
const inferredTuple = [1, "two"] as const;

inferredArray.push("three");
inferredArray.push("four");
inferredArray.push(4);
console.log(inferredArray);

// inferredTuple.push(); -> X
// inferredTuple[0] = 2; -> X
// as const(상수) == readonly

const explicitTuple: [number, string] = [1, "two"];
explicitTuple[0] = 2;
explicitTuple[1] = "three";
console.log(explicitTuple);

// 2. any == 기존 자바스크립트 변수 선언 개념과 동일(typescript 에서는 잘 사용 안함)
let num; // 선언할 때 값 안주면 유추 불가 -> num 타입은 any
num = 95;
num = "Five";
// any 타입 명시
let randomValue: any = 10;
randomValue = "Hello";
console.log(randomValue.length); // unknown 와 달리 .length 오류X
randomValue = true;

// 3. unknown
//    : 모르는 것에 일단 금지 / type check 후 안전하게 사용
//    -> API 받아올 떄 (어떤 형태로 넘어올지 모를 때)
let unknownValue: unknown = 10;
unknownValue = "Hello";
// let strLength: number = unknownValue.length; -> 오류 -> 코드 완성시키는 방법 : if문 + 타입 확인 후
if (typeof unknownValue === "string") {
  let strLength: number = unknownValue.length;
  console.log("문자길이", strLength);
}

if (typeof unknownValue === "string") {
  console.log(unknownValue.toLowerCase());
  //   unknownValue.toFixed(); -> 숫자 관련 메소드 막기
}
unknownValue = false;

// as : 타입 단언
let someValue: unknown = "This is a string";
// someValue.length -> 위에 if문 사용을 간단하게 하는 첫번째 방법 : as
let strLength: number = (someValue as string).length;
strLength = (<string>someValue).length; // 두번째 방법 someValue를 <string>으로 타입 변환

// 4. void : 반환(리턴)값에 사용
function logMsg(message: string): void {
  console.log(`${message}`);
}
logMsg("log message");

// 전달인자가 string or null, 반환값 없음
function printLength(text: string | null): void {
  // text? : text는 null 일 수 있음
  console.log(`text length ${text?.length}`); // ? => 'text' is possibly 'null'

  if (text === null) {
    console.log("No text");
    return;
  }
  console.log(`text length ${text.length}`);
}
printLength("Hello! TypeScript");
printLength(null);

// 5. never : 절대 실행할 수 없음
//    -> 에러를 반환하거나 절대 종료되지 않는 함수의 타입으로 사용
function error(message: string): never {
  throw new Error(message);
}
// error("이것은 에러입니다."); // 호출
let doc: string = "문서"; // 호출 시 -> Unreachable code detected.
// let neverValue: never = 10; -> 오류

// 종료 되지 않는 함수 (무한루프)
let i = 0;
function infiniteLoop(): never {
  while (true) {
    i++;
  }
}
// infiniteLoop();

// never 사용이 유리할 때,
function handleValue(x: string | number | boolean | object): void {
  if (typeof x === "string") {
    console.log("String value : " + x);
  } else if (typeof x === "number") {
    console.log("Number value : " + x);
  } else if (typeof x === "boolean") {
    console.log("Boolean value : " + x);
  } else if (typeof x === "object") {
    console.log("Object value : " + x);
  } else {
    const Unreachable: never = x;
    throw new Error("Unreachable type : " + Unreachable);
  }
}
handleValue("hello");
handleValue(25);
handleValue(true);

// 6. enum == 상수 모임
enum Color {
  Red,
  Blue,
  Green,
}
console.log(Color.Blue); // 1
console.log(Color["Blue"]); // 1

let myColor: Color;
myColor = Color.Green;
// myColor = "red";
// myColor = Color.Yellow;

// # type 선언
type Addr = string | number;
let userAddr: Addr;
userAddr = "서울시 34-5";

// type === enum
type status = "idle" | "loading" | "success" | "error";
let currentStatus: status;
currentStatus = "loading";

type PointTuple = [number, number];
let point: PointTuple = [10, 25];
// point = [10,20,30];
// point = [10, "20"];

// & : 교차타입
type Name = {
  firstName: string;
  lastName: string;
};

type Employee = Name & {
  employeeId: number;
};

let employee: Employee;
employee = {
  firstName: "Tokuno",
  lastName: "Yushi",
  employeeId: 1234,
};

// Memberdml property 가 정해지지 않은 경우 -> [key: string]: string;
type Member = {
  [key: string]: string;
};

let member: Member = {
  id: "user01",
};

member = {
  id: "user02",
  name: "유우시",
};
