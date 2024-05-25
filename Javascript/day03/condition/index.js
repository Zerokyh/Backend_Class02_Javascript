// condition[조건문]
// const a = Number(prompt("숫자 입력 :"));

// if (a > 0) {
//   alert("0보다 큽니다.");
// } else if (a == 0) {
//   alert("0입니다.");
// } else {
//   alert("0 또는 0보다 작습니다.");
// }

// prompt로 영어 점수를 입력받고

// 90점 이상 'A'
// 80점 이상 'B'
// 70점 이상 'C'
// 60점 이상 'D'
// 60점 미만 '나락'
// const eng = Number(prompt("영어 점수를 입력해주세요"));

// if (eng >= 90) {
//   alert("A");
// } else if (eng >= 80) {
//   alert("B");
// } else if (eng >= 70) {
//   alert("C");
// } else if (eng >= 60) {
//   alert("D");
// } else {
//   alert("나락");
// }

// 유저에게 비밀번호 설정을 물어보고,
// const special = ["!", "#", "$"];

// special.forEach((v)=>[])
// some은 하나라도 true면 true로 돌려준다
// special.some((v) => {
//   return v == "$";
// });
// // true

// // every는 모두 true여야 true
// special.every((v) => {
//   return v == "!";
// });
// // false

// special.every((v) => {
//   return v != "@";
// });
// // true

// const number = [1, 2, 3, 4, 5];
// number.some((v) => {
//   return v > 4;
// });
// // true

// number.some((v) => {
//   return v % 2 == 1;
// });
// // true

// number.every((v) => {
//   return v < 6;
// });
// true

// 1. 비밀번호 길이가 8글자 이상이고 // 비밀번호가 짧습니다.
// 2. 특수문자 !,#,$ 가 하나 들어가야하고 // 특수문자!#$가 없습니다.
// 3. I로 시작하고, T로 끝나야하고 // I와 T를 꼭 시작과 끝에 넣어야합니다.
// 위의 조건을 모두 통과하면 비밀번호 설정완료!

// const password = prompt("비밀번호를 입력해주세요");

// const isLengthOver8 = password.length >= 8;
// const hasSpecialChar =
//   password.includes("!") || password.includes("#") || password.includes("$");
// const isValidIT = password.startsWith("I") && password.endsWith("T");

// if (!isLengthOver8) {
//   alert("비밀번호가 짧음");
// } else if (!hasSpecialChar) {
//   alert("특수문자 !#$가 포함되어 있지 않습니다.");
// } else if (!isValidIT) {
//   alert("I와 T를 꼭 시작과 끝에 넣어야합니다.");
// } else {
//   alert("비밀번호 설정완료!😆😆");
// }

// some으로 리펙토링
// const password = prompt("비밀번호를 입력해주세요");

// const isLengthOver8 = password.length >= 8;
// const hasSpecialChar = ["!", "#", "$"].some((v) => {
//   return password.includes(v);
// });

// or
// "!#S".split("").some((v)=>{
//   return password.includes(v)
// })
// const isValidIT = password.startsWith("I") && password.endsWith("T");

// if (!isLengthOver8) {
//   alert("비밀번호가 짧음");
// } else if (!hasSpecialChar) {
//   alert("특수문자 !#$가 포함되어 있지 않습니다.");
// } else if (!isValidIT) {
//   alert("I와 T를 꼭 시작과 끝에 넣어야합니다.");
// } else {
//   alert("비밀번호 설정완료!😆😆");
// }
