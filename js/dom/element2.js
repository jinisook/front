// 테이블 요소 찾기
const table = document.querySelector("table");
console.log(table);

// 사용자가 Search 버튼 클릭 시 검색어 가져오기
// 요소 찾기 -> 감시이벤트리스너를 위해
// 일반 버튼
// submit 버튼 (자동으로 동작하는 버튼) : 폼 안의 전송(action 이 가리키는 곳으로)
// action 값이 없으면, 현재 브라우조 주소 그대로 사용
// method 값이 없으면, 기본 값 get (주소 뒤에 ? 붙기 시작하면)

// 값을 가져오려면 submit의 경우, submit 실행 중지 시켜야함

// reset 버튼 : 폼 안의 내용 clear

// 버튼 찾기
// const btn = document.querySelector(".btn-outline-success");
// buttond이 submit - > 태그 찾기
// 폼 안 버튼이 submit 이라면 form의 submit 이벤트 감지하도록 한다.
const form = document.querySelector("form");
console.log(form);
// 폼 안의 요소 찾기
// 1) form.querySelector("")
// 2) 이름 form.name 값

// Search 버튼 클릭 시 검색어 가져오기
form.addEventListener("submit", (e) => {
  // 이벤트 중지 => submit 기능 중지
  e.preventDefault();
  const search = form.search;
  // console.log(search);
  console.log(search.value); // 검색 내용 가져오기
});

// link li 찾기
// text 출력
const li = document.querySelector(".navbar-nav li:nth-child(2)");
console.log(li);
console.log(li.textContent);
