// 변수(variable)： 데이터를　기억하는　공간，　닉네임
// const 이름 ＝ 데이터 [기억 한번만]
// let 이름 = 데이터 [기억 여러번]
// var 이름 = 데이터 [절대절대 쓰지말기]

// const a = 100;
// a = 200; (x)

// let b = 100;
// b = 200; (o)

// 인간 : 연산[뇌] + 기억[뇌]  => 2 + 3 = 5
// 컴퓨터 : 연산[CPU] + 기억[RAM]

// kakao.file[하드디스크]
// RAM[kakao/youtube/game/...] <=> CPU

// 변수　이름　문법
// １. 예약어［키워드］ 안됨！
// ２. 특수문자　안됨　＿（언더바）빼고
// ３. 띄어쓰기　안됨　const　mintchoco
// ４. 숫자로　시작안됨　ex）　const 1a(x) a1(o)
// ５. 변수이름　중복　안됨

// 변수 이름 국룰
// 1. 의미 있는 단어로 사용
// ex) const a(x), const button(x) white_button(o)
// 2. 두단어 합칠때, 낙타표기법, 뱀표기법사용
// - 낙타 : milkCoffee
// - 뱀: milk_coffee
// 3. 소문자로 시작하기

// 유저에게 내용과 색을 두개 각각 입력받고,
// html에 h1 ~ h3 태그 각각 3개 만들기
// const text = prompt("화면에 띄울 내용을 입력해주세요.");
// const color = prompt("색을 입력해주세요.");

// const h1tag = document.createElement("h1");
// const h2tag = document.createElement("h2");
// const h3tag = document.createElement("h3");

// h1tag.innerText = text;
// h2tag.innerText = text;
// h3tag.innerText = text;

// h1tag.style.color = color;
// h2tag.style.color = color;
// h3tag.style.color = color;

// document.body.appendChild(h1tag);
// document.body.appendChild(h2tag);
// document.body.appendChild(h3tag);

// 유저에게 만들고 싶은 태그 물어보고
// 원하는 안의 내용도 물어보고
// 원하는 폰트 색깔 만들고,
// html에 만들기

const tag = prompt("태그 입력");
const text1 = prompt("내용 입력");
const color1 = prompt("폰트 색깔 입력");

const madeTag = document.createElement(tag);

madeTag.innerText = text1;
madeTag.style.color = color1;
document.body.appendChild(madeTag);
