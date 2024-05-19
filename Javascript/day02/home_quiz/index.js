const ame_buy = document.querySelector(".ame_btn");
const latte_buy = document.querySelector(".latte_btn");
const vanilla_buy = document.querySelector(".vanilla_btn");
const total = document.querySelector(".total");
const reset_btn = document.querySelector(".reset_btn");

total.innerText = 0;

ame_buy.addEventListener("click", () => {
  total.innerText = Number(total.innerText) + 3000;
});

latte_buy.addEventListener("click", () => {
  total.innerText = Number(total.innerText) + 3500;
});

vanilla_buy.addEventListener("click", () => {
  total.innerText = Number(total.innerText) + 4000;
});

reset_btn.addEventListener("click", () => {
  total.innerText = 0;
});
