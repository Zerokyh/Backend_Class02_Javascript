// 데이터 타입 : 기본[str, num, bool, null, undefined] + 참조

// const a = !!""  // false
// 참조 [array]
// const a = [10, 20, 30, 40, 50]; // a는 array타입
// a[2]; // 30
// a[4]; // 50
// console.log(a[0] + a[4]); // 60

// const b = a.push(60); // 배열 맨 뒤에 값을 추가

// const c = a.pop(); // 배열 맨 뒤의 값을 추출
// console.log(b);
// console.log(c);

const menu = ["아메리카노", "라떼", "바닐라"];
// 추가
menu.push("민트");
menu.push("딸기스무디");
menu.push("디카페인");

// menu.length // 6 - 웹페이지 콘솔 창에서 치면 나옴
console.log(menu);

//갱신
menu[0] = "빅아메리카노";
console.log(menu);

//삭제
delete menu[3]; // undefined
menu.pop(); // 추출되어 없어짐
console.log(menu);

// forEach 순회 [한명씩 보기, 하나씩 꺼내서 사용]
menu.forEach((v) => {
  console.log(v);
});
// v = 미지수

const nums = [1, 3, 5, 7, 9];
nums.forEach((v) => {
  console.log(v + 10); // 각 값에 10이 더해져서 출력될듯, 11, 13, 15, 17, 19
});

nums.forEach((x) => {
  console.log(x ** x);
});
