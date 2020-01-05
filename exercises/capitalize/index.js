// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let result = []
  const strArray = str.split(" ")
  strArray.map(elem => {
    elem = elem[0].toUpperCase() + elem.slice(1)
    result.push(elem)
  })
  return result.join(" ")
}

capitalize("a lazy fox")

module.exports = capitalize

// function capitalize(str) {
//   let result = ""
//   const strArray = str.split(" ")
//   strArray.map(elem => {
//     elem = elem[0].toUpperCase() + elem.slice(1)
//     result = result + " " + elem
//   })
//   return result.slice(1)
// }
