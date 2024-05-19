// 1. 두 수를 따로 각각 입력 받고, 합, 차, 곱을 html에
// h2태그로 3개 각각 나타내기, 폰트 색깔은 하늘색
// const input1 = Number(prompt("첫번째 수 입력"));
// const input2 = Number(prompt("두번째 수 입력"));

// const sum = input1 + input2;
// const min = input1 - input2;
// const mul = input1 * input2;

// const h2Tag_1 = document.createElement("h2");
// const h2Tag_2 = document.createElement("h2");
// const h2Tag_3 = document.createElement("h2");
// h2Tag_1.style.color = "skyblue";
// h2Tag_2.style.color = "skyblue";
// h2Tag_3.style.color = "skyblue";

// h2Tag_1.innerText = `입력 받은 ${input1}와 ${input2}의 합은 ${sum}입니다`;
// h2Tag_2.innerText = `입력 받은 ${input1}와 ${input2}의 차는 ${min}입니다`;
// h2Tag_3.innerText = `입력 받은 ${input1}와 ${input2}의 곱은 ${mul}입니다`;

// document.body.appendChild(h2Tag_1);
// document.body.appendChild(h2Tag_2);
// document.body.appendChild(h2Tag_3);

// 2. 밑변과 높이를 각각 입력 받고, 정삼각형의 넓이를
// html에 div태그로 나타내기, 폰트 사이즈는 20px,
// 폰트색깔은 초록색

// const input3 = Number(prompt("정삼각형의 밑변의 길이는?"));
// const input4 = Number(prompt("정삼각형의 높이의 길이는?"));

// const tri_sum = (input3 * input4) / 2;

// const h2Tag_4 = document.createElement("h2");
// h2Tag_4.style.color = "skyblue";

// h2Tag_1.innerText = `입력 받은 밑변 :${input3}와 높이 :${input4}의 정삼각형의 넓이는 ${tri_sum}입니다`;
// document.body.appendChild(h2Tag_4);

// - 0 + 형태의 Counter 만들기

// const btn_minus = document.createElement("button");
// const btn_cnt = document.createElement("button");
// const btn_plus = document.createElement("button");

// btn_minus.innerText = "-";
// btn_cnt.innerText = 0;
// btn_plus.innerText = "+";

// btn_minus.addEventListener("click", () => {
//   btn_cnt.innerText = Number(btn_cnt.innerText) - 1;
// });

// btn_plus.addEventListener("click", () => {
//   btn_cnt.innerText = Number(btn_cnt.innerText) + 1;
// });

// document.body.appendChild(btn_minus);
// document.body.appendChild(btn_cnt);
// document.body.appendChild(btn_plus);
