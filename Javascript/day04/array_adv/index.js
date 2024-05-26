const arr = [1, 3, 5, 7, 9];
const fruits = [
  "apple",
  "banana",
  "orange",
  "kiwi",
  "tomato",
  "grape",
  "strawberry",
];

// forEach, every, some, map, filter

// map(바꾸기)
const a1 = arr.map((v) => v * 10);
console.log(a1);

const a2 = arr.map((v) => v ** v);
console.log(a2);

// 6보다 작으면 10 더하고, 아니면 10 곱해주기
const a3 = arr.map((v) => (v < 6 ? v + 10 : v * 10));
console.log(a3);

arr.map((v, i) => {}); // i는 몇번째인지 찍힘
// 짝수 번째는 2배 홀수 번째 3배
const a4 = arr.map((v, i) => (i % 2 == 0 ? v * 2 : v * 3));
console.log(a4);

// 알파벳 a 포함되면 대문자화 시키고, 아니면 단어의 길이로 바꿔주세요
const a5 = fruits.map((v) => (v.includes("a") ? v.toUpperCase() : v.length));
console.log(a5);

// filter
const b1 = arr.filter((v) => v > 5);
console.log(b1);

const b2 = arr.filter((v, i) => i % 2 == 0);
// const a7 = arr.filter((v, i) => !(i % 2)); // 위와 동일
console.log(b2);

// 과일에서 6글자 이상인 애들만 걸러주고, 대문자화 시키기
const b3 = fruits.filter((v) => v.length >= 6).map((v) => v.toUpperCase());
console.log(b3);

// 과일에서 6글자 이상인 애들만 걸러주고, 모든 요소들이 a 또는 o를 포함 하는지 궁금

const alpha = ["a", "b", "c", "d", "e", "f", "g", "h"];

const b4 = fruits
  .filter((v) => v.length == 6)
  .every((v) => v.includes("a") || v.includes("o"));
console.log(b4);

const b5 = alpha
  .filter((v) => v.length == 6)
  .every((v) => {
    alpha.some((x) => v.includes(x));
  });
console.log(b5);

// const c = Array();
const c = Array(10);
// console.log(c);
const c1 = Array(10).fill(0); // 배열을 0으로 채움
console.log(c1);

// [0] ~ [9]
const c2 = Array(10)
  .fill(0)
  .map((v, i) => i);

console.log(c2);

// 0 ~ 100 홀수만
// const c3 = Array(101)
//   .fill(0)
//   .map((v, i) => i)
//   .filter((v) => v % 2 == 1);
const c3 = Array(101)
  .fill(0)
  .map((v, i) => i)
  .filter((v) => v % 2);
console.log(c3);

// 문자열 -> 배열
// str -> array
// 첫번째 방법 : split
const d = "americano".split("");
console.log(d);

// 두번째 방법 : Array.from
const d1 = Array.from("americano");
console.log(d1);

// 세번째 방법 : [...]  ( 자주 사용됨 )
const d2 = [..."americano"];
console.log(d2);

// americano에서 a만 빼기
const d3 = [..."americano"].filter((v) => v != "a");
console.log(d3);

// array -> str
// 1. .join
const e = ["coffee", "cookie"].join("");
console.log(e);

// 2. toString (여기는 사이에, 가 포함되므로 안쓰임)
const e1 = ["coffee", "cookie"].toString();
console.log(e1);

// str <-> array
// "cccCCC" -> "CCCccc"
// "abCdEfghIJ" -> "ABcDeFGHij"

const change = (word) =>
  [...word]
    .map((v) => (v == v.toUpperCase() ? v.toLowerCase() : v.toUpperCase()))
    .join("");
console.log(change);

// n k result
// 10 3 [3, 6, 9]
// 15 5 [5, 10, 15]
// 12 4 [4, 8, 12]
// const multi = (n, k) =>
//   Array(n)
//     .fill(0)
//     .map((v, i) => i + 1)
//     .filter((v) => v % k == 0);
const makeArr = (n, k) =>
  Array(n)
    .fill(0)
    .map((v, i) => i + 1)
    .filter((v) => !(v % k));
console.log(makeArr);

const a = [1, 2, 3, 4, 5];

// 누적
a.reduce((acc, curr) => {
  console.log(`acc:${acc} curr:${curr}`);
  return acc + curr;
});
a.reduce((acc, curr) => acc + curr);

// 1 ~ 100 누적
const numList = Array(100)
  .fill(0)
  .map((v, i) => i + 1)
  .reduce((acc, curr) => acc + curr);

// console.log(numList);
console.log(numList);

// 과일에서 모음을 뺀 문자들 합치기
const fruits1 = ["apple", "banana", "orange", "kiwi", "tomato"];
const result = fruits1
  .map((v) =>
    [...v].filter((v1) => ![..."aeiou"].some((v2) => v2 == v1)).join("")
  )
  .reduce((acc, curr) => acc + curr);
console.log(result);
