import { data } from "./data.js";

// 1. id가 홀수이면서 성별이 여성인 데이터 중에서
// language, datetime[월], username을 가져오기
const one = data
  .filter(({ id, gender }) => id % 2 && gender == "Female")
  .map(({ language, datetime, username }) => {
    const month = datetime.split("/")[0];
    return { language, datetime: month, username };
  });
// console.log(one);

// 2. username이 알파벳 k or z가 들어있고 성별이 남성인 데이터 중에서
// datetime[년도], username과, usernamelength:username의 길이
const two = data
  .filter(
    ({ username, gender }) =>
      (username.includes("k") || username.includes("z")) && gender == "Male"
  )
  .map(({ datetime, username }) => {
    const year = datetime.split("/")[2];
    const usernameLength = username.length;

    return { datetime: year, username, usernameLength };
  });
console.log(two);
