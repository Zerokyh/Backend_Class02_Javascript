// 아메리카노 2500 : - 0 +
// 라떼 3000 : - 0 +
// 바닐라 3500 : - 0 +
// 총액 : 0

const americanoSpan = document.createElement("span");
const latteSpan = document.createElement("span");
const vanillaSpan = document.createElement("span");
const totalSpan = document.createElement("span");

americanoSpan.innerText = "아메리카노 2500";
latteSpan.innerText = "라떼 3000";
vanillaSpan.innerText = "바닐라 3500";
totalSpan.innerText = "0";

const americanoMinusBtn = document.createElement("button");
const americanoTotal = document.createElement("span");
const americanoPlusBtn = document.createElement("button");

americanoMinusBtn.innerText = "-";
americanoTotal.innerText = "0";
americanoPlusBtn.innerText = "+";

americanoMinusBtn.addEventListener("click", () => {
  americanoTotal.innerText = Number(americanoTotal.innerText) - 1;
  totalSpan.innerText = Number(totalSpan.innerText) - 2500;
});
americanoPlusBtn.addEventListener("click", () => {
  americanoTotal.innerText = Number(americanoTotal.innerText) + 1;
  totalSpan.innerText = Number(totalSpan.innerText) + 2500;
});

const latteMinusBtn = document.createElement("button");
const latteTotal = document.createElement("span");
const lattePlusBtn = document.createElement("button");

latteMinusBtn.innerText = "-";
latteTotal.innerText = "0";
lattePlusBtn.innerText = "+";

latteMinusBtn.addEventListener("click", () => {
  latteTotal.innerText = Number(latteTotal.innerText) - 1;
  totalSpan.innerText = Number(totalSpan.innerText) - 3000;
});
lattePlusBtn.addEventListener("click", () => {
  latteTotal.innerText = Number(latteTotal.innerText) + 1;
  totalSpan.innerText = Number(totalSpan.innerText) + 3000;
});

const vanillaMinusBtn = document.createElement("button");
const vanillaTotal = document.createElement("span");
const vanillaPlusBtn = document.createElement("button");

vanillaMinusBtn.innerText = "-";
vanillaTotal.innerText = "0";
vanillaPlusBtn.innerText = "+";

vanillaMinusBtn.addEventListener("click", () => {
  vanillaTotal.innerText = Number(vanillaTotal.innerText) - 1;
  totalSpan.innerText = Number(totalSpan.innerText) - 3500;
});
vanillaPlusBtn.addEventListener("click", () => {
  vanillaTotal.innerText = Number(vanillaTotal.innerText) + 1;
  totalSpan.innerText = Number(totalSpan.innerText) + 3500;
});

document.body.appendChild(americanoMinusBtn);
document.body.appendChild(americanoPlusBtn);
document.body.appendChild(americanoSpan);
document.body.appendChild(americanoTotal);

document.body.appendChild(latteMinusBtn);
document.body.appendChild(lattePlusBtn);
document.body.appendChild(latteSpan);
document.body.appendChild(latteTotal);

document.body.appendChild(vanillaMinusBtn);
document.body.appendChild(vanillaPlusBtn);
document.body.appendChild(vanillaSpan);
document.body.appendChild(vanillaTotal);

document.body.appendChild(totalSpan);
