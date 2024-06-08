// 피자 만들기
// 1. 도우 준비
const prepareDough = () => {
  return new Promise((success) => {
    setTimeout(() => {
      console.log("도우 준비 완료");
      success("🥖");
    }, 1000);
  });
};

// prepareDough().then((v) => console.log(v));

// 2. 토마토 소스 추가
const addSauce = (dough) => {
  return new Promise((success) => {
    setTimeout(() => {
      console.log("소스 추가 완료");
      success(`${dough} + 🍅`);
    }, 2000);
  });
};

// prepareDough()
//   .then((v) => {
//     return addSauce(v);
//   })
//   .then((v) => console.log(v));

// addSauce().then((v) => console.log(v));
// 3. 토핑 추가
const addTopping = (doughWithSauce) => {
  return new Promise((success) => {
    setTimeout(() => {
      console.log("피자 토핑 추가 완료");
      success(`${doughWithSauce} + 🧀`);
    }, 500);
  });
};

// 4. 피자 굽기
const bakePizza = (doughWithSauceAndTopping) => {
  return new Promise((success) => {
    setTimeout(() => {
      console.log(`${doughWithSauceAndTopping} 피자 굽기 완료`);
      success(`🍕`);
    }, 1000);
  });
};

prepareDough()
  .then((v) => {
    return addSauce(v);
  })
  .then((v) => {
    return addTopping(v);
  })
  .then((v) => {
    return bakePizza(v);
  })
  .then((v) => {
    console.log(`${v} 라니 러키비키잔앙 ${v} 추압추압`);
  });

// 5. 피자 추압추압
