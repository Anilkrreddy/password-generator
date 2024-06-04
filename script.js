const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{};':\"\\|,.<>/?";

const lengthEl = document.getElementById("length");
const lowercaseEl = document.getElementById("lowercase");
const uppercaseEl = document.getElementById("uppercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateBtn = document.getElementById("genpassword");
const passwordEl = document.getElementById("password");

generateBtn.addEventListener("click", function () {
  const length = lengthEl.value;
  let characters = "";
  let password = "";

  if (lowercaseEl.checked) {
    characters += lowercaseLetters;
  }
  if (uppercaseEl.checked) {
    characters += uppercaseLetters;
  }
  if (numbersEl.checked) {
    characters += numbers;
  }
  if (symbolsEl.checked) {
    characters += symbols;
  }

  if (characters === "") { // Check if no character sets are selected
    alert("Please select at least one character set (lowercase, uppercase, numbers, or symbols) to generate a password.");
    return; // Exit the function if no characters are selected
  }

  for (let i = 0; i < length; i++) {
    password += characters.charAt(Math.random() * characters.length);
  }

  passwordEl.value = password;
});
