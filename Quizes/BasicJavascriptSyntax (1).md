# 1. Name at least three of the primitive data types in Javascript.
String, Number, boolean

# 2. Name one non-primitive data type.
Objects, Array, function

# 3. What is the difference between a function parameter and a function argument?
parameters are items passed to the function, arguments are items the function uses.

# 4. Write at least 3 of the comparison operators in Javascript.
=== , < , >

# 5. Name 3 keywords that can be used to declare a variable.
Let, Var, Const

# 6. Create an array called `myArray`.
const myArray = [item1, item2, itemr3]

# 7. Create an object called `myObject`.
const myObject = { value : 10, Array: myArray[]}

# 8. Write two functions: one using the `fat arrow` syntax and one using the `function` keyword syntax.
const myfunc = () => {does something(), returns something}

# 9. Write a function that returns the number 5.
const function = () => { return 5;}

# 10. Write a function that takes two numbers and returns the sum of them.
const function mySum(a, b){ return a + b;}

# 11. Write a function that takes an array and returns the first index of the array.
const myArrayFunc = (anArray) => { return anArray[0];}

# 12. Write function that takes an array of numbers and returns the sum of all of the numbers.
const func = (array) => {
    return array.reduce((a,b) => a + b, 0)
}

# 13. Create an object with two properties and show two different ways to access them.
const myObj = {
    prop1 = value1,
    prop2 = value2
}

myObj.prop1;
myObj.prop2;

# 14. Create a function that takes two numbers and returns the number of times that the first number is divisible by the second number.
const myFunc = (a, b) => {
    return Math.floor (b / a);
}

# 15. List three array methods.
map(), reduce(), includes()