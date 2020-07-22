// Assignment Code
var generateBtn = document.querySelector("#generate"); 


// My arrays used for generating password
// Used split() in the strings to turn into an array of substrings
const lowerCase = 'abcdefghijklmnopqrstuvwxyz'.split('');
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const number = '0123456789'.split('');
const special = '!@#$%^&*()_+'.split('');
  // Function made to generate a password
    function generatePassword() {
    
// Setting up password length
      let passLength = parseInt(prompt("How long do you want your password to be? Please keep your password between 8 and 128 characters"));
      while(passLength < 8 || passLength > 128 || isNaN(passLength)) {
        passLength = prompts("Im sorry, please input an integer between 8 and 138.")
      }
        console.log('Password length is ' + passLength);



      // Prompts to help ask what kind of password
      const useLowerCase = confirm('Do you want to use lower case letters?');
      const useUpperCase = confirm('Do you want to use uppercase letters?');
      const useNumber = confirm('Do you want to use numbers?');
      const useSpecial = confirm('Do you want to use characters?');

        
      
        // Creating vars for customer responses, creating by their wants.
          var userChoice = []

          var password = ''
        // Used push() method to add new items at the end of an array, returning new length
          if (useLowerCase) {
             userChoice.push(lowerCase);
          }
           
          if (useUpperCase) {
            userChoice.push( upperCase);
            
          }

          if (useNumber) {
            userChoice.push(number);
           
          }

          if (useSpecial) {
            userChoice.push(special);
          }
      // Creating a loop for all the arrays. Used flat() for nested arrays
            let currentUserChoice = userChoice.flat()

          for (var i= 0; i < passLength; i++) {
            password = password + 
            currentUserChoice[Math.floor(Math.random() * currentUserChoice.length)]
          }
            return password;
          
          }
            console.log(password)
          
          
// Write password to the #password input
  function writePassword() {
    
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

    
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
