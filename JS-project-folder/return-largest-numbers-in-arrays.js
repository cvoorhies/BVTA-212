/*Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].  */


function largestOfFour(arr) {

  let count = [];
  
  let temp = 4;
  

for (let i = 0; i < arr.length;i++ ){

        temp = arr[i][0];

     for (let j = 0; j < arr[i].length;j++ ){
        if (temp <= arr[i][j]){

          temp = arr[i][j]

          count[i] = temp;

        }

     }

  }

      arr = count;

      console.log(arr)

return arr;

}




largestOfFour([[4, 5, 1, 3,], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
