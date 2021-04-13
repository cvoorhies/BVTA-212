Use the sort method in the nonMutatingSort function to sort the elements of an array in ascending order. The function should return a new array, and not mutate the globalArray variable.


var globalArray = [5, 6, 3, 2, 9];
  function nonMutatingSort(arr) {
         // Only change code below this line
            let arrNew = [];
              arrNew = arr.slice(0)

    return arrNew.sort(function(a, b) {
    return a - b;
       })
  // Only change code above this line
}
let results = nonMutatingSort(globalArray);
console.log(results);

Test Cases:
Your code should use the sort method.

The globalArray variable should not change.

nonMutatingSort(globalArray) should return [2, 3, 5, 6, 9].

nonMutatingSort(globalArray) should not be hard coded.

The function should return a new array, not the array passed to it.