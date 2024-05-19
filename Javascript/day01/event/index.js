// Event

// const button = document.createElement("button");
// button.innerText = "버튼임";

// button.addEventListener("click", () => {
//   window.alert("ㄹㅇㅋㅋ");
// });

// button.addEventListener("mouseover", () => {
//   console.log("마우스 올라감");
// });

// document.body.appendChild(button);

// div 태그 - width : 100px, height : 100px, bg: red
//          - 클릭을 하면, bg:blue
//          - 마우스가 벗어나면 bg:red로 원복
// const box = document.createElement("div");
// box.style.width = "100px";
// box.style.height = "100px";
// box.style.backgroundColor = "red";

// box.addEventListener("click", () => {
//   box.style.backgroundColor = "blue";
// });

// box.addEventListener("mouseleave", () => {
//   box.style.backgroundColor = "red";
// });

// document.body.appendChild(box);

// button 태그 만들고, 안에 내용을 '파란상자'
// event 클릭을 하면, html div width: 100px, height: 100px, bg : blue 생김
// const button = document.createElement("button");

// button.innerText = "파란상자";

// button.addEventListener("click", () => {
//   const box = document.createElement("div");
//   box.style.width = "100px";
//   box.style.height = "100px";
//   box.style.backgroundColor = "blue";
//   box.style.margin = "10px";
//   document.body.appendChild(box);
// });

// document.body.appendChild(button);

// 버튼을 3가지 만들고, 각각 이름은 사이트 색깔 이름 넣기
// div : 100px X 100px, bg : black
// 각각 클릭을 하면, 위에 div태그의 bg가 클릭한 이름의 색깔로 변경하기
// const mintLeaf = document.createElement("button");
// const robinsEggBlue = document.createElement("button");
// const electronBlue = document.createElement("button");

// mintLeaf.innerText = "mintLeaf 변경";
// robinsEggBlue.innerText = "robinsEggBlue 변경";
// electronBlue.innerText = "electronBlue 변경";

// mintLeaf.style.backgroundColor = "transparent";
// robinsEggBlue.style.backgroundColor = "transparent";
// electronBlue.style.backgroundColor = "transparent";

// mintLeaf.style.border = "0px";
// mintLeaf.style.backgroundColor = "#00b894";
// mintLeaf.style.margin = "10px";
// mintLeaf.style.padding = "10px";
// mintLeaf.style.borderRadius = "20px";

// robinsEggBlue.style.border = "0px";
// robinsEggBlue.style.backgroundColor = "#00cec9";
// robinsEggBlue.style.margin = "10px";
// robinsEggBlue.style.padding = "10px";
// robinsEggBlue.style.borderRadius = "20px";

// electronBlue.style.border = "0px";
// electronBlue.style.backgroundColor = "#0984e3";
// electronBlue.style.margin = "10px";
// electronBlue.style.padding = "10px";
// electronBlue.style.borderRadius = "20px";

// const box = document.createElement("div");
// box.style.width = "100px";
// box.style.height = "100px";
// box.style.backgroundColor = "black";

// mintLeaf.addEventListener("click", () => {
//   box.style.backgroundColor = "#00b894";
// });
// robinsEggBlue.addEventListener("click", () => {
//   box.style.backgroundColor = "#00cec9";
// });
// electronBlue.addEventListener("click", () => {
//   box.style.backgroundColor = "#0984e3";
// });

// document.body.appendChild(mintLeaf);
// document.body.appendChild(robinsEggBlue);
// document.body.appendChild(electronBlue);
// document.body.appendChild(box);

// div => w:100 h:100 border: 1px solid black bg:white
// button => 내용: 색깔 추가
// button's event => prompt로 물어봄 색깔 헥사코드 입력

// button[#123123]을 가진 색깔이 나타남 div의 bg가 변경
const addbtn = document.createElement("button");
const box = document.createElement("div");

addbtn.innerText = "색깔 추가";

box.style.width = "100px";
box.style.height = "100px";
box.style.margin = "10px";
box.style.border = "1px solid black";
box.style.backgroundColor = "white";

addbtn.addEventListener("click", () => {
  const color = prompt("변경할 색을 입력해주세요");
  const btn = document.createElement("button");
  btn.innerText = color;
  btn.addEventListener("click", () => {
    box.style.backgroundColor = color;
  });
  document.body.appendChild(btn);
});

document.body.appendChild(box);
document.body.appendChild(addbtn);
