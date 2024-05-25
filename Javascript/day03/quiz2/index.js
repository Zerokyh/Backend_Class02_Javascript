const colorList = ["red", "orange", "yellow", "green", "blue"];
const sizeList = ["small", "medium", "large", "x-large", "xx-large"];
const radiusList = [
  "borderRadiusZero",
  "borderRadiusTen",
  "borderRadiusTwenty",
];

colorList.forEach((v) => {
  const btn = document.createElement("button");
  btn.innerText = v;
  btn.addEventListener("click", () => {
    const box = document.querySelector(".box");
    colorList.forEach((v1) => {
      box.classList.remove(v1);
    });
    box.classList.add(v);
  });
  const color = document.querySelector(".color");
  color.appendChild(btn);
});

sizeList.forEach((v) => {
  const btn = document.createElement("button");
  btn.innerText = v;
  btn.addEventListener("click", () => {
    const box = document.querySelector(".box");
    sizeList.forEach((v1) => {
      box.classList.remove(v1);
    });
    box.classList.add(v);
  });
  const size = document.querySelector(".size");
  size.appendChild(btn);
});

radiusList.forEach((v) => {
  const btn = document.createElement("button");
  btn.innerText = v;
  btn.addEventListener("click", () => {
    const box = document.querySelector(".box");
    radiusList.forEach((v1) => {
      box.classList.remove(v1);
    });
    box.classList.add(v);
  });
  const radius = document.querySelector(".radius");
  radius.appendChild(btn);
});
