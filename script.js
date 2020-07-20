// Assignment Code
var generateBtn = document.querySelector("#generate"); 

var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var special = '!@#$%^&*()_+';


var userAnswers = {};

function promptUser() {
  var lowerChar = confirm('Would you like to use lowercase characters?');
  var upperChar = confirm('Would you like to use uppercase characters?');
  var specialChar = confirm('Would you like to use special characters?');
  var numberChar = confirm('Would you like to use number characters?');


  if (lowerChar) {
    userAnswers[lowerCase] = lowercase;
  }

  if (upperChar) {
    userAnswers[upperCase] = upperCase;
  }

  if (specialChar) {
    userAnswers[special] = special;

  }

  if (numberChar) {
    userAnswers[number] = number;
  }

  console.log(userAnswers);
  }

  promptUser();

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

    
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
