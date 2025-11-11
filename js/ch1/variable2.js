// 함수 == 메소드

function foobar() {
  var foo = 5;
  console.log(foo);
}
// ReferenceError: foo is not defined
// console.log(foo);

if (true) {
  var a = 5;
  console.log(a);
}

console.log(a);

function foobar() {
  let foo = 5;
  console.log(foo);
}
// ReferenceError: foo is not defined
// console.log(foo);

if (true) {
  let b = 5;
  console.log(b);
}

// ReferenceError: b is not defined
// console.log(b);
