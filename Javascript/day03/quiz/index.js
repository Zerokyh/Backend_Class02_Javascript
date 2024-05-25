// const fruits = ["사과", "오렌지", "파인애플", "키위", "망고", "아보카도"];

// 사과 버튼
// 오렌지 버튼
// 파인애플 버튼
// ...
// 각 버튼을 누르면 .. 버튼이 클릭되었습니다를 출력
// const span = document.createElement("span");
// fruits.forEach((fruit) => {
//   const btn = document.createElement("button");

//   btn.innerText = fruit;
//   document.body.appendChild(btn);
//   btn.addEventListener("click", () => {
//     span.innerText = `${fruit}버튼이 클릭되었습니다`;
//   });
// });

// document.body.appendChild(span);

// fruits.forEach((v) => {
//   const btn = document.createElement("button");
//   btn.innerText = v;
//   btn.addEventListener("click", () => {
//     window.alert(`${v}과일이 클릭되었습니다.`);
//   });
//   document.body.appendChild(btn);
// });

// 각 버튼 만들고 버튼을 누를때마다 total의 금액이 추가되는것
const coffee = ["아메리카노 3000", "라떼 4000", "바닐라 5000"];

// coffee.forEach((v) => {
//   const btn = document.createElement("button");
//   const menu = v.split(" ");
//   btn.innerText = menu[0];
//   btn.addEventListener("click", () => {
//     const total = document.querySelector(".total");
//     cnt.innerText = Number(total.innerText) + Number(menu[1]);
//   });
//   document.body.appendChild(btn);
// });

coffee.forEach((v) => {
  const btn = document.createElement("button");
  btn.innerText = v;
  btn.addEventListener("click", () => {
    const total = document.querySelector(".total");
    const price = Number(v.split(" ")[1]);

    total.innerText = Number(total.innerText) + price;
  });
  document.body.appendChild(btn);
});
