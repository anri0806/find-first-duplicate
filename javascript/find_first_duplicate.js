function findFirstDuplicate(arr) {
  // type your code here

  let newArr = -1;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
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

//// I want to iterate each number
//// Then, compare iterated number with variable =[]
//// If not, add to []

// I want to return first duplicate value in array

// First, array.find => if arr is not unique by comparing each value's index
// Then, return that value

// find the item that doesn't match index number

/// FIND A WAY TO RETURN -1 IF all the index matches
// (none of index doesnt match)
// return arr.find((item, index) => arr.indexOf(item) !== index);
