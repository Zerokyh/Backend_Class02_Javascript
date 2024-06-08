const getData = fetch("https://fakerapi.it/api/v1/credit_cards?_quantity=1000");

getData
  .then((v) => v.json())
  .then((v) => v.data)
  .then((v) =>
    v.forEach(({ type, number, expiration, owner }) =>
      bindData(type, number, expiration, owner)
    )
  )
  .catch((v) => alert("서버 터짐 ㅅㄱ"));

const bindData = (type, number, expiration, owner) => {
  const table = document.querySelector(".table");
  const maskedNumber = "****" + [...number].slice(4, number.length).join("");
  const newExp = new Date().getFullYear() + "/" + expiration;
  table.insertAdjacentHTML(
    "beforeend",
    `
      <div class="table__data">
          <div class="type">${type}</div>
          <div class="number">${maskedNumber}</div>
          <div class="expiration">${newExp}</div>
          <div class="owner">${owner}</div
          </div>
      `
  );
};
