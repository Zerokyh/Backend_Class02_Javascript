// 프롬프트에 아무것도 넣지 않으면, 아무것도 입력 안했어요!

// console.log(null ?? "아무것도 입력 안했어요!");

// 1. 영어점수를 입력 받고, 60점 이상 [합격 입니다. 아니면 불합격입니다.]
// const engScore = Number(prompt("1. [합|불] 영어점수를 입력해주세요"));
// const isPassScore = engScore >= 60 ? "합격입니다." : "불합격입니다.";
// console.log(`${engScore}은 ${isPassScore}`);

// 2. 정수를 입력 받고, 양수 인지 음수인지 알려주기
// const input_num = Number(prompt("2. [양|음] 정수를 입력해주세요"));
// const isPlus = input_num > 0 ? "양수" : "음수";
// console.log(`${input_num}은 ${isPlus}입니다.`);

// 3. 두 정수를 입력 받고, 큰 수를 출력하기
// const input_num1 = Number(prompt("3. [큰수] 첫번째 정수를 입력해주세요"));
// const input_num2 = Number(prompt("4. [큰수] 두번째 정수를 입력해주세요"));
// const isUpDown = input_num1 > input_num2 ? input_num1 : input_num2;
// console.log(`더 큰수는 ${isUpDown}입니다.`);

// 4. 정수를 입력 받고, 절대값으로 바꾸기
// const input_num3 = Number(prompt("4. [절대값] 정수를 입력해주세요"));
// const isAbs_num = input_num3 > 0 ? input_num3 : -input_num3;
// console.log(`${input_num3}의 절대값은 ${isAbs_num}입니다.`);

// 5. 정수를 입력 받고, 홀수인지 짝수인지 알려쥐
// const input_num4 = Number(prompt("5. [홀|짝] 정수를 입력해주세요"));
// const isOddEven = input_num4 % 2 === 1 ? "홀수" : "짝수";
// console.log(`${input_num4}은 ${isOddEven}입니다.`);

// const userName = prompt("이름 입력") || "Guest";
// console.log(`이름 : ${userName}`);

// const isLoggedIn = true; // 서버에서 로그인 가져옴
// isLoggedIn && displayUser();
