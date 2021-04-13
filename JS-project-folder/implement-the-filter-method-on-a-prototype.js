Write your own Array.prototype.myFilter(), which should behave exactly like Array.prototype.filter(). You may use a for loop or the Array.prototype.forEach() method.


// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){

  // Only change code below this line
  var newArray = [];
  let arr = [];
  newArray = s.slice(0,s.length);
  for (let i = 0; i < s.length; i++){
      if (newArray[i] % 2 === 1){
          arr.push(newArray[i])
       }
   }
  newArray = arr

  // Only change code above this line
  return newArray;

};

var new_s = s.myFilter(function(item){
  return item % 2 === 1;
});
console.log(new_s)