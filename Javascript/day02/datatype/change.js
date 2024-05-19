// div: w 100 h 100 bg : 원하는 색
// -, +를 통해서
// div가 유동적으로 넓/높이가 변하도록 하는 프로그램 만드세요.

const box = document.createElement("div");
const btn_minus = document.createElement("button");
const btn_plus = document.createElement("button");
box.style.width = "100px";
box.style.height = "100px";
box.style.backgroundColor = "skyblue";

btn_minus.innerText = "-";
btn_plus.innerText = "+";

btn_plus.addEventListener("click", () => {
  box.style.width = parseInt(box.style.width) + 100 + "px";
  box.style.height = parseInt(box.style.height) + 100 + "px";
});

btn_minus.addEventListener("click", () => {
  box.style.width = parseInt(box.style.width) - 100 + "px";
  box.style.height = parseInt(box.style.height) - 100 + "px";
});

document.body.appendChild(btn_minus);
document.body.appendChild(btn_plus);
document.body.appendChild(box);
