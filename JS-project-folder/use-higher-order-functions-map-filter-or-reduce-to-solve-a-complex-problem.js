We have defined a function named squareList. You need to complete the code for the squareList function using any combination of map(), filter(), and reduce() so that it returns a new array containing only the square of only the positive integers (decimal numbers are not integers) when an array of real numbers is passed to it. An example of an array containing only real numbers is [-3, 4.8, 5, 3, -3.2].


const squareList = (arr) => {

  // Only change code below this line

  
  let arrInt = arr

    .filter(arr => {
    return arr > 0 & arr % 1 === 0;
    })

    .map(sum => sum * sum)
  
    
    arr = arrInt;
  return arr;

  // Only change code above this line
};



const squaredIntegers = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]);

console.log(squaredIntegers);

Test Cases:
squareList should be a function.

for or while loops or forEach should not be used.

map, filter, or reduce should be used.

The function should return an array.

squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]) should return [16, 1764, 36].

squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]) should return [9, 100, 49].