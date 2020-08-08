// Assignment code will generate a password with a mix of letters, numbers and symbols with a length betwee 8 and 128 characters


//Onclick function to activate generator
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



/* Set all password variables
var allChar = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!?.@#$%&*+_-"
var char = allChar.split(" ");*/ 


//All variable as separate arrays for generator
var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var aLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var aUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];


// Variable Declaration 
var howManyChar;
var password = "";
var grabChar = [];
var charType = [];


// Prompt to decide password length
function generatePassword (){
  var howManyChar = prompt("How many characters would you like your password to be? (choose a number between 8 and 128 characters)");
    //Verify length is correct
    if (howManyChar >= 8 && howManyChar <= 128) {
      alert("Your password will be " + howManyChar + " characters long.");
    }else{
      alert("Password length much must be between 8 and 128 charcters. Please try again!");
      return;
    }


// Prompt for all other character types to be included in password
var num = confirm ("Would you like to have Numbers in your password?");
    //Confirm selection
    if (num === true){
      // grabChar = grabChar.concat(num);
      (grabChar.push(num));
      charType = charType.concat(" Numbers");
    }

var aLower = confirm ("Would you like to have Uppercase characters in your password?");
  //Confirm selection
  if (aLower === true){
    // grabChar = grabChar.concat(aLower);
    (grabChar.push(aLower));
    charType = charType.concat(" Lower Case Letters");
}

var aUpper = confirm ("Would you like to have Lowercases characters in your password?");
  //Confirm selection
  if (aUpper === true){
    // grabChar = grabChar.concat(aUpper);
    (grabChar.push(aUpper));
    charType = charType.concat(" Upper Case Letters");
}

var specChar = confirm ("Would you like to have Special Characters in your password?");
  //Confirm selection
  if (specChar === true){
    // grabChar = grabChar.concat(specChar);
    (grabChar.push(specChar));
    charType = charType.concat(" Special Characters");
}

// Validated that at least one character type should be selected, if not then send back to select
if (num === false && aLower === false && aUpper === false && specChar === false){
  alert("Please choose at lease one character type to include in your password.");
  return;
} else{
  alert("You password will contain: " + charType + ".")
}


var password = "";
    for (var i = 0; i <= howManyChar; i++) {
      var genPw = grabChar[Math.floor(Math.random() * grabChar.length)];
      password = password + genPw;
    }
    return password;
      
  }




// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page