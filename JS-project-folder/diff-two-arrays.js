Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note
You can return the array with its elements in any order.


function diffArray(arr1, arr2) {
  var newArr = [];
  let testlen =0;
  // find longest array length for loop
  if(arr1.length > arr2.length){// if arr1 has a longer length
    testlen = arr1.length;
    for(let i=0; i< testlen; i++){
      if (arr2.indexOf(arr1[i]) === -1) {
      newArr.push(arr1[i]);
      console.log(arr2.indexOf(arr1[i]) === -1)
      }
      else{};}
      if(arr1.length > arr2.length){// if arr1 has a longer length
    testlen = arr2.length; }
    for(let j=0; j< testlen; j++){
      console.log(arr1.indexOf(arr2[j]))
      if (arr1.indexOf(arr2[j]) === -1) {
      newArr.push(arr2[j]);
      
      }}
  } else {
    testlen = arr2.length;
    // if arr2 has a longer length
  for(let i=0; i< testlen; i++){
      if (arr1.indexOf(arr2[i]) === -1) {
      newArr.push(arr2[i]);}
      }
      //place second loop here
    testlen = arr1.length;
    console.log(testlen);
    for(let j=0; j< testlen; j++){
      //console.log(arr2.indexOf(arr2[j]))
      if (arr2.indexOf(arr1[j]) === -1) {
      newArr.push(arr1[j]);}
    } 
  }
  //console.log(testlen)// test loop condition
// loop to compare one array to the other
    
  return newArr;
}

let result = diffArray([7, "filly"], [1, "calf", 3, "piglet"]);
console.log(result)

/*
compare one element to the other array, if no match then return that element.
 */