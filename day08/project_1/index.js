const APIKEY = "9998fff123311f5cc4fcfb9e129b4982";
const data = [
  { cityName: "bupyeong", lat: 37.51, lon: 126.72 },
  { cityName: "fukuoka", lat: 33.59, lon: 130.4 },
  { cityName: "qingdao", lat: 36.06, lon: 120.38 },
  { cityName: "taipei", lat: 25.03, lon: 121.56 },
  { cityName: "sydney", lat: -33.86, lon: 151.2 },
];

const weatherPhoto = {
  Clear: "./image/clear.jpg",
  Rain: "./image/rain.jpg",
  Clouds: "./image/cloud.jpg",
};

data.forEach(({ cityName, lat, lon }) => {
  const btn = document.querySelector(`.${cityName}`);
  btn.addEventListener("click", () => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric`;
    const weatherAPI = fetch(URL);
    weatherAPI
      .then((value) => value.json())
      .then(({ main, weather }) => ({ main, weather }))
      .then((value) => {
        const weatherPic = document.querySelector(".whatIsWeather");
        weatherPic.style.backgroundImage = `url("${
          weatherPhoto[value.weather[0].main]
        }")`;

        const tempernature = document.querySelector(".displayTempernature");
        tempernature.innerText = `${cityName}의 현재 온도는 ${value.main.temp}℃ ,  현재 날씨는 ${value.weather[0].main}`;
      });
  });
});

setInterval(() => {
  const getTime = `${new Date().getHours().toLocaleString()}:${new Date()
    .getMinutes()
    .toLocaleString()}:${new Date().getSeconds().toLocaleString()}
      `;
  const displayClock = document.querySelector(".displayClock");
  displayClock.innerText = getTime;
});
