/* instructions:
Sum All Odd Fibonacci Numbers
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
*/



function sumFibs(num) {
  let numSum = 0;
  let fibArr = [1,1]
  //fill the array with the Fibonacci sequence
  for(let i = 2; fibArr[i-1] < num; i++){
     fibArr[i]= fibArr[i-1] + fibArr[i-2]
  }
// sum all the odd numbers up to num;
  for(let i = 0; fibArr[i] <= num; i++){
    //console.log(fibArr[i] % 2 !== 0)
    if(fibArr[i] % 2 !== 0){
      numSum += fibArr[i]
  }}
  return numSum;
}

let result = sumFibs(4);
console.log(result)

/*test cases
sumFibs(1) should return a number.
sumFibs(1000) should return 1785.
sumFibs(4000000) should return 4613732.
sumFibs(4) should return 5.
sumFibs(75024) should return 60696.
sumFibs(75025) should return 135721.
*/