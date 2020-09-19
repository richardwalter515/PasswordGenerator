// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //user enters how long password should be and what characters they want to use
  var howMany = prompt('How may characters would you like your password to be? (value between 8-25)');
  var wantLower = prompt('Do you want to use lower case letters?(yes or no)');
  var wantUpper = prompt('Do you want to use upper case letters? (yes or no)');
  var wantNumbers = prompt('Do you want to use numbers? (yes or no)');
  var wantSpecial = prompt('Do you want to use special characters? (yes or no)');
  var lowerCase = ("abcdefghijklmnopqrstuvwxyz");
  var upperCase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  var numbers = ("0123456789");
  var specialChar = ("!#$%&'()*+,-./:;<=>?@[\]^_`{|}~");
  var newString = ""

  //use if then to figure out which strings to concatenate

  if (wantLower) {
    newString = lowerCase
  } else if (wantLower && wantUpper) {
    newString = lowerCase.concat(upperCase)
  } else if (wantLower && wantUpper && wantNumbers) {
    newString = lowerCase.concat(upperCase, numbers)
  } else if (wantLower && wantUpper && wantNumbers && wantSpecial) {
    newString = lowerCase.concat(upperCase, numbers, specialChar)
  }
  
  //generate password that is the number of characters the user enters using the correct characters
  //join strings depending on what user picks and then randomly pick from there


  //use for loop to pull random characters a specific amt of times (how Many)

  // for (var i = 0; i < howMany; i++) {
  //   var password = Math.floor((Math.random() * newString.length[i];  //add a variable to the password
    
  // }

  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
