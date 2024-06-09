const APIKEY = "9998fff123311f5cc4fcfb9e129b4982";
const data = [
  { cityName: "bupyeong", lat: 37.51, lon: 126.72 },
  { cityName: "fukuoka", lat: 33.59, lon: 130.4 },
  { cityName: "qingdao", lat: 36.06, lon: 120.38 },
  { cityName: "taipei", lat: 25.03, lon: 121.56 },
  { cityName: "sydney", lat: -33.86, lon: 151.2 },
];

data.forEach(({ cityName, lat, lon }) => {
  const btn = document.querySelector(`.${cityName}`);
  btn.addEventListener("click", () => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}`;
    const weatherAPI = fetch(URL);
    weatherAPI
      .then((value) => value.json())
      .then((value) => value.weather[0].main)
      .then((value) => {
        const weatherPic = document.querySelector(".whatIsWeather");
        if (value == "Clouds") {
          weatherPic.classList.toggle("cloud");
          weatherPic.classList.toggle("clear");
          weatherPic.classList.toggle("rain");
        } else if (value == "Clear") {
          weatherPic.classList.toggle("clear");
        } else if (value == "Rain") {
          weatherPic.classList.toggle("rain");
        }
      });
  });
});

data.forEach(({ cityName, lat, lon }) => {
  const btn = document.querySelector(`.${cityName}`);
  btn.addEventListener("click", () => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric`;
    const weatherAPI = fetch(URL);
    weatherAPI
      .then((value) => value.json())
      .then((value) => value.main.temp)
      .then((value) => {
        const tempernature = document.querySelector(".displayTempernature");
        tempernature.innerText = `${cityName}의 현재 온도는 ${value}℃`;
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
