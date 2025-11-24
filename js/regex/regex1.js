// 정규표현식

// 정규표현식 생성
// const regex = /Ajax/; // 패턴 생성 <- 이쪽이 간단
const regex = new RegExp("Ajax", "g"); // 패턴 생성2
const origin = "JavaScript Ajax Java Python";

// 자바스크립트에서 정규식 사용
// RegEXP 객체의 메소드
// 1. exec() : 일치정보를 나타내는 배열 리턴 / 못찾으면 null 리턴
console.log(regex.exec(origin));
console.log(regex.exec("JavaScript")); // null

// 2. test() : 일치하면 true / 아니면 false
console.log(regex.test(origin));
console.log(regex.test("JavaScript"));

// 3. match() : string 메서드 -> 위치 바꿔야 함
//    RegEXP 객체의 exec() 메소드와 같은 결과
console.log(origin.match(regex));
console.log("JavaScript".match(regex));

// 4. search() : 찾으면 시작위치 리턴 / 못 찾으면 -1 리턴
console.log(origin.search(regex));
console.log("JavaScript".search(regex));

// 5. replace() : 내용 변경
console.log(origin.replace(regex, "아작스"));
