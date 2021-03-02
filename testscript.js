//Making Variables
const lengthRange = document.getElementById("lengthrange")
const lengthNumber = document.getElementById("lengthnumber")
const passwordUpper = document.getElementById("upper")
const passwordSpecial = document.getElementById("special")
const passwordNumber = document.getElementById("number")
const passwordDisplay = document.getElementById("passwordDisplay")

const form = document.getElementById("criteria")

const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SPECIAL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)).concat(
    arrayFromLowToHigh(91, 96)).concat(
      arrayFromLowToHigh(123, 126))


//Synchronizing length and number
lengthRange.addEventListener("input", syncLengthRange)
lengthNumber.addEventListener("input", syncLengthRange)

function syncLengthRange(e) {
  const value = e.target.value
  lengthNumber.value = value
  lengthRange.value = value
}

//Preventing Default for Form
form.addEventListener("submit", e=> {
  e.preventDefault()

  //TEST: console.log(UPPERCASE_CHAR_CODES)
  //Giving the generatepassword function stuff to grab from
  const passlength = lengthNumber.value
  const upper = passwordUpper.checked
  const special = passwordSpecial.checked
  const number = passwordNumber.checked

  const password = generatePassword(passlength, upper, number, special)
  passwordDisplay.innerText = password
})

//creating generatePassword function
function generatePassword (passlength, upper, number, special) {
  let charCodes = LOWERCASE_CHAR_CODES
  if (upper) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
  if (special) charCodes = charCodes.concat(SPECIAL_CHAR_CODES)
  if (number) charCodes = charCodes.concat(NUMBER_CHAR_CODES) 

  const passwordCharacters = []
  for (let i=0; i < passlength; i++) {
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join("")
}

//Grabs each value from chart and inputs it into the array
function arrayFromLowToHigh(low, high) {
  const array= []
  for (let i= low; i <= high; i++) {
    array.push(i)
  }
  return array
}