const left_btn = document.querySelector(".date_ago");
left_btn.addEventListener("click", () => {
  setInterval(({ getNumDay }) => {
    getNumDay - 1;
  });
});

setInterval(() => {
  const getNumDay = `${new Date().toString().slice(8, 10)}`;
  const calDayTag = document.querySelector(".cal_day");

  calDayTag.innerText = getNumDay;

  const getMonth = `${new Date().toString().slice(4, 7)}`;
  const calMonTag = document.querySelector(".cal_mon");
  calMonTag.innerText = getMonth;

  const getYear = `${new Date().getFullYear()}`;
  const calYearTag = document.querySelector(".cal_year");
  calYearTag.innerText = getYear;

  const getTime = `${new Date().getHours().toLocaleString()} : ${new Date()
    .getMinutes()
    .toLocaleString()} : ${new Date().getSeconds().toLocaleString()}
        `;
  const time = document.querySelector(".time");
  time.innerText = getTime;

  const getDay = `${new Date().toLocaleDateString("en-US", {
    weekday: "long",
  })}`;
  const dayTag = document.querySelector(".day");
  dayTag.innerText = getDay;
});
