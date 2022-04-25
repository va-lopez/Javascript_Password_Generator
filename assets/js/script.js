// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

/*call this function to generate a random number between 0 and the length of
desired characters chosen from prompt. It will spit out a single character that gets
concatinated to the generatedPWvariable later.*/
var getRandomCharacter = function(includedCharacters){
  debugger;
  max = includedCharacters.length;
  var randomNumber = Math.floor(Math.random()*max);
  return includedCharacters.charAt(randomNumber);
}

var generatePassword = function(){
  //declaring variables
  var includedCharacters = "";
  var special = /[ !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/;
  var numeric = "0123456789";
  var lowerCase="abcdefghijklmnopqrstuvwxyz";
  var upperCase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var generatedPW ="";

  //check to see how long is the desired length of password
  var desiredLength = window.prompt('How many characters would you like your password to contain?');
  
  //convert length into an integer to use later
  desiredLength = parseInt(desiredLength);
  console.log("Chose "+ desiredLength + " characters.")

  //check to make sure that desired length meets min length requirements
  if(desiredLength < 8 || desiredLength > 128){
    window.alert('Password length must be at least 8 characters and no more than 128');
    return;
  }
  
  //This section is to confirm what kind of characters we'll be using.//
  var confirmSpecial = window.confirm('Click "OK" to confirm including special characters.');
  console.log('Special characters is: ' + confirmSpecial);
  //add if statements here to include special characters
  if(confirmSpecial){
    includedCharacters +=special;
    console.log(includedCharacters);
  }

  var confirmNumeric = window.confirm('Click "OK" to include numeric characters.');
  console.log('Numeric characters is: ' + confirmNumeric);
  //add if statements here to include numeric characters
  if(confirmNumeric){
    includedCharacters +=numeric;
    console.log(includedCharacters);
  }

  var confirmLowerCase = window.confirm('Click "OK" to confirm including lowercase characters.');
  console.log('LowerCase characters is: ' + confirmLowerCase);
  //add if statements to include lowercase;
  if(confirmLowerCase){
    includedCharacters +=lowerCase;
    console.log(includedCharacters);
  }

  var confirmUpperCase = window.confirm('Click "OK" to confirm including uppercase characters.');
  console.log('UpperCase characters is ' + confirmUpperCase);
  //add if statements to include uppercase;
  if(confirmUpperCase){
    includedCharacters+=upperCase;
    console.log(includedCharacters);
  }

  //this section is to generate the password:
  for(var i = 0; i < desiredLength; i++){
    var character = getRandomCharacter(includedCharacters);
    generatedPW += character;
  }

  console.log(generatedPW);
  return generatedPW;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
