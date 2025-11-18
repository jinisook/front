// h1 태그 요소 삭제
// 1. h1 요소 찾기
const h1 = document.querySelector("h1");
// h1.remove(); -> 바로 지워짐

// h1 글자 클릭으로 제거
// e.target : 이벤트 대상 가져오기
// h1.addEventListener("click", (e) => h1.remove());
// h1.addEventListener("mouseover", (e) => h1.remove());
// h1.addEventListener("click", (e) => e.target.remove()); // e.target => h1

// h1 제거 버튼 클릭 시 제거
// 1. 버튼 요소 찾기
// 변수명 없이도 가능
// document.querySelector("button").addEventListener("click", () => h1.remove());
// document.querySelector("button").addEventListener("click", (e) => e.target.remove()); // e.target => button

// h1요소의 class 제거(button 클릭)
// h1 요소 찾기 - const h1 = document.querySelector("h1");
// 1) removeAttribute("제거할 속성명") : 모든 속성용
// 2) classList.remove() : class 전용
// h1.removeAttribute("class");

// 2) classList.remove()
console.log(h1.classList);
// {
//     "0": "header",
//     "1": "one",
//     "2": "two",
//     "3": "three"
// }
console.log(h1.classList[0]);
console.log(h1.classList[1]);
// two 삭제
h1.classList.remove("two");

// img 요소 찾기
const img = document.querySelector("img");
// img alt 속성 값 제거
img.removeAttribute("alt");
