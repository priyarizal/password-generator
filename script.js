
var generateBtn = document.querySelector("#generate");

  function writePassword() {
      var password = generatePassword();
      var passwordText = document.querySelector ("#password");
      passwordText.value = password;
}

generateBtn. addEventListener ("click", writePassword);

function generatePassword() {

  //defining arrays
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", 
  "R", "S", "T", "U", "V", "X", "Y","Z"]
 var lowercase= [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
  "u", "v", "x", "y", "z"]; 
  var specialletters= [ "!", "@", "#", "$", "*", "+", "%" , ".", ];
 var numbers= [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];  
 var passwordLength = window.prompt ("How many characters would you like on your password");

 var passwordLength =parseInt (passwordLength);
  if (passwordLength <8) {
      alert("Must be 8 characters or more!")
      return 
  } else if (passwordLength > 128) {
    alert ("Must be less than 128 characters!")
    return
  }  


 var confirmUpperCase = confirm ("would you like to use uppercase?");
 var confirmLowerCase = confirm ("would you like to use lowercase");
 var confirmSpecialCharacter = confirm ("would you like to use special letters?");
 var confirmNumericCharacter = confirm ("would you like to use numbers?")

 var characters = [];

if (confirmSpecialCharacter) {
  characters = characters.concat(specialletters)
}
if (confirmLowerCase){
  characters = characters.concat(lowercase)
}

if (confirmUpperCase){
  characters = characters.concat (uppercase)
}

if (confirmNumericCharacter) {
  characters = characters.concat (numbers)
}

  //loop selecting random characters from the array

  //  create a random pass given length, criteria

  var randomPassword = ""

for (var i=0; i<=passwordLength; i++){ 

  let index = (characters [Math.floor(Math.random()* characters.length)]);
  randomPassword = randomPassword+ index 
  console.log (randomPassword);

  //randomPassword = randomPassword + characters [Math.floor(Math.random()* characters.length)];
}
 console.log (characters)
 return randomPassword;
}






//console.log(characters);

//var randomPassword 



  // for (var i = 0; i < passwordLength; i++) {
  //    randomPassword = randomPassword + characters[Math.floor(Math.random(2) * characters.length)];
  //   console.log(randomPassword)
  //  }

   //first loop, i=0, randomPass=""+characters[]
   //return randomPassword;

