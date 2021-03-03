const words = ["Gabriel", "Lucas", "Alexandre"]
const toRemove = ["Alexandre", "Gabriel"]
let cleaned = []
const without = function (words, toRemove) {
  for (i = 0; i < words.length; i++) {
    if (!toRemove.includes(words[i])) {
      cleaned.push(words[i])
    }
  }
  return cleaned
};


console.log("The original array is: ", words)
console.log("To be removed: ", toRemove)
console.log("The new array is: ", without(words, toRemove))




// Another approach
// const without = function(sourceArray, itemsToRemove) {
//   let newArray = [];
//   for(let i = 0; i < sourceArray.length; i++){
//     let mark = 0;
//     for(let j =0; j < itemsToRemove.length; j++){
//       if (sourceArray[i] === itemsToRemove[j]) {
//         mark = 1
//       }
//     }
//     if (mark == 0) {
//       newArray.push(sourceArray[i]);
//     }
//     }
//     return newArray;