//                                        #Task1
// Given a string of numbers separated by a comma and space, return the product of the numbers

// function multipleNumbers(text) {
//     let countNumber = 1
//     let numbers = text.split(',')
//     for (let i = 0; i < numbers.length; i++) {
//         countNumber *= +numbers[i].trim()
//     }
//     return countNumber
// }
// console.log(multipleNumbers('2,3'));
// console.log(multipleNumbers('1,2,3,4'));
// console.log(multipleNumbers('54,75,453,0'));



//                                       #Task2.
// Create a function that count the number of syllables a word has Each syllable is separated with a dash - .

// function numberSyllables(text) {
//     let countSyllables = 1  
//     for (const element of text) {
//         if(element == '-') countSyllables++
//     }
//     return countSyllables
// }
// console.log(numberSyllables('but-fet'));
// console.log(numberSyllables('beau-ti-ful'));
// console.log(numberSyllables('on-o-mat-o-poe-ai'));


//                                          #Task3.
// Create a function that accepts a string (of a person's first and last name) 
// and returns a string with the first and last name swapped.


// let checkEnding = (firstName, lastName) => {
//     return (firstName.startsWith(lastName) || firstName.endsWith(lastName))
// }
// console.log(checkEnding('abc', 'bc'));
// console.log(checkEnding('abc', 'd'));
// console.log(checkEnding('feminine', 'nine'));
// console.log(checkEnding('ninefemi', 'nine'));

//                                                with recursion

// function checkEnding(firstName, lastName) {
//     if(firstName.length<lastName.length) {
//             return false
//         } 

//     if (firstName.startsWith(lastName) ||  firstName.endsWith(lastName))     {
//         return true
//     }

//     return checkEnding(firstName.slice(1, -1,), lastName)
// }

// console.log(checkEnding('abc', 'bc'));
// console.log(checkEnding('abc', 'd'));
// console.log(checkEnding('feminine', 'nine'));
// console.log(checkEnding('ninefemi', 'nine'));



//                                        #Tasks4
//  Create a function that return true if a string contains any spaces.

// function hasSpace(text) {
//     if (text == '') return false
//     if(text[0] == ' ') return true
//     return hasSpace(text.slice(1))
// }
// console.log(hasSpace('hello'));
// console.log(hasSpace('hello, word'));
// console.log(hasSpace(' '));

//                                       #Tasks 5
//Create a function that takes a name and return a greeting in the
// form of a string . Don‘t use a normal function, use an arrow function.

// function helloName(salom) {
//     return (names) => {
//         return `${salom} ${names}`
//     }
// }
// let saySalom = helloName('Salom')

// console.log(saySalom('Zaunulobiddin'));
// console.log(saySalom('Shervin'));
// console.log(saySalom('Yahyo'));

//                                          #Tasks 6
// Create a function thattakes a string and return the middle character(s). If
// the word‘slength is odd,return the middle character. Ifthe word‘slength is
// even,return the middle two characters

// function getMiddle(text) {
//     let length_text = text.length
//     let miyona = Math.floor(length_text/2) 
//     if (length_text % 2 === 0) {
//         return text[miyona - 1] + text[miyona]
//     } else {
//         return text[miyona]
//     }
// }
// console.log(getMiddle('test'));
// console.log(getMiddle('testing'));
// console.log(getMiddle('A'));
// console.log(getMiddle('Zainulobiddin'));


//                                         #Task7.


// Create a function that takes a word and return true if the word has two consecutive indentical letters

// function doubleLetter(word) { // function declaration
//     let firstLetter = word.charAt(0 )
//     for (let i = 1; i < word.length; i++) {
//         if (firstLetter === word[i]) return true
//         else firstLetter = word[i]
//     }
//     return false
// }
// console.log(doubleLetter('loop'));
// console.log(doubleLetter('yummy'));
// console.log(doubleLetter('orange'));

// function doubleLetter(word) { // recurtion
//     if (word == 0) return false

//     let firstLetter = word.charAt(0)

//     if (firstLetter == word.charAt(1)) return true
//     else firstLetter = word.charAt(1)

//     return doubleLetter(word.slice(1))
// }
// console.log(doubleLetter('loop'));
// console.log(doubleLetter('yummy'));
// console.log(doubleLetter('orange'));


//                                           #Task8.
// You‘re given a string of words.You need to find the word “Nemo“, and return a string like this :
// “I found Nemo at [the order of the word you find Nemo]!“ if you can’t find Nemo,return “I can’t find Nemo

// let findNemo = (text) => {      // function declaration
//     let  words = text.split(' ')
//     for (let i = 0; i < words.length; i++) {
//         if (words[i] == 'Nemo') {
//             return `I found Nemo at ${i}!`
//         } 
//     }
//     return `I can't find Nemo`
// }
// console.log(findNemo('I am finding Nemo !'));
// console.log(findNemo('Nemo is me'));
// console.log(findNemo('“I am Nemo'));
// console.log(findNemo('“I am a pupil'));

//                                          #Task9
// Write a function that takes a string of one or more words as an
// argument and return the same string, but with all five or more letter
// words reversed. Strings passed in will consist of only letters and
// spaces.Spaces will be included only when more than one word is present

// let reverseWords = function (text) {
//     let wordsText = text.split(' ')
//     let newWord = ''
//     for (let i = 0; i < wordsText.length; i++) {
//        newWord += `${wordBiggerFive(wordsText[i])} `
//     }
//     return newWord
// }
// function wordBiggerFive(word) {
//     if (word.length >= 5) {
//         return word.split('').reverse().join('')
//     } return word
// }
// console.log(reverseWords('Reverse'));
// console.log(reverseWords('This is a lacipyt sentence.'));
// console.log(reverseWords('The dog is big'));


//                                                 #Task10
// Create a function that takes a string and return deshes on the left and right side of every vowel ( a ,e , i , o , u ).

// function dashed(text) {
//     let splitText = text.split('')
//     let newText = ''
//     for (let i = 0; i < splitText.length; i++) {
//         newText += hasVowel(splitText[i])
//     }
//     return newText
// }
// function hasVowel(word) {
//     let vowels = 'aeiouAEIOU'
//     if (vowels.includes(word)) {
//         return `-${word}-`
//     }
//     return word
// }

// console.log(dashed('Edabit'));
// console.log(dashed('Carpe Diem'));
// console.log(dashed('Fight for your right to party!'));


//                                                 #Task11
// Create a function which takes in a number n as input and return all
// numbers up to and including n joined together in a strung in a string.
// Separate each digit from each other which the character.

// function joinDigit(n) {
//     let newNumber = ''

//     for (let i = 1; i < n; i++) {
//         newNumber += `${i}-`
//     }
//     return `${newNumber}${n}`
// }
// console.log(joinDigit(4));
// console.log(joinDigit(11));
// console.log(joinDigit(15));


//                                                  #Task12.
// A palindrome is a word that is identical forward and backwards.
// Given a word, create a function that checks whether it is a palindrome

// function checkPalindrome(word) {
//     let newWord = word.split('').reverse().join('')
//     return newWord === word
// }
// console.log(checkPalindrome('mom'));
// console.log(checkPalindrome('scary'));
// console.log(checkPalindrome('reviver'));

//                                                    #Task13
//  Create a function that takes two strings as arguments and returns
// the number of times the first string (the single character) is found in the second string.

// function charCount(letter, word) {
//     let newWords = word.split('')
//     let countLetterOfWord = 0
//     for (let i = 0; i < newWords.length; i++) {
//         if (letter == newWords[i]) countLetterOfWord++
//     }
//     return countLetterOfWord
// }
// console.log(charCount('a', 'edabita'));
// console.log(charCount('c', 'Chamber of secrets'));
// console.log(charCount('b', 'big fat bubble'));


//                                                        #Task14 --------------------------------------
// Create a function that moves all capital letters to the front of a word.

// function capTOFront(word) {
//     let newWord = word.split('')
//     let text = ''
//     for (let i = 0; i < newWord.length; i++) {
//         if (newWord[i] == newWord[i].toUpperCase()){
//             text += newWord[i]
//             newWord[i].slice(i)
//         }
//     }
//     return `${text}${newWord}`

// }
// console.log(capTOFront('hApPy'));
// console.log(capTOFront('moveMENT'));
// console.log(capTOFront('shOrtCAKE'));


//                                                  #Task15
//Write a function that takes an integer i and returns an integer with the integer backwards followed by the original integer

// function reverseAndNot(n) {
//     let nuumbers = n.toString()
//     let reverseNumber = nuumbers.split('').reverse().join('')
//     return `${reverseNumber}${n}`
// } 
// console.log(reverseAndNot(123));
// console.log(reverseAndNot(152));
// console.log(reverseAndNot(123456789));
