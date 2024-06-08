// web - 데이터 가져오기, 지도 확인, 시간초 재기, ...
// 동기 프로그래밍 코드 (순차적) <-> 비동기 프로그래밍 코드

// console.log("1");
// console.log("2");
// setTimeout(() => {
//   console.log("3");
// }, 1000);
// console.log("4");

// 비동기 코드

// 1. setTimeout, setInteral
// setTimeout(() => {
//   console.log("하이루");
// }, 1000);

// setInterval(() => {
//   console.log("안녕");
// }, 1000);

// Q1. HTML에 2024 06 02 15:23:03 계속 보여주도록

// setInterval(() => {
//   document.body.innerText = new Date().toLocaleString();
// }, 1000);

setInterval(() => {
  const date = new Date(); // 계속 date 변수를 만들어가기때문에 메모리는 소모는 크지않음
  const dateTag = document.querySelector(".date");
  dateTag.innerText = date.toLocaleString();
});
