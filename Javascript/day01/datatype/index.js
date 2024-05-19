// const 변수이름 = 데이터[기본 + 참조]
// 기본 타입 : 숫자, 문자
// 타입 변환

// 1. 숫자 타입
// const a = 7;
// const b = 3.14;
// const c = 12392138231;

// 2. 문자 타입
// const d = '124132543';
// const e = "바닐라라떼";
// const f = `민트`;

// const g = `내 최애 음료는: ${e}`;
// console.log(g);

// 프롬프트를 이용해서
// 1. 당신의 mbti?
// const mbti = prompt("당신의 mbti?");

// 2. 당신의 최애 음식?
// const food = prompt("당신의 최애 음식?");

// alert으로 당신의 mbti는 ~~ , 최애 음식 ~~ 이군요😆!
// window.alert(`당신의 mbti는 ${mbti} , 최애 음식 ${food} 이군요😆!`);

// 프롬프트를 이용해서
// 오늘의 날짜는 무엇인가요
// const today = prompt("오늘의 날짜는 무엇인가요?");

// 오늘의 일정은 무엇인가요
// const plan = prompt("오늘의 일정은 무엇인가요?");

// 오늘의 날짜는 {}이고, {}을 하실예정이시군요!
// window.alert(`오늘의 날짜는 ${today}이고, ${plan}을 하실예정이시군요!`);

// 첫번째 수 입력
// const firstNum = prompt("첫번째 수 입력");

// 두번째 수 입력
// const secondNum = prompt("두번째 수 입력");

// 두 수의 합은 ~~입니다.

// const numFirst = Number(firstNum);
// const numSecond = Number(secondNum);

// const sum = Number(firstNum) + Number(secondNum);

// alert(`두 수의 합은 ${numFirst + numSecond} 입니다.`);

// 1. 몇살이셈? -? 20
// html에 h1태그 2005년생이시군요 출력
const age = prompt("몇살이셈?");
const year = 2024 - Number(19 + age);

const h1Tag = document.createElement("h1");
h1Tag.innerText = `${year}년생이시군요`;
document.body.appendChild(h1Tag);

// 2. 정사각형의 한변의 길이 입력 -> 10
// html에 정사각형의 넓이는 100입니다.
const recDic = prompt("정사각형 한변의 길이는?");
const h1TagRec = document.createElement("h1");

const sum = Number(recDic * recDic);
h1TagRec.innerText = `정사각형의 넓이는 ${sum}입니다.`;
document.body.appendChild(h1TagRec);
