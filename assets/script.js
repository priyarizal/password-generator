
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  if (typeof password !== 'undefined') {
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
}

generateBtn.addEventListener("click", writePassword);

function generatePassword() {

  //defining arrays
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q",
    "R", "S", "T", "U", "V", "X", "Y", "Z"]
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
    "u", "v", "x", "y", "z"];
  var specialletters = ["!", "@", "#", "$", "*", "+", "%", ".",];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];

  //asks user the length of the password
  var passwordLength = window.prompt("How many characters would you like on your password");

  //it parses the password length
  var passwordLength = parseInt(passwordLength);

  // if the supplied password length cannot be parsed into an integer- alert 
  if (isNaN(passwordLength)) {
    alert("Must be an integer");
    return
    //if the passwordlength is < 8- alert
  } else if (passwordLength < 8) {
    alert("Must be 8 characters or more!")
    return
    //if the passwordlength is >128 - alert then return
  } else if (passwordLength > 128) {
    alert("Must be less than 128 characters!")
    return
  }


  //providing users with criteria 
  var confirmUpperCase = confirm("would you like to use uppercase?");
  var confirmLowerCase = confirm("would you like to use lowercase");
  var confirmSpecialCharacter = confirm("would you like to use special letters?");
  var confirmNumericCharacter = confirm("would you like to use numbers?")

  //if users do not select one of the criteria- alert

  if (!confirmUpperCase && !confirmLowerCase && !confirmSpecialCharacter && !confirmNumericCharacter) {
    alert("You have to select one");
    return
  }


  // Initilized empty array to store users selected criteria
  var characters = [];

  //if users selected specialchar, add it to the array
  if (confirmSpecialCharacter) {
    characters = characters.concat(specialletters)
  }
  //if users selected lowercase, add it to the array
  if (confirmLowerCase) {
    characters = characters.concat(lowercase)
  }
  //if users selected uppercase, add it to the array
  if (confirmUpperCase) {
    characters = characters.concat(uppercase)
  }
  //if users selected numericCharacter, add it to the array
  if (confirmNumericCharacter) {
    characters = characters.concat(numbers)
  }


  //  create a random pass given length, criteria

  var randomPassword = ""

  //loop selecting random characters from the array
  for (var i = 0; i <= passwordLength; i++) {

    //math.random generated a number between 0 and 1
    let random = Math.random()
    //get a random number that's between 1 and character length
    let answer = random * characters.length
    // rounding down the decimal
    let index = Math.floor(answer)
    // select character in that index
    let character = characters[index]

    console.log(random, answer, index, character);

    // let index = (characters[Math.floor(Math.random() * characters.length)]);
    // console.log(character);
    randomPassword = randomPassword + character

    console.log(randomPassword);
  }
  // console.log(characters)
  return randomPassword;
}
