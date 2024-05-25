const coffee = "americano";

// 포함 유무
coffee.includes("cano"); // true

// 몇번째 있는지
coffee.indexOf("i"); // 4 없으면 -1

// 바꾸기
coffee.replace("a", "z"); // a를 z로 바꿔주세요

// 특정 문자들로 시작하는지 묻기
coffee.startsWith("ame"); // ame로 시작? true // false

// 특정 문자들로 끝나는지 묻기
coffee.endsWith("cano"); // cano로 끝나는지?

// 문자열에서 지정한 만큼 자르고 돌려주기
coffee.slice(0, 5); // ameri

// 대문자
coffee.toUpperCase(); // AMERICANO

// 소문자
coffee.toLocaleLowerCase(); // americano

// 특정 문자 기준으로 배열화
coffee.split("i"); // ["amer", "cano"]

// 반복
coffee.repeat(3); // americanoamericanoamericano
