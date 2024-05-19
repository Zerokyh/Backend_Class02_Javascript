// const a = document.querySelector(".box");
// console.log(a);

// const b = document.getElementsByClassName("box");
// console.log(b);

// a.addEventLister("click", () => {
//   console.log(a);
// });

// - 0 +
// const plus_btn = document.querySelector(".plus_btn");
// const minus_btn = document.querySelector(".minus_btn");

// plus_btn.addEventListener("click", () => {
//   const cntSpan = document.querySelector(".cnt");
//   cntSpan.innerText = Number(cntSpan.innerText) + 1;
// });

// minus_btn.addEventListener("click", () => {
//   const cntSpan = document.querySelector(".cnt");
//   const number = Number(cntSpan.innerText) - 1;

//   cntSpan.innerText = number === -1 ? 0 : number;
// });

// const plusBtn = document.querySelector(".plus_btn");
// plusBtn의 타입이 Element | Null 이기에 확실한 것만 보여주기에 속성값인 .innerText가 안보임

const xMark = document.querySelector(".xMark");
const bar = document.querySelector(".bar");
xMark.style.display = "none";
xMark.addEventListener("click", () => {
  xMark.style.display = "none";
  bar.style.display = "block";
});

bar.addEventListener("click", () => {
  xMark.style.display = "block";
  bar.style.display = "none";
});
