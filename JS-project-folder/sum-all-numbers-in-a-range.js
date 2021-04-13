We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

function sumAll(arr) {
      let result = 0;
      // set the start     
        let a = arr[0];
        let b = arr[1];
        let sum = a;
        let count = a+1;
 // determine which arg is bigest
  if (b>a){
       for(let i=a ;i < b; i++){
          sum = sum + count;
          count++;
          result = sum;
           }
       } else{
          sum = b;
          count = b+1;
         for(let i=b ;i < a; i++){
         sum = sum + count;
         count++;
        result = sum;}
  }
  return result;
}

let result = sumAll([5, 10]);
console.log(result)

Test Cases:
sumAll([1, 4]) should return a number.

sumAll([1, 4]) should return 10.

sumAll([4, 1]) should return 10.

sumAll([5, 10]) should return 45.

sumAll([10, 5]) should return 45.