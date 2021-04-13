/*
Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

*/
function dropElements(arr, func) {
  let len = arr.length
  let tempArr = [...arr]
  let num = []
  //console.log(len)
  for(let i = 0; i < len; i++){ 
    if(!func(tempArr[i])){
        arr.shift()
          }else return arr
    
    }
   //console.log(arr)
   //console.log(num)
   //console.log(remainder)
   //console.log(i)
  return arr;
}

let result = dropElements([1, 2, 3], function(n) {return n < 3;});
console.log(result)

//Test cases:
//dropElements([1, 2, 3], function(n) {return n < 3;});
//dropElements([1, 2, 3, 4], function(n) {return n >= 3;})
//dropElements([0, 1, 0, 1], function(n) {return n === 1;})
//dropElements([1, 2, 3], function(n) {return n > 0;})
//dropElements([1, 2, 3, 4], function(n) {return n > 5;})
//dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;})
//dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;})