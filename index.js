const pwd1 = document.getElementById("pwd1");
const pwd2 = document.getElementById("pwd2");
const pwdError = document.querySelector(".pwd-error");


pwd2.addEventListener('input', () => {
  if(pwd1Input !== pwd2Input) {
    pwdError.textContent = "Passwords do not match";
  }
  else {
    pwdError.textContent = "";
  }
});






