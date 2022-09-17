const pwd1 = document.getElementById("pwd1");
const pwd2 = document.getElementById("pwd2");
const pwdError = document.getElementById("pwd-error");
const pwd2Error = document.getElementById("pwd2-error");


const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const firstNameError = document.querySelector("#first-name-error");
const lastNameError = document.querySelector("#last-name-error");
const emailError = document.querySelector("#email-error");
const phoneError = document.querySelector("#phone-error");


firstName.addEventListener("input", () => {
  if(firstName.value === "") {
    firstNameError.textContent = "PLEASE TYPE IN YOUR FIRST NAME";
  }
  else {
    firstNameError.textContent = "";
  }
});

lastName.addEventListener("input", () => {
  if(lastName.value === "") {
    lastNameError.textContent = "PLEASE TYPE IN YOUR LAST NAME";
  }
  else {
    lastNameError.textContent = "";
  }
});

email.addEventListener("input", () => {
  if(email.validity.typeMismatch) {
    emailError.textContent = "PLEASE ENTER IN A VALID EMAIL ~ INFO@EXAMPLE.COM";
  }
  else {
    emailError.textContent = "";
  }
});

pwd1.addEventListener("input", () => {
  if(pwd1.validity.patternMismatch) {
    const input = pwd1.value;
    const regexDigit = /[0-9]/g;
    const regexCapital = /[A-Z]/g;
    let output = "";

    if(regexDigit.test(input)) {
      output += "";
    }
    else {
      output += "AT LEAST 1 NUMBER.";
      output += "\n";
    }

    if(regexCapital.test(input)) {
      output += "";
    }
    else {
      output += "AT LEAST 1 CAPITAL LETTER.";
      output += "\n";
    }

    if(input.length < 9) {
      output += "PASSWORD MUST BE AT LEAST 8 CHARACTERS.";
      output += "\n";
    }
    else {
      output += "";
    }

    pwdError.innerText = output;
  }
  else {
    pwdError.textContent = "";
  }

});



pwd2.addEventListener('input', () => {
  if(pwd1.value !== pwd2.value) {
    pwd2Error.textContent = "PASSWORDS DO NOT MATCH";
  }
  else {
    pwd2Error.textContent = "";
  }
});






