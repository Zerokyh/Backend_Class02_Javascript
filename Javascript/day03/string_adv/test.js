const fruits = ["apple", "banana", "orange", "melon", "kiwi"];

fruits.forEach((fruit) => {
  // console.log((fruit)); // 각각 출력
  // console.log(fruit.toUpperCase()); // 각각 대문자로 출력
  // apple a를 포함 true
  // banana a를 포함 true
  // ..
  // kiwi a를 포함 false
  //   console.log(`${fruit}는 a를 포함 ${fruit.includes("a")}`);
  //   console.log(`${fruit}는 a를 ${fruit.includes("a") ? "포함" : "미포함"}`);

  // 6글자 이상이면 대문자화하고, 아니면 해당 단어를 두번 반복한 단어로 표시
  // ex) BANANA, appleapple
  //   console.log(fruit.length > 5 ? fruit.toUpperCase() : fruit + fruit);

  //   const isSixOver = fruit.length >= 6;
  //   const result = isSixOver ? fruit.toUpperCase() : fruit.repeat(2);
  //   console.log(result);

  // 각 글자 수 만큼 대문자화 시켜서 반복출력
  console.log(fruit.toUpperCase().repeat(fruit.length));
});
