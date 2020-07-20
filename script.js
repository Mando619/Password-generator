// Assignment Code
var generateBtn = document.querySelector("#generate"); 


// my arrays used for generating password
const lowerCase = 'abcdefghijklmnopqrstuvwxyz'.split('');
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const number = '0123456789'.split('');
const special = '!@#$%^&*()_+';


    
      const useLowerCase = confirm('Do you want to use lower case letters?');
      const useUpperCase = confirm('Do you want to use uppercase letters?');
      const useNumber = confirm('Do you want to use numbers? ');
      const useSpecial = confirm('Do you want to use characters?');

      let password = [];

          if (useLowerCase) {
            for (let i = 0; i < 2; i++) {
                password.push('randomCharacter')
            }
          }

          if (useUpperCase) {
            password = password.concat(upperCase);
          }

          if (useNumber) {
            password = password.concat(useNumber);
          }

          if (useSpecial) {
            password = password.concat(useSpecial);
          }
            console.log(shuffle(password).join(''));

            function shuffle(array) {
              var currentIndex = array.length, temporaryValue, randomIndex;

                // shufflees elements that remain
              while (0 !== currentIndex) {

               // To pick a remaining element 
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                //to switch it with a current element
                TemporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
              }

            return array;

            }

// setting up password length
  let passLength = parseInt(prompt("How long do you want your password to be? Please keep your password between 8 and 128 characters"));
  while(passLength < 8 || passLength > 128 || isNaN(passLength)) {
    passLength = prompts("Im sorry, please input an integer between 8 and 138.")
  }
    console.log('Password length is ' + passLength);








// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

    
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
