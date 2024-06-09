// setInterval(() => {
//   const date = new Date();
//   const time = date.toLocaleString();
//   const timeTag = document.querySelector(".time");
//   timeTag.innerText = time;
// }, 1000);

setInterval(() => {
  const getTime = `${new Date().getHours().toLocaleString()}:${new Date()
    .getMinutes()
    .toLocaleString()}:${new Date().getSeconds().toLocaleString()}
      `;
  const dateTag = document.querySelector(".time");
  dateTag.innerText = getTime;
});
