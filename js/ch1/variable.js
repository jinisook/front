// 타입 지정은 따로 안함
// 변수선언 : var, let
// 상수선언 : const

var value1 = 4;
var value2 = 5;
console.log(value1 + value2);
// 재선언
var value2 = 6;
console.log(value2);
// 재할당
value1 = 7;
console.log(value1);

// SyntaxError: Identifier 'value1' has already been declared
// 재선언 불가
// let value1 = 7;
let value3 = 8;
console.log(value3);
value3 = 10;
console.log(value3);

// const declarations must be initialized.
const value4 = 15;
// TypeError: Assignment to constant variable.
// value4 = 20;
console.log(value4);
