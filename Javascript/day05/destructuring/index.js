// destructuring : 분해함
// 배열 구조분해
const week = ["월", "화", "수", "목", "금"];

// const [monday, ...rest] = week; // 월, 나머지
// console.log([monday, ...rest]);
// const [monday, tuesday, ...rest] = week; // 월, 화, 나머지
// console.log([monday, tuesday, ...rest]);
// const [monday, rest] = week; // 월, 화
// console.log([monday, rest]);

// 객체 구조분해
// const kimbab = {
//   name: "참치김밥",
//   ingredients: ["참치", "김", "밥", "계란"],
//   price: 4000,
//   sidedish: {
//     main: "김치",
//     soup: "된장국",
//   },
// };

// // 구조분해 후 renaming
// // const { name: kimbabName, price, ingredients, sidedish } = kimbab;
// const [tuna, ...rest] = kimbab.ingredients;

// const { soup: koreanSoup } = kimbab.sidedish;
// const {
//   sidedish: { main, soup },
// } = kimbab;

// console.log(main); // 김치

const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 35 },
];

// 1. v를 쓰지않고, forEach 이름과 age 콘솔로 나타내기
// users.forEach(({ name, age }) => console.log(`${name} and ${age}`));

// 2. name => englishName, age => koreaAge
// users.forEach(({ name: englishName, age: koreaAge }) =>
//   console.log(`${englishName} and ${koreaAge}`)
// );

// 3. [{name:alice, age:25}, {name: "Bob", age: 30}, {name: "Charlie", age: 35}]
const ori = users.map(({ name, age }) => {
  return { name: name, age: age };
});

// 축약 버전
const a = users.map(({ name, age }) => ({ name: name, age: age }));

// 더 줄일 수 있음
const b = users.map(({ name, age }) => ({ name, age }));
// console.log(a);

// key : name -> english, age -> old
const c = users.map(({ name, age }) => ({ english: name, old: age }));

// 축약
const d = users.map(({ name: english, age: old }) => ({ english, old }));

// 국적 추가, 국적이 없으면 Korean으로 채워짐
const e = users.map(({ name, age, nation = "Korean" }) => ({
  name,
  age,
  nation,
}));
