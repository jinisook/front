// 이벤트버블링
// li 클릭 시 부모한테 전달되는 부분 이용
const parent = document.querySelector(".container");
const btns = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".tab-content");

parent.addEventListener("click", (e) => {
  // 어느 tab-button이 클릭 되었는가? -> e.target
  btns.forEach((element) => element.classList.remove("orange"));
  // e.target orange 추가
  e.target.classList.add("orange");
  // 모든 tab-content show 제거
  contents.forEach((content) => content.classList.remove("show"));
  // e.target.dataset.idx show 추가
  contents[e.target.dataset.idx].classList.add("show");
});
