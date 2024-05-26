// Array
// const arr = [1, 2, 3, 4, 5];
// const fruits = ["apple", "banana", "orange"];
// const double_arr = [
//   ["아메리카노", "헤이즐넛아아"],
//   ["딸기스무디", "초코스무디"],
// ];
// // double_arr[0][1]
// arr.forEach((v) => {
//   console.log(v);
// });
// arr.some((v) => {
//   return v < 5;
// });

// arr.every((v) => {
//   return v < 5;
// });
// // some은 하나라도 true면 true로 돌려준다
// // every는 모두 true여야 true

// "hello".includes("h");
// "world".repeat(5);

// const newDiv = document.createElement("div");
// newDiv.appendChild();
// newDiv.classList.toggle("red");

// const colorNameList = [
//   "Light Greenish Blue",
//   "Faded Poster",
//   "Green Darner Tail",
//   "Shy Moment",
//   "City Lights",
// ];

// const colorList = ["#55efc4", "#81ecec", "#74b9ff", "#a29bfe", "#dfe6e9"];

// colorNameList.forEach((v) => {
//   const fstBox = document.querySelector(".firstBox");
//   fstBox.style.display = "flex";

//   const box = document.createElement("div");
//   box.innerText = v;
//   box.style.width = "100px";
//   box.style.height = "100px";

//   document.body.appendChild(box);
//   fstBox.appendChild(box);
// });

const colorList = [
  "#55efc4",
  "#81ecec",
  "#74b9ff",
  "#a29bfe",
  "#dfe6e9",
  "#00b894",
  "#00cec9",
  "#0984e3",
  "#6c5ce7",
  "#b2bec3",
];

colorList.forEach((v) => {
  const newDiv = document.createElement("div");
  newDiv.classList.add("box");
  newDiv.style.backgroundColor = v;
  newDiv.addEventListener("click", () => {
    window.alert(`${v} 색깔이 클릭되었습니다.`);
  });

  const palette = document.querySelector(".palette");
  palette.appendChild(newDiv);
});
