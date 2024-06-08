// fetch(url)
// url을 넣으면 데이터(Promise)를 돌려주는 함수

// response type
// const a = fetch("https://fakerapi.it/api/v1/addresses?_quantity=10");
// a.then((v) => v.json()).then((v) =>
//   console.log(v)
// );

// street, streetName, country 만 남게 테이블만들기
const getData = fetch("https://fakerapi.it/api/v1/addresses?_quantity=1000");

// getDate는 Promise 타입으로 데이터를 돌려 받는다
getData
  .then((v) => v.json()) // v를 JSON로 형변환
  .then((v) => v.data)
  //   .then((v) => console.log(v));
  .then((v) =>
    v.forEach(({ street, streetName, country }) =>
      bindData(street, streetName, country)
    )
  )
  .catch((v) => console.log("너무 많이 보내지 마세요"));

const bindData = (street, streetName, country) => {
  const table = document.querySelector(".table");
  table.insertAdjacentHTML(
    "beforeend",
    `
    <div class="table__data">
        <div class="street">${street}</div>
        <div class="streetName">${streetName}</div>
        <div class="country">${country}</div>
      </div>
    `
  );
};
