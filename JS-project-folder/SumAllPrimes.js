/*A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.  */


function sumPrimes(num) {
let primeArr = [];
let incPrime = 2;
let j = 1;
let sum = 0;

//fill the array
for(let i = 2; i < num+1;i++){
    primeArr.push(i); 
  }
// loop through the array to remove non-prime numbers.
while(j !== 12){ // Not sure why 12, need to find something to relate so can make it a variable.

for(let i = incPrime; i <= primeArr.length; i++){
  if(primeArr[i] % incPrime === 0 ){
     primeArr.splice(i,1)}
    }
//Loop control
incPrime = primeArr[j] 
j++;
}
// sums allthe prime numbers
for(let i = 0; i < primeArr.length; i++){
  sum = primeArr[i] + sum;
} 
  return sum;
}

let result = sumPrimes(10);
console.log(result)

/* Test Cases:
sumPrimes(10) should return a number.
sumPrimes(10) should return 17.
sumPrimes(977) should return 73156.*/