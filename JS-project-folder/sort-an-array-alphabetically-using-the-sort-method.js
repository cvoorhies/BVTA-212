Examples:
function ascendingOrder(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}
ascendingOrder([1, 5, 2, 3, 4]);
// Returns [1, 2, 3, 4, 5]

function reverseAlpha(arr) {
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? 1 : -1;
  });
}
reverseAlpha(['l', 'h', 'z', 'b', 's']);
// Returns ['z', 's', 'l', 'h', 'b']



Use the sort method in the alphabeticalOrder function to sort the elements of arr in alphabetical order.


function alphabeticalOrder(arr) {
  // Only change code below this line

  return arr.sort(function(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
  });


  // Only change code above this line
}
let result = alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
console.log(result)


test cases:

Your code should use the sort method.

alphabeticalOrder(["a", "d", "c", "a", "z", "g"]) should return ["a", "a", "c", "d", "g", "z"].

alphabeticalOrder(["x", "h", "a", "m", "n", "m"]) should return ["a", "h", "m", "m", "n", "x"].

alphabeticalOrder(["a", "a", "a", "a", "x", "t"]) should return ["a", "a", "a", "a", "t", "x"].