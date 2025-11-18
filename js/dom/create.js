// 생성 클릭 시 동적으로 element(node) 생성
// <p>HELLO</p>

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  const pTag = "<p>HELLO</p>";

  //   .insertAdjacentHTML("위치", 삽인요소); -> 위치는 document.querySelector("#test")를 기준으로
  //   afterbegin : <div id="test"><p>HELLO</p></div>
  //   afterend : <div id="test">TEST</div><p>HELLO</p>
  //   beforebefin : <p>HELLO</p><div id="test">TEST</div>
  //   beforeend : <div id="test">TEST<p>HELLO</p></div>
  document.querySelector("#test").insertAdjacentHTML("beforeend", pTag);

  // append -> 맨 나중에 붙이기 때문에 <script> 뒤에 붙음
  //   document.body.append(pTag);

  const img = document.createElement("img");
  img.src = "1.jpg";
  img.alt = "시계";
  document.body.appendChild(img);
});
