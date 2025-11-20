// const box = document.querySelector(".alert-box .close");
// // 알림창 보여주기 클릭 시 알림창 보여주기
// document.querySelector("button").addEventListener("click", () => {
//   box.style.display = "block";
// });

// // X 클릭 시 창 닫기
// // display = "none";
// box.addEventListener("click", () => {
//   box.style.display = "none";
// });

const box = document.querySelector(".alert-box");
const notification = (state) => {
  box.style.display = state;
};
// 알림창 보여주기 클릭 시 알림창 보여주기
document.querySelector("button").addEventListener("click", () => {
  notification("block");
});

// X 클릭 시 창 닫기
// display = "none";
document.querySelector(".close").addEventListener("click", () => {
  notification("none");
});
