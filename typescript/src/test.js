function add(num1, num2) {
  console.log(num1 + num2);
}

add(); // NaN
add(1); // NaN
add(1, 2);
add(3, 4, 5); // 앞에 두 개만 계산
add("hello", "world"); // 연결 연산자로 사용
// -> 결과 예상 불가

function showItems(arr) {
  arr.forEach((item) => {
    console.log(item);
  });
}

showItems([1, 2, 3, 4, 5]);
showItems(1, 2, 3, 4, 5);

// 자바스크립트는 동적언어 -> 런타임 시 타입 결정 => 실행 시 오류 발생
// java, typescript : 컴파일 시 타입 결정 => 컴파일 시 오류 발생

// 자바스크립트에서 객체 선언 (object)
let user = {
  id: "user01",
  name: "유우시",
};
