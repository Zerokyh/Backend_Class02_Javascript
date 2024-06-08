// 1. 도우 준비 0.5
const makeDough = () => {
  return new Promise((success) => {
    setTimeout(() => {
      console.log("도우 준비 완료");
      success("🥖");
    }, 500);
  });
};

// makeDough().then((v) => console.log(v));
// 2. 토마토 소스뿌리기 1
const addSauce = (dough) => {
  return new Promise((success) => {
    setTimeout(() => {
      console.log("소스 추가 완료");
      success(`${dough} + 🍅`);
    }, 1000);
  });
};

// 3. 토핑 추가하기 1
const addTopping = (doughWithSauce) => {
  return new Promise((success) => {
    setTimeout(() => {
      console.log("토핑 추가 완료");
      success(`${doughWithSauce} + 🧀`);
    }, 1000);
  });
};

// 4. 피자 굽기 0.5
const bakePizza = (doughWithSauceAndTopping) => {
  return new Promise((success) => {
    setTimeout(() => {
      console.log("피자 굽기 완료");
      success(`${doughWithSauceAndTopping} + 🍕`);
    }, 500);
  });
};

// 5. 피자 쿰척

makeDough()
  .then((v) => {
    console.log(v);
    return addSauce(v);
  })
  .then((v) => {
    console.log(v);
    return addTopping(v);
  })
  .then((v) => {
    console.log(v);
    return bakePizza(v);
  })
  .then((v) => console.log(`${v} \n맛있는 🍕 냠냠`));
