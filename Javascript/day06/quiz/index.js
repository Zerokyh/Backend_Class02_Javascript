// const id = document.querySelector(".id");
// const idCheck = document.querySelector(".idCheck");
// const pwd = document.querySelector(".password");
// const pwdCheck = document.querySelector(".pwdCheck");
// const pwdD = document.querySelector(".passwordCheck");
// const pwdDCheck = document.querySelector(".pwdDCheck");

// const inputId = id.addEventListener("input", (e) => {
//   const idValue = e.target.value;
//   const specialChar = [..."!@#$%^&*"];
//   const idLength = idValue.length;
//   const isIdValidLength = 4 <= idLength && idLength <= 12;
//   const isIdValidChar = specialChar.some((v) => {
//     return idValue.includes(v);
//   });
//   const isValidId = isIdValidLength && isIdValidChar;
//   idCheck.innerText = isValidId
//     ? "아이디 설정이 올바릅니다."
//     : "아이디 설정이 올바르지 않습니다.";
// });

// const inputPwd = pwd.addEventListener("input", (e) => {
//   const pwdValue = e.target.value;
//   const specialChar = [..."!@#$%^&*"];
//   const pwdLength = pwdValue.length;
//   const isPwdValidLength = 4 <= pwdLength && pwdLength <= 12;
//   const isPwdValidChar = specialChar.some((v) => {
//     return pwdValue.includes(v);
//   });
//   const isValidPwd = isPwdValidLength && isPwdValidChar;
//   pwdCheck.innerText = isValidPwd
//     ? "비밀번호 설정이 올바릅니다."
//     : "비밀번호 설정이 올바르지 않습니다.";
// });

// const inputPwdD = pwdD.addEventListener("input", (e) => {
//   const pwdDValue = e.target.value;
//   const specialChar = [..."!@#$%^&*"];
//   const pwdLength = pwdDValue.length;
//   const isPwdDValidLength = 4 <= pwdLength && pwdLength <= 12;
//   const isPwdDValidChar = specialChar.some((v) => {
//     return pwdDValue.includes(v);
//   });
//   const isValidPwdD = isPwdDValidLength && isPwdDValidChar;
//   pwdDCheck.innerText = isValidPwdD
//     ? "비밀번호 설정이 올바릅니다."
//     : "비밀번호 설정이 올바르지 않습니다.";
// });
import { hasSpecial, isValidLength } from "./util.js";
import { MSG } from "./msg.js";
import { COLOR } from "./color.js";

const register = document.querySelector(".register");
const validList = [false, false, false];
// const validList = [{ id: false }, { pw: false }, { pwch: false }];

const id = document.querySelector(".id");
const id_info = document.querySelector(".id_info");

id.addEventListener("input", (e) => {
  const { value } = e.target;
  const { length } = value;
  const isValid = hasSpecial(value) && isValidLength(length);

  id_info.style.color = isValid ? COLOR.VALID : COLOR.INVALID;
  id_info.innerText = isValid ? MSG.ID.VALID : MSG.ID.INVALID;

  validList[0] = isValid;
  register.innerText = validList.every((v) => v)
    ? MSG.REGISTER.VALID
    : MSG.REGISTER.INVALID;
});

const pw = document.querySelector(".pw");
const pw_info = document.querySelector(".pw_info");

pw.addEventListener("input", (e) => {
  const { value } = e.target;
  const { length } = value;
  const isValid = hasSpecial(value) && isValidLength(length);

  pw_info.style.color = isValid ? COLOR.VALID : COLOR.INVALID;
  pw_info.innerText = isValid ? MSG.PW.VALID : MSG.PW.INVALID;

  validList[1] = isValid;
  register.innerText = validList.every((v) => v)
    ? MSG.REGISTER.VALID
    : MSG.REGISTER.INVALID;
});

const pwch = document.querySelector(".pwch");
const pwch_info = document.querySelector(".pwch_info");

pwch.addEventListener("input", (e) => {
  const { value } = e.target;
  const isValid = pw.value === value;

  pwch_info.style.color = isValid ? COLOR.VALID : COLOR.INVALID;
  pwch_info.innerText = isValid ? MSG.PWCH.VALID : MSG.PWCH.INVALID;

  validList[2] = isValid;
  register.innerText = validList.every((v) => v)
    ? MSG.REGISTER.VALID
    : MSG.REGISTER.INVALID;
});

const pw_eye_button = document.querySelector(".pw_eye_button");
const pwIcon = document.querySelector(".pwIcon");
pw_eye_button.addEventListener("click", () => {
  pwIcon.classList.toggle("fa-eye");
  pwIcon.classList.toggle("fa-eye-slash");
  pw.type = pw.type === "password" ? "text" : "password";
});

const pwch_eye_button = document.querySelector(".pwch_eye_button");
const pwchIcon = document.querySelector(".pwchIcon");
pwch_eye_button.addEventListener("click", () => {
  pwchIcon.classList.toggle("fa-eye");
  pwchIcon.classList.toggle("fa-eye-slash");
  pwch.type = pwch.type === "password" ? "text" : "password";
});

// 시간 여유될 때 코드 줄이기 - 함수화
