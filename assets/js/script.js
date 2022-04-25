// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    //check to see how long is the desired length of password
    var desiredLength = window.prompt('How many characters would you like your password to contain?');

    //check to make sure that desired length meets length requirements
    if(desiredLength < 8 || desiredLength > 128){
      window.alert('Password length must be at least 8 characters and no more than 128');
    }
    else{
      var password = generatePassword(desiredLength);
      var passwordText = document.querySelector("#password");
    }
  passwordText.value = password;
}

/*call this function to generate a random number between 0 and the length of
desired characters chosen from prompt. It will spit out a single character that gets
concatinated to the generatedPW variable in the generatePassword function.*/
var getRandomCharacter = function(includedCharacters){
  max = includedCharacters.length;
  var randomNumber = Math.floor(Math.random()*max);
  return includedCharacters.charAt(randomNumber);
}

//function to generate the password
var generatePassword = function(desiredLength){
  //declaring variables
  var includedCharacters = "";    //as the user chooses which characters to include, this variable will get filled up.
  var special = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/;
  var numeric = "0123456789";
  var lowerCase="abcdefghijklmnopqrstuvwxyz";
  var upperCase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var generatedPW ="";           //this is the variable that gets return to become the final password.

  //This section is to confirm if including special characters.
  var confirmSpecial = window.confirm('Click "OK" to confirm including special characters.');
  if(confirmSpecial){
    includedCharacters +=special;
  }

  //Confirming to include numeric values.
  var confirmNumeric = window.confirm('Click "OK" to include numeric characters.');
  if(confirmNumeric){
    includedCharacters +=numeric;
  }

  //Confirm to include lowercase characters
  var confirmLowerCase = window.confirm('Click "OK" to confirm including lowercase characters.');
  if(confirmLowerCase){
    includedCharacters +=lowerCase;
  }

  //Confirm to include UpperCase characters
  var confirmUpperCase = window.confirm('Click "OK" to confirm including uppercase characters.');
  if(confirmUpperCase){
    includedCharacters+=upperCase;
  }

  //if none of the conditions are chosen, a pw can't be created. Prompt the user to try again. 
  if(!confirmSpecial && !confirmNumeric && !confirmLowerCase && !confirmUpperCase){
    window.alert("Please try again and select at least one condition from the prompts to generate a valid password.");
    return;
  }

  /*this section is to generate the password. The for loop will itterated to the number of characters
  the user had requested*/
  for(var i = 0; i < desiredLength; i++){
    var character = getRandomCharacter(includedCharacters);   //this function will generate a random character from the chosen pool from before.
    generatedPW += character;                                 //the random character gets added to the generatedPW variable until reaches the length requirement.
  }

  return generatedPW;   //return the string for the pw.
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
