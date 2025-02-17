// #Task1.
// Create a function which makesthe last character of a string repeatnnumber oftimes.

// function modifyLast(word, n) {
//     let lastLetter = (word.at(-1))
//     for (let i = 0; i < n-1; i++) {
//         word += lastLetter
//     }
//     return word
// }
// console.log(modifyLast("Hello", 3))
// console.log(modifyLast("hey", 6))
// console.log(modifyLast("excuse me what?", 5)) 


// #Task2. Create a function that takes a string and returns the concatenated first and last character

// function firstLast(text) {
//     return `${text.at(0)}${text.at(-1)}`
// }
// console.log(firstLast("ganesh"));
// console.log(firstLast("shiva"));
// console.log(firstLast("vishnu"));


// #Task3.
// Write two functions: 1.toInt(): A function to convert a string to an
// integer. 2.toStr(): A function to convert an integer to a string.

// function toInt(text) {
//     return parseInt(text)
// }
// function toStr(number) {
//     return number.toString()
// }
// console.log(toInt('23'));
// console.log(toStr(12));


// #Task4.
// Create a function that takes in a word and determines whether or
// not it is plural. A plural word is one that ends in "s".

// function isPlural(word) {
//     let lastLetter = word.at(-1)
//     if (lastLetter == 's') return true
//     return false
// }
// console.log(isPlural("changes"));
// console.log(isPlural("change"));
// console.log(isPlural("dudes"));

// #Task5.  Create a function that takes a string of lowercase characters andreturns that string reversed and in upper case.

// function reverseCapitalize(lowerWors) {
//     return lowerWors.toUpperCase().split('').reverse().join('')
// }
// console.log(reverseCapitalize("abc"));
// console.log(reverseCapitalize("hellothere"));
// console.log(reverseCapitalize("input"));


// #Task6.
// Create a function that accepts a string (of a person's first and last name) and returns a string with the first and last name swapped.

// function checkEnding(firstName, lastName) {
//     return (firstName.startsWith(lastName) || firstName.endsWith(lastName))
// }
// console.log(checkEnding("abc", "bc"));
// console.log(checkEnding("abc", "d"));
// console.log(checkEnding("feminine", "nine"));
// console.log(checkEnding("ninefemi", "nine"));


// #Task7.
// A palindrome is a word that is identical forward and backwards.
// Given a word, create a function that checks whether it is a palindrome.

// function checkPalindrome(word) {
//     let newWord = word.split('').reverse().join('')
//     return word === newWord
// }
// console.log(checkPalindrome("mom"));
// console.log(checkPalindrome("scary"));
// console.log(checkPalindrome("reviver"));


// #Task8.
// Create a function that takes two strings as arguments and returns
// the number of times the first string (the single character) is found in
// the second string.

// function charCount(letter, word) {
//     let cnt = 0
//     for (let i = 0; i < word.length; i++) {
//         if (letter == word[i]) cnt++
//     }
//     return cnt
// }
// console.log(charCount("a", "edabaita"));
// console.log(charCount("c", "Chamber of secrets"));
// console.log(charCount("b", "big fat bubble"));


// #Task10.
// Write a function that takes an integer iand returns an integer with
// the integer backwards followed by the original integer.

function reverseAndNot(number) {
    return `${number.toString().split('').reverse().join('')}${number}`
}
console.log(reverseAndNot(123));
console.log(reverseAndNot(152));
console.log(reverseAndNot(123456789));
