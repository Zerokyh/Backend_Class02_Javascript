const coffeemenu = [
  { name: "아메리카노", price: 2500, isRemained: false },
  { name: "라떼", price: 3500, isRemained: false },
  { name: "바닐라라떼", price: 3000, isRemained: true },
];

// 내가 만든 코드
// const menu = coffeemenu.map((v) => ({
//   coffeeName: v.name,
//   coffeePrice: v.price,
//   coffeeIsRemained: v.isRemained,
// }));

// menu.forEach((v) => {
//   const h3Tag = document.createElement("h3");
//   h3Tag.innerText = v.coffeeName;

//   const h5Tag = document.createElement("h5");
//   h5Tag.innerText = v.coffeePrice;

//   const spanTag = document.createElement("span");
//   spanTag.innerText = v.coffeeIsRemained;

//   const box = document.createElement("div");
//   box.appendChild(h3Tag);
//   box.appendChild(h5Tag);
//   box.appendChild(spanTag);

//   const container = document.querySelector(".menu");
//   container.appendChild(box);
// });

coffeemenu.forEach((v) => {
  const newDiv = document.createElement("div");
  newDiv.className = "coffee";

  const h3 = document.createElement("h3");
  h3.innerText = v.name;

  const h5 = document.createElement("h5");
  h5.innerText = v.price;

  const span = document.createElement("span");
  span.innerText = `남은 재고 : ${v.isRemained ? "있음" : "없음"}`;

  newDiv.appendChild(h3);
  newDiv.appendChild(h5);
  newDiv.appendChild(span);

  const menu = document.querySelector(".menu");
  menu.appendChild(newDiv);
});
