// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var howMany = prompt('How may characters would you like your password to be?').value;
  var charSet = ["abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]
  function generatePassword() {
    for (var i = 0; i <= howMany; i++) {
      //add a character to the password
    }
  }
  //generate password that is the number of characters the user enters
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
