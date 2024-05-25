// Counter -10 ~ 10
// - 0 +
// [10, -10] : Red 그 외는 Black
// const minus_btn = document.querySelector(".minus_btn");
// const plus_btn = document.querySelector(".plus_btn");
// const cnt = document.querySelector(".cnt");
// const body = document.querySelector("body");

// cnt.innerText >= -10 && cnt.innerText <= 10
//   ? (body.style.backgroundColor = "red")
//   : (body.style.backgroundColor = "black");

// minus_btn.addEventListener("click", () => {
//   cnt.innerText = Number(cnt.innerText) - 1;
//   cnt.innerText >= -10 && cnt.innerText <= 10
//     ? (body.style.backgroundColor = "red")
//     : (body.style.backgroundColor = "black");
// });

// plus_btn.addEventListener("click", () => {
//   cnt.innerText = Number(cnt.innerText) + 1;
//   cnt.innerText >= -10 && cnt.innerText <= 10
//     ? (body.style.backgroundColor = "red")
//     : (body.style.backgroundColor = "black");
// });

const minusBtn = document.querySelector(".minusBtn");
const result = document.querySelector(".result");
const plusBtn = document.querySelector(".plusBtn");

plusBtn.addEventListener("click", () => {
  const num = Number(result.innerText);
  const newNum = num < 10 ? num + 1 : num;
  result.innerText = newNum;
  result.Style.color = newNum == 10 ? "red" : "black";
});

minusBtn.addEventListener("click", () => {
  const num = Number(result.innerText);
  const newNum = num < 10 ? num - 1 : num;
  result.innerText = newNum;
  result.Style.color = newNum == 10 ? "red" : "black";
});
