// 1. 배열 기본 개념
const fruits = ["사과", "딸기", "수박", "바나나"];
// - 배열 접근
console.log(fruits[0]);
// - 전체 값나열
fruits.forEach((item) => {
  console.log(item);
});
// 2. 객체
const person = {
  name: "토쿠노",
  job: "학생",
};
const person1 = {
  name: "유우시",
  job: "학생",
};
// - 객체 접근
console.log(person.name);
// 3. 객체 배열
const persons = [
  { name: "토쿠노", job: "학생" },
  { name: "유우시", job: "학생" },
];
// 객체 배열 접근
console.log(persons[0].name);
// 객체 배열 전체 접근 -> foreach
persons.forEach((p) => {
  console.log(`${p.name} : ${p.job}`);
});

// 배열 객체 선언
const product = [
  { id: 0, price: 77000, title: "Blossom Dress" },
  { id: 1, price: 55000, title: "SpringField Shirt" },
  { id: 2, price: 60000, title: "Black Monastery" },
];

// 제품 정보를 각각의 카드 안에 넣기
// card-title : 제품 title
// card-text : 가격

// 제품 접근
product.forEach((item) => {
  console.log(`${item.id},${item.title},${item.price}`);
});

// 카드 영역 찾기
const cards = document.querySelectorAll(".card"); // All은 하나만 찾아도 배역
// 배열이니까 foreach
cards.forEach((card, idx) => {
  // .card-title 요소찾기
  const title = card.querySelector(".card-title");
  // .card-text 요소찾기 -> 첫번째 요소 찾아서 next 이용
  const price = title.nextElementSibling;

  title.textContent = product[idx].title;
  price.textContent = product[idx].price;
});
