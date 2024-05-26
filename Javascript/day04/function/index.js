// 함수 : input[str, bool, element, null] -> output[str, bool, element, null]
// 일반함수
// (인풋이 있으면 아웃풋이 나온다)
// function hello(x) {
//   return `${x} 안녕!`;
// }

// const a = hello("여누"); // 여누 안녕!
// const b = hello("JS"); // JS 안녕!
// console.log(a);
// console.log(b);

// 1. x를 넣으면 + 100 돌려주는 함수
function plus100(x) {
  return x + 100;
}
// 2. x를 넣으면 대문자화시키고 + '😆'

function upperText(x) {
  return x.toUpperCase() + "😆";
}

// const c = plus100(300); // 400
// const d = upperText("apple"); // APPLE😆
// console.log(c);
// console.log(d);

// 3. 배열 x를 넣으면 두번째 원소를 돌려주기
function returnTwo(x) {
  return x[1];
}
// 4. x를 넣으면 + 럭키비키잖앙을 붙혀서 돌려주기
function wonyoungThink(x) {
  return x + "럭키비키잖앙😆";
}

const e = returnTwo(["apple", "banana"]);
const f = wonyoungThink("오늘 일요일 수업인데");

console.log(e);
console.log(f);
