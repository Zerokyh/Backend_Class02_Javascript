// 참조타입 : array, element, obj(중요)
const book = {
  // 왼쪽은 키(문자) 오른쪽은 값(아무타입 올수 있음, obj도 옴)
  title: "자바스크립트는 누가만들었냐",
  price: 24000,
  author: ["전수효", "엄준식", "김민서"],
  publishedYear: {
    year: 2024,
    month: 5,
    day: 31,
  },
};

const book1 = {
  smallButtons: ["소득공제"],
  title: "자바스크립트는 왜 그 모양일까?",
  subTitle:
    "더글러스 크락포드가 알려주는 위험한 자바스크립트를 안전하게 사용하는 법",
  author: {
    real: "더글러스 크락포드",
    editor: "박수현",
  },
  price: 28000,
  publishedCompany: "인사이트",
  publishedDate: {
    year: 2020,
    month: 5,
    day: 25,
  },
  rate: 6.0,
  reviews: 1,
  saleIndex: 288,
};

// 데이터 가져오기
// 1. dot 연산자
console.log(book1.title);
console.log(book1.author.editor);

// 2. bracket 연산자
console.log(book1["title"]);
console.log(book1["author"]["editor"]);

// 데이터 추가
book1.isBestSeller = true;
console.log(book1);

// 데이터 삭제
delete book1.subTitle;

// 데이터 존재 유무
"title" in book1; // true

// book1.keys(); // keys값들만 돌려주기
// book1.values(); // values값들만 돌려주기
