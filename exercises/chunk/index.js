// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
	let chunked = []
	let myArray = []
	myArray.push(2)
	myArray
	myArray.push(3)
	myArray
	myArray.push([4])
	myArray
	for (let element of array) {
		element
		chunked
		const last = chunked[chunked.length - 1]
		last
		size
		if (!last || last.length == size) {
			chunked.push([element])
			chunked
		} else {
			chunked
			last.push(element)
			last
			chunked
		}
	}
	return chunked
}

chunk([1, 2, 3], 3)

module.exports = chunk

// function chunk(array, size) {
// 	let result = []
// 	let i = 0
// 	while (i < array.length) {
//     let chunk = array.slice(i, i + size)
//     chunk
// 		result.push(chunk)
// 		i = i + size
// 	}
// 	result
// 	return result
// }

// function chunk(array, size) {
// 	let chunked = []
// 	chunked
// 	for (let element of array) {
// 		const last = chunked[chunked.length - 1]
// 		if (!last || last.length == size) {
// 			chunked.push([element])
// 		} else {
// 			last.push(element)
// 		}
// 	}
// 	return chunked
// }
