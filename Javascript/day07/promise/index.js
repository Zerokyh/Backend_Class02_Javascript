// 비동기

// Array, Object, Element, Date, Promise
// Promise : 비동기 작업이 맞이할 미래의 완료 또는 실패와 그 결과 값 나타냄
// Promise에서는 상태가 3가지 : 대기중[pending], 성공[Fulfilled], 실패[Rejected]

// const a = new Promise((success, fail) => {
//   //   success("떡볶이");
//   //   setTimeout(() => {
//   //     success("떡볶이");
//   //   }, 3000);
//   //   fail("크로플");
// });

// console.log(a); // 아직 모름 : pending(대기중) 상태

// const a 성공 ('탕후루')
// const a = new Promise((success, fail) => {
//   success("탕후루");
// });
// console.log(a);
// const b 실패 ('사탕')
// const b = new Promise((success, fail) => {
//   fail("사탕");
// });
// console.log(b);

// const a = new Promise((success, fail) => {
//   // 백엔드에 데이터를 가져오는 코드
//   setTimeout(() => {
//     success("탕후루");
//   }, 3000);
// });
// console.log(a);

// a.then((v) => console.log(v));

// const b = new Promise((success, fail) => {
//   setTimeout(() => {
//     success(10);
//   }, 1000);
// });

// b.then((v) => {
//   console.log(v);
//   return v * 10;
// }).then((v) => {
//   console.log(v);
// });

const b = new Promise((success, fail) => {
  setTimeout(() => {
    success({ name: "americano", price: 3000 });
  }, 1000);
});

// b.then((v) => {
//   v.name = v.name.toUpperCase(); // name을 대문자화 시키고 return 해주기
//   return v;
// })
//   .then((v) => {
//     v.price *= 2; // price 2배
//     return v;
//   })
//   .then((v) => {
//     console.log(v);
//   });

b.then((v) => console.log(v)).catch((v) => console.log(v));

const c = { price: 3000 };
console.log(c); // object -> string으로 자동형변환 적용
console.log(`데이터: ${c}`); // object로 출력
console.log(`데이터: ${JSON.stringfy(c)}`); // string으로 변환
