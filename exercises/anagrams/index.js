// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False
const cleanString = word =>
  word
    .toLowerCase()
    .replace(/[^\w\s]/gi, "")
    .split("")
    .sort()
    .join("")
    .trim()

const createMap = (word, map) => {
  for (letter of word) {
    if (!map[letter]) {
      map[letter] = 1
    } else map[letter]++
  }
}

function anagrams(stringA, stringB) {
  const mapA = {}
  const mapB = {}
  const wordA = cleanString(stringA)
  const wordB = cleanString(stringB)
  createMap(wordA, mapA)
  createMap(wordB, mapB)
  return JSON.stringify(mapA) === JSON.stringify(mapB)
}

module.exports = anagrams
