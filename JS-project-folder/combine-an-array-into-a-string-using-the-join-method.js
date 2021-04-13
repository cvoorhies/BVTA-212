


function sentensify(str) {

  // Only change code below this line

  let arrNew =[];
  arrNew = str.split(/\W/);  
 
  arrNew = arrNew.join(" ");
  return arrNew;

  // Only change code above this line
}

let results = sentensify("May-the-force-be-with-you");
console.log(results)

Test Cases:

Your code should use the join method.

Your code should not use the replace method.

sentensify("May-the-force-be-with-you") should return a string.

sentensify("May-the-force-be-with-you") should return "May the force be with you".

sentensify("The.force.is.strong.with.this.one") should return "The force is strong with this one".

sentensify("There,has,been,an,awakening") should return "There has been an awakening".