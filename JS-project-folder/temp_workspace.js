function steamrollArray(arr) {
  let tempArr = [...arr]
  let index1 = [];
  let index2 = [];
  let index3 = [];
  let index4 = [];
  let finalArr = []
  console.log(arr)
  console.log(arr[2].length)
  //for(let i = 0; i< tempArr.length; i++){}
      index1 = arr[0]// if array length === 1, then shift to new array. if < 1 or undefined then skip to the next element.
      index2 = arr[1]
      index3 = arr[2] // first remove this element. then go into the if statement
      index4 = arr[2][1] // if arr length is >1 use another loop to pullout element.
      finalArr= [index1, index2.shift(), index3.shift(), index4.shift().shift()]
      console.log(finalArr)
        //for(let j = 1; j< tempArr.length; j++){console.log()}
  //console.log(flatArr)
  return finalArr;
}

let result = steamrollArray([1, [2], [3, [[4]]]]);
console.log(result)

//steamrollArray([1, [2], [3, [[4]]]]);
//steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
//steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
//steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
//steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
//Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.