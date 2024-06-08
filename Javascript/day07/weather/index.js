let lat = 0.0;
let lon = 0.0;
const APIKEY = "9998fff123311f5cc4fcfb9e129b4982";
const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}`;

const bupyeong_btn = document.querySelector(".bupyeong_btn");

bupyeong_btn.addEventListener("click", () => {
  const bupyeong_lat = 37.51;
  const bupyeong_lon = 126.72;
  lat = bupyeong_lat;
  lon = bupyeong_lon;
  const weatherAPI = fetch(URL);
  weatherAPI
    .then((v) => v.json())
    .then((v) => v.weather[0].main)
    .then((v) => {
      const weather = document.querySelector(".weather");
      weather.innerText = `부평역 현재 날씨 ${v}`;
    });
});

const fukuoka_btn = document.querySelector(".fukuoka_btn");

fukuoka_btn.addEventListener("click", () => {
  const fukuoka_lat = 130.4;
  const fukuoka_lon = 33.59;
  lat = fukuoka_lat;
  lon = fukuoka_lon;
  const weatherAPI = fetch(URL);
  weatherAPI
    .then((v) => v.json())
    .then((v) => v.weather[0].main)
    .then((v) => {
      const weather = document.querySelector(".weather");
      weather.innerText = `후쿠오카 현재 날씨 ${v}`;
    });
});
