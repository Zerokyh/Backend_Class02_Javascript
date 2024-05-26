const a = () => {
  console.log("아침");
};

const b = () => {
  console.log("점심");
};

const c = () => {
  console.log("저녁");
};

// const test = document.querySelector(".test");

// test.addEventListener("click", () => {
//   a();
//   b();
//   c();
// });

// 아침 -> 점심 -> 저녁
// 점심 -> 저녁 -> 아침
// 저녁 -> 아침 -> 점심

const moring = document.querySelector(".moring");
moring.addEventListener("click", () => {
  a();
  b();
  c();
});
const lunch = document.querySelector(".lunch");
lunch.addEventListener("click", () => {
  b();
  c();
  a();
});
const dinner = document.querySelector(".dinner");
dinner.addEventListener("click", () => {
  c();
  a();
  b();
});
