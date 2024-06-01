import { data } from "./data.js";

// 1. timezone이 europe인 데이터 중에서 가져와서
// -> phone, fullName, ipAddress

// 2. id가 짝수인 데이터중에서
// timezone[대륙]이랑 phone[-빼고], money[$빼고]를 가져오기

// 3. America or Asia 데이터 중에서
// ipAddress[.을 지우고] fullName 앞이름[First name] creditcard로 변경 후 가져오기

// 4. 달러가 25000 ~ 50000 사이 데이터와 timezone이 africa인 데이터 중에서
// timezone[수도만 가져오기] fullName 뒷이름(Family name)가져오기

// 5. ipAddress [24.169.188.122] 뒷자리 세개의 수의 합이 15 이하인 애들 중에서
// timezone, fullname, money 가져오기
