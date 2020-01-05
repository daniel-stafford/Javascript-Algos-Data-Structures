// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	let max = 0
	let maxChar = ""
	let charMap = {}
	for (let char of str) {
		charMap[char] = charMap[char] + 1 || 1
	}
	for (const char in charMap) {
		if (charMap[char] > max) {
			max = charMap[char]
			maxChar = char
		}
	}
	return maxChar
}

maxChar("dogg")

module.exports = maxChar

// function maxChar(str) {
// 	let max = 0
// 	let maxChar = ""
// 	const charMap = {}
// 	for (let char of str) {
// 		charMap[char] = charMap[char] + 1 || 1
// 	}
// 	for (let [key, value] of Object.entries(charMap)) {
// 		if (value > max) {
// 			max = value
// 			maxChar = key
// 		}
// 	}
// 	return maxChar
// }
