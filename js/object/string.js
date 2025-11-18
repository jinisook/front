// const msg = new String("hello javascript");
const msg = "hello javascript";

console.log("특정 문자 위치 반환", msg.charAt(4));
console.log("특정 문자 위치 찾기", msg.indexOf("j"));
console.log("찾을 문자", msg.match("ja"));
console.log("찾을 문자", msg.match("boy"));
console.log("특정 문자 변경", msg.replace("hello", "hi"));
console.log("특정 문자 찾기(위치)", msg.search("ja"));
console.log("문자 자르기", msg.slice(6, 10));
console.log("문자 자르기", msg.substring(6, 10));
console.log("문자 공백 제거", "   hello    ".trim());
console.log("대문자 변경", msg.toUpperCase());
console.log("소문자 변경", "ABCDEFG".toLowerCase());

// 특정 문자 위치 반환 o
// 특정 문자 위치 찾기 6
// 찾을 문자 [ 'ja', index: 6, input: 'hello javascript', groups: undefined ]
// 찾을 문자 null
// 특정 문자 변경 hi javascript
// 특정 문자 찾기(위치) 6
// 문자 자르기 java
// 문자 자르기 java
// 문자 공백 제거 hello
// 대문자 변경 HELLO JAVASCRIPT
// 소문자 변경 abcdefg

// 함수 작성
// 사용자로부터  영문이름 소문자로 입력, 전화번호 입력(000-0000-0000)
// 이름은 대문자로 출력 / 전화번호 010-####-0000 출력

// const info = () => {
//   const userName = prompt("소문자로 영어이름 입력");
//   const userTel = prompt("전화번호 입력(010-0000-0000)");
//   document.writeln("사용자 이름 : ", userName.toUpperCase());
//   document.writeln("<br>");
//   document.writeln("전화번호 : ", userTel.replace(userTel.substring(4, 8), "####"));
// };

// info();

// 이메일 입력받기
// 이메일 형식이 맞는지 확인 : @ 존재 여부만
// @ 없는 경우, alert("입력값 확인")
// @ 있는 경우, 이메일 출력

const info = () => {
  const email = prompt("이메일 입력");
  // if(email.includes("@");) == 자바의 contains() 와 같음
  if (email.indexOf("@") == -1) {
    alert("입력값 확인");
    info(); // 다시 실행
  } else {
    document.writeln("e-mail : ", email);
  }
};

info();
