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