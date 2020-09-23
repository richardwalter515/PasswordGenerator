// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //user enters how long password should be and what characters they want to use
  var howMany = prompt('How may characters would you like your password to be? (value between 8-25)');
  console.log('howMany:', howMany)

  var wantLower = prompt('Do you want to use lower case letters?').toLowerCase();
  var wantUpper = prompt('Do you want to use upper case letters?').toLowerCase();
  var wantNumbers = prompt('Do you want to use numbers?').toLowerCase();
  var wantSpecial = prompt('Do you want to use special characters?').toLowerCase();
  var lowerCase = ("abcdefghijklmnopqrstuvwxyz");
  var upperCase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  var numbers = ("0123456789");
  var specialChar = ("!#$%&'()*+,-./:;<=>?@[\]^_`{|}~");
  var newString = '';
  var password = '';

  //use if statements to figure out which strings to concatenate
  if (wantLower === 'yes') {
    newString = lowerCase
  }
  if (wantUpper === 'yes') {
    newString = upperCase
  }
  if (wantNumbers === 'yes') {
    newString = numbers
  }
  if (wantSpecial === 'yes') {
    newString = specialChar
  }
  if (wantLower === 'yes' && wantUpper === 'yes') {
    newString = lowerCase.concat(upperCase)
  }
  if (wantLower === 'yes' && wantNumbers === 'yes') {
    newString = lowerCase.concat(numbers)
  }
  if (wantLower === 'yes' && wantSpecial === 'yes') {
    newString = lowerCase.concat(specialChar)
  }
  if (wantUpper === 'yes' && wantNumbers === 'yes') {
    newString = upperCase.concat(numbers)
  }
  if (wantUpper === 'yes' && wantSpecial === 'yes') {
    newString = upperCase.concat(specialChar)
  }
  if (wantNumbers === 'yes' && wantSpecial === 'yes') {
    newString = numbers.concat(specialChar)
  }
  if (wantLower === 'yes' && wantUpper === 'yes' && wantNumbers === 'yes'){
    newString = lowerCase.concat(upperCase, numbers)
  }
  if (wantLower === 'yes' && wantUpper === 'yes' && wantSpecial === 'yes'){
    newString = lowerCase.concat(upperCase, specialChar)
  }
  if (wantLower === 'yes' && wantSpecial === 'yes' && wantNumbers === 'yes'){
    newString = lowerCase.concat(specialChar, numbers)
  }
  if (wantUpper === 'yes' && wantSpecial === 'yes' && wantNumbers === 'yes'){
    newString = upperCase.concat(specialChar, numbers)
  }
  if (wantLower === 'yes' && wantUpper === 'yes' && wantNumbers === 'yes' && wantSpecial === 'yes'){
    newString = lowerCase.concat(upperCase, numbers, specialChar)
  }
  
  console.log('newString:', newString)

  //use for loop to pull random characters a specific amt of times (how Many)

  for (var i = 0; i < howMany; i++) {
    password += newString[Math.floor(Math.random() * newString.length)]; 
  }

  console.log('password:', password)
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
