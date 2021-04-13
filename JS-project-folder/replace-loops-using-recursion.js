function sum(arr, n) {
  // Only change code below this line
if (n <= 0) {
      return 0;
    } else {
      return sum(arr, n - 1) + arr[n - 1];
    };
    
  // Only change code above this line
}
sum([1], 0) should equal 0. 
Passed
sum([2, 3, 4], 1) should equal 2.
Passed
sum([2, 3, 4, 5], 3) should equal 9.
Passed
Your code should not rely on any kind of loops (for or while or higher order functions such as forEach, map, filter, or reduce.).
Passed
You should use recursion to solve this problem.

/* Notes:
  the second digit in the call is the number of elements in the array that the function will be (in this case) adding together. 
  arr[n-1] is the element of the array passed in by sum. in the case of sum equals 9, the recursive count goes n=3 arr[ 3-1] =arr[2], + n=2 arr[2-1] = arr[1], +n=1 
  arr[1-1]= arr[0]. so look at the array, arr[2]='4' + arr[1]+'3' + arr[0]='2' and the sum is 4 + 3 + 2 = 9.