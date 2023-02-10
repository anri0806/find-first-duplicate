function findFirstDuplicate(arr) {
  // type your code here

  let newArr = -1

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      if (arr[i] === arr[j]) {
        newArr = arr[i]
      }
    }
  }

  return newArr
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file

//// Create variable = -1
//// Iterate i (starts from index 0) and j (index 1)
//// If matched, var = i


// THIRD ATTEMPT

// newArr = -1;

// arr.find((currentValue, currentIndex) =>
//   arr.indexOf(currentValue) !== currentIndex ? (newArr = currentValue) : null
// );

// return newArr;



//// SECOND ATTEMPT
// I want to return first duplicate value in array
// First, array.find => if arr is not unique by comparing each value's index
// Then, return that value

// // Using .find ///

// let newArr = -1;
// arr.find((item, index) =>
//   arr.indexOf(item) !== index ? (newArr = item) : null
// );

// return newArr

//// Using for loop ///

// let newArr = -1;

// for (let i = 0; i < arr.length - 1; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] === arr[j]) {
//       newArr = arr[i]
//     }
//   }
// }

// return newArr

//// FIRST ATTEMPT
//// I want to iterate each number
//// Then, compare iterated number with variable =[]
//// If not, add to []
