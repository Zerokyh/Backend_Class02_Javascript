// 함수 : input[str, num, bool, array, element, function] -> output

// function test() {
//   return 100;
// }

// function a() {
//   return 1;
// }

// a();
// test() * test(); // 10000

// function abc(x) {
//   x();
//   return 1;
// }

// function name(x) {
//   console.log(`${x}야 안녕!`);
// }

// function kim() {
//   console.log("김씨 안녕");
// }

// // name("장원영");
// // name("안유진");
// // kim();

// abc(kim);

// 콜백함수
// 고1,2 수학 [합성함수]
// f(g(x))
// function getTen() {
//   return 10;
// }
const getTen = () => 10;
const getOne = () => 1;

// function getOne() {
//   return 1;
// }

// function abc(x, y) {
//   return x() + y();
// }
// abc(getTen, getOne); // 11
const abc = (x, y) => x() + y();
console.log(abc(getTen, getOne));

const arr = [1, 10, "apple", "banana", 3];
const test = (x) => {
  console.log(`${x} 입니다.`);
};

// 아래 두개는 같은 의미
arr.forEach(test);
arr.forEach((v) => {
  console.log(`${v} 입니다.`);
});
