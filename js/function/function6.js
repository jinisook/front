// 내장함수
// window.confirm(), window.alert()
// window. -> 브라우저용 / console에 X
// isNaN(), parseInt(), parseFloat()

// 문자 인코딩
// a => 97 => 10021

// 문자 디코딩
// a <= 97 <= 10021

// encodeURL() : 영문, 숫자, 일부기호만 제외
// encodeURLComponent() : 영문, 숫자만 제외

// http://localhost:8080/basic/info.html?name=%ED%86%A0%EC%BF%A0%EB%85%B8&age=15
console.log(encodeURI("http://localhost:8080/basic/info.html?name=토쿠노&age=15"));
console.log();
// http%3A%2F%2Flocalhost%3A8080%2Fbasic%2Finfo.html%3Fname%3D%ED%86%A0%EC%BF%A0%EB%85%B8%26age%3D15
console.log(encodeURIComponent("http://localhost:8080/basic/info.html?name=토쿠노&age=15"));

// 디코딩
console.log(decodeURI("http://localhost:8080/basic/info.html?name=%ED%86%A0%EC%BF%A0%EB%85%B8&age=15"));
console.log(
  decodeURIComponent(
    "http%3A%2F%2Flocalhost%3A8080%2Fbasic%2Finfo.html%3Fname%3D%ED%86%A0%EC%BF%A0%EB%85%B8%26age%3D15"
  )
);

// 2초가 지난 뒤 안녕 글자 출력
// setTimeout(() => {}, timeout);
console.log("시작");
setTimeout(() => {
  console.log("안녕"); // 콜백 함수
}, 2000);
console.log("종료");

console.log("시작");
setInterval(() => {
  console.log("3초가 지났습니다.");
}, 3000);
console.log("종료");
