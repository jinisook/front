// tab-button 버튼 클릭 시 짝꿍 tab-content 보여주기

// tab-button 버튼 찾기 + click 이벤트 리스너 부착 + orange 클래스명 이동
// tab-content 찾기 + show 클래스명 이동
const btns = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".tab-content");

btns.forEach((btn, idx) => {
  btn.addEventListener("click", (e) => {
    // 어느 tab-button이 클릭 되었는가? -> e.target

    // 모든 tab-button orange 제거
    // btns[0].classList.remove("orange");
    // btns[1].classList.remove("orange");
    // btns[1].classList.remove("orange");
    btns.forEach((element) => element.classList.remove("orange"));

    // e.target orange 추가
    e.target.classList.add("orange");

    // show 클래스명
    // 모든 tab-content show 제거
    contents.forEach((content) => content.classList.remove("show"));
    contents[idx].classList.add("show");
  });
});

// btns.forEach((btn, idx) => {
//   btn.addEventListener("click", () => {
//     btns.forEach((item) => item.classList.remove("orange"));
//     contents.forEach((item2) => item2.classList.remove("show"));
//     btn.classList.add("orange");
//     contents[idx].classList.add("show");
//   });
// });

// classList.add(), classList.remove(), classList.toggle()
