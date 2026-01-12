const regEx = /d(b+)d/g;
const origin = "cdbbdbsbz";

// 정규식 객체 메소드 이용
console.log(regEx.exec(origin)); // [ 'dbbd', 'bb', index: 1, input: 'cdbbdbsbz', groups: undefined ]
// 문자열 메소드 이용
console.log(origin.match(regEx)); // [ 'dbbd' ]

// 캡쳐링 : 패턴이 적용된 결과값을 가리키는데 사용 / 패턴을 여러번 적용하는데 사용 -> replace에서 사용 가능
// 비캡쳐링 : (?:ko)+ => ()를 사용하지만, 캡쳐링은 안하고 싶을 때
const regEx1 = /(ko)+/;
const origin1 = "kokokoko";

console.log("캡쳐링");
console.log(origin1.match(regEx1));

console.log("비캡쳐링");
console.log(origin1.match(/(?:ko)+/));

const name = "John Smith";
const regEx2 = /(\w+)\s(\w+)/; // (그룹) -> 그룹의 의미도 있지만, 캡쳐링의 개념도 있음
console.log(name.match(regEx2));
const newName = name.replace(regEx2, "$2, $1");
console.log(newName);

// 폼이 전송 시 submit 기능 중지
// -> 폼 찾기 먼저
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.target;
  // 이름 입력값 확인 : 한글, 2~5자 허용
  const name = form.name.value;
  // -> 정규식 만들기
  const regName = /^[가-힣]{2,5}$/; // ^ : 시작, $ : 끝
  // 전화번호 입력값 확인 : 000-1234-5678
  const tel = form.tel.value;
  const regTel = /^\d{3}-\d{4}-\d{4}&/;
  if (!regName.test(name)) {
    alert("이름을 확인해주세요.(한글, 2~5자리 이내여야 합니다.)");
    form.name.focus();
    return;
  } else if (!regTel.test(tel)) {
    alert("전화번호를 확인해주세요.(형식 010-1234-5678)");
    form.tel.focus();
    return;
  }
});
