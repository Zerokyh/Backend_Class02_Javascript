// const h1 = document.createElement("h1");
// const buttonName = "집가기"
// // h1.innerText = "<button>버튼</button>";
// h1.innerHTML = "<button>버튼</button>";

// document.body.appendChild(h1);

// const friends = ["kim", "lee", "park"];

// // Template Literal
// const html = `
// <h1>My Friend</h1>
// <ul>
//     ${friends.map((v) => `<li>${v}</li>`).join("")}
// </ul>
// `;
// console.log(html);
// document.body.innerHTML = html;

// 1. createElement -> appendChild
// 2. innerHtml
// 3. insertAdjacentHTML  // 사용 빈도수 조금 더 높음
const menu = document.querySelector(".menu");

// afterbegin   : 첫번째 자식 앞에 넣기
// beforeend    : 마지막 자식 뒤에 넣기
const friends = ["kim", "lee", "park"];

// Template Literal
const html = `
<h1>My Friend</h1>
<ul>
    ${friends.map((v) => `<li>${v}</li>`).join("")}
</ul>
`;
// menu.insertAdjacentHTML("beforeend", `<h1>안녕하세요</h1>`);
// menu.insertAdjacentHTML(
//   "beforeend",
//   `
// <div>
// <h1>안녕하세요</h1>
// <h2>오늘 토욜이네요</h2>
// <span>ㄹㅇㅋㅋ</span>
// </div>
// `
// );
menu.insertAdjacentHTML("beforeend", html);
