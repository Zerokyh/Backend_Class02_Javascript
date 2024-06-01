const coffeemenu = [
  { name: "americano", price: 2500, isRemained: false },
  { name: "latte", price: 3500, isRemained: false },
  { name: "vanilla latte", price: 3000, isRemained: true },
];

const nameTag = (name) => {
  const capitalizeName = name[0].toUpperCase() + name.slice(1, name.length);

  return `<h3>${capitalizeName}</h3>`;
};

const stockTag = (isRemained) => {
  const className = isRemained ? "blue" : "red";
  const text = isRemained ? "있음" : "없음";

  return `<span class=${className}>${text}</span>`;
};

// 할인 기간 3000원 이상이면 20% 할인금액 적용
const priceTag = (price) => {
  const discountPrice = price >= 3000 ? price * 0.8 : price;
  return `<h5>${discountPrice}</h5>`;
};

const coffeeTag = (v) => {
  return `<div class = "coffee">
    ${nameTag(v.name)}
    ${priceTag(v.price)}
    ${stockTag(v.isRemained)}
  </span>
  </div>`;
};

coffeemenu.forEach((v) =>
  // const menu = document.querySelector(".menu");
  // menu.insertAdjacentHTML("beforeend", coffeeTag(v));
  // 다음 줄로 요약 가능
  document.querySelector(".menu").insertAdjacentHTML("beforeend", coffeeTag(v))
);
