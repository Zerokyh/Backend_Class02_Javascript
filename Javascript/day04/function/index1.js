// 화살표 함수
// () => {}

// const plus100 = (x) => {
//   return x + 100;
// };

const plus100_ = (x) => x + 100;

plus100(200); // 300

// 2. 원소 3번째꺼 돌려주기
const getThrid = (x) => {
  return x[2];
};

const getThrid_ = (x) => x[2];
getThrid(["a", "b", "c"]);

// 3. 소문자화 시키고 😎 붙이기
const lowerText = (x) => {
  return x.toLowerCase() + "😎";
};
const lowerText_ = (x) => x.toLowerCase() + "😎";
lowerText("APPLE");
