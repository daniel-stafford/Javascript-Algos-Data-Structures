// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
	const reversed = n
		.toString()
		.split("")
		.reverse()
		.join("")
	console.log(reversed)
	const result = parseInt(reversed) * Math.sign(n)
	console.log(result)
	return result
}

reverseInt(-211)

module.exports = reverseInt

// function reverseInt(n) {
// 	let reversed
// 	reversed = parseInt(
// 		n
// 			.toString()
// 			.split("")
// 			.reverse()
// 			.join(""),
// 		10
// 	)
// 	console.log(reversed)
// 	if (n < 0) {
// 		reversed = -reversed
// 	}
// 	console.log(reversed)
// 	return reversed
// }
