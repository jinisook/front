document.querySelector("a").addEventListener("click", (e) => {
  // a 태그 막기 -> 링크 이동X
  e.preventDefault();

  // href 값 가져오기
  console.log("href", e.target.href);
  // target 값 가져오기
  console.log("target", e.target.target);
  // data-link 값 가져오기(js는 - 사용 불가) -> data- -> dataset
  console.log("data-link", e.target.dataset.link);
  console.log("data-link-test", e.target.dataset.linkTest); // - - 두 개 이상 사용

  // 주소에 naver가 들어았다면 이동
  // if (e.target.href.includes("naver")) {
  //   location.href = e.target.href;
  // } else {
  //   // 아니라면 구글로 이동
  //   location.href = "http://www.google.com";
  // }
});

// form submit 발생 시

document.querySelector("form").addEventListener("submit", (e) => {
  // submit 중지
  e.preventDefault();
  // 검증
  // 내용이 잘 입력되어 있는 지 확인
  // 입력이 안된 요소에 포커스 + 메세지 alert 띄우기

  const form = e.target;

  if (form.name.value === "") {
    alert("이름을 입력해주세요.");
    form.name.focus();
    return;
  } else if (form.password.value === "") {
    alert("비밀번호를 입력해주세요.");
    form.password.focus();
    return;
  } else if (form.age.value === "") {
    alert("나이를 입력해주세요.");
    form.age.focus();
    return;
  }
  // 내용이 들어있다면 원래대로 submit 실행
  e.target.submit();
});
