/*
Smallest Common Multiple
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
*/



function smallestCommons(arr) {
  let seqArr = [];
  let fnum = arr[1];
  let lnum = arr[0];
  let lcm = 0;
  let templcm = 0;
  let fillCnt = 0;
// set the first two numbers in correct order;
if(arr[0]> arr[1]){
  fnum = arr[0];
  lnum = arr[1];
}

// fill the array with sequential numbers from largest to smallest
for(let i = fnum; i > lnum - 1; i--){
  seqArr[fillCnt] = i;
  fillCnt++}

templcm = seqArr[0]*seqArr[1] // set the first LCM to test

//go through the arr to find the LCM for all of the numbers.
for(let i = 0; i < seqArr.length; i++){
  if(templcm % seqArr[i] !== 0){
  i=0
  templcm = templcm + fnum
  }
 }

lcm = templcm

  return lcm;
}


let result = smallestCommons([23, 18]);
console.log(result)
/*
test cases:
smallestCommons([1, 5]) should return a number.

smallestCommons([1, 5]) should return 60.

smallestCommons([5, 1]) should return 60.

smallestCommons([2, 10]) should return 2520.

smallestCommons([1, 13]) should return 360360.

smallestCommons([23, 18]) should return 6056820.


*/