// Assignment code will generate a password with a mix of letters, numbers and symbols with a length betwee 8 and 128 characters

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//All variable as separate arrays for generator
var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var aLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var aUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specChar = ["!", "%", "&", "*", "+", "-", ".", "?"];


// Variable Declaration
var howManyChar;
var password = "";
var placeHoldArr = [];
var grabChar;
var charType = [];


// Prompt to decide password length
function generatePassword() {
    var howManyChar = prompt("How many characters would you like your password to be? (choose a number between 8 and 128 characters)"
    );
  //Verify length is correct
    if (howManyChar >= 8 && howManyChar <= 128) {
    alert("Your password will be " + howManyChar + " characters long.");
    } else {
    alert("Password length much must be between 8 and 128 charcters. Please try again!"
    );
}


  // Prompt for all other character types to be included in password
    var anum = confirm("Would you like to have Numbers in your password?");
//   Confirm selection
    if (anum) {
    grabChar += placeHoldArr.concat(num);
    charType = charType.concat(" Numbers");
    }

    var lower = confirm("Would you like to have Uppercase characters in your password?"
    );
  //Confirm selection
    if (lower) {
    grabChar += placeHoldArr.concat(aLower);
    charType = charType.concat(" Lower Case Letters");
    }

    var upper = confirm("Would you like to have Lowercases characters in your password?"
    );
  //Confirm selection
    if (upper) {
    grabChar += grabChar.concat(aUpper);
    charType = charType.concat(" Upper Case Letters");
    }

    var sChar = confirm("Would you like to have Special Characters in your password?"
    );
  //Confirm selection
    if (sChar) {
    grabChar += grabChar.concat(specChar);
    charType = charType.concat(" Special Characters");
    }
    
  // Validated that at least one character type should be selected, if not then send back to select
    if (
    num === false && aLower === false && aUpper === false && specChar === false
    ) {
    alert("Please choose at lease one character type to include in your password."
    );
    return;
    } else {
    alert("You password will contain: " + charType + ".");
    }

    var password = "";
    for (var i = 0; i < howManyChar; i++) {
    password = password + grabChar[Math.floor(Math.random() * grabChar.length)];
    }
    return password;
}

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}
writePassword();