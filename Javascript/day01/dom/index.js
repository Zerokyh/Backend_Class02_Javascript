// js가 html을 만들기 위한 장소 : document

// h1 태그 만들기
// const h1tag = document.createElement("h1");
// h1tag.innerText = "자바스크립트 수정중 👌";
// document.body.appendChild(h1tag);

// 버튼을 만들고, 안에 내용은 클릭! body에 나타내기
// const btn = document.createElement("button");
// btn.innerText = "클릭!";
// btn.style.backgroundColor = "skyblue";
// btn.style.padding = "10px";
// btn.style.fontSize = "20px";
// btn.style.border = "1px solid transparent";
// document.body.appendChild(btn);

// const a = prompt("점심 뭐먹을거?");
// console.log(a);

// prompt로 배경색깔을 물어보고 헥사코드.
// ex) red, #ffedfed
// div -> width : 100px, height: 100px, background: red
// const color = prompt("BOX의 배경색을 무엇으로 할까요?");
// const box = document.createElement("div");
// box.style.width = "100px";
// box.style.height = "100px";
// box.style.backgroundColor = color;
// document.body.appendChild(box);

// 폰트 색깔 물어보고
// 버튼 안에 들어갈 내용 물어보고
// 버튼을 html에 보여주기
// const font_color = prompt("폰트 색깔을 무엇으로 할까요?");
// const btn_text = prompt("버튼안에 무슨 내용을 넣을까요?");

// const btn = document.createElement("button");
// btn.style.color = font_color;
// btn.innerText = btn_text;
// btn.style.backgroundColor = "transparent";
// btn.style.width = "200px";
// btn.style.height = "100px";
// btn.style.border = `1px solid ${font_color}`;
// document.body.appendChild(btn);

// 높이 물어보기  주의 100px
// 넓이 물어보기
// 배경색 물어보기
// 안에 들어갈 내용 물어보기
// div태그로 위의 내용을 고려해서 나타내기

const box_height = prompt("높이를 설정해주세요 (px 단위까지 입력해주세요)");
const box_width = prompt("넓이를 설정해주세요 (px 단위까지 입력해주세요)");
const box_color = prompt("배경색은 무엇으로 할까요?");
const box_text = prompt("안에 무엇이 나오게 할까요?");
const box = document.createElement("div");
box.style.width = box_width;
box.style.height = box_height;
box.style.backgroundColor = box_color;
box.innerText = box_text;
box.style.display = "flex";
box.style.justifyContent = "center";
box.style.alignItems = "center";
document.body.appendChild(box);
