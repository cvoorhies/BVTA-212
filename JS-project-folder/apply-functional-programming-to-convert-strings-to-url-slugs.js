// The global variable
var globalTitle = "Winter Is Coming";



// Only change code below this line


function urlSlug(title) {
  // Convert to all lowercase
 let slugUrl = title.toLowerCase();
 // remove spaces  
 let arrStr = slugUrl.split(/^\s+|\s+/g) //split string into array
 if(arrStr[0]===""){
 let temp = arrStr.splice(0,1)}
 console.log(arrStr)
  slugUrl = arrStr.join("-") // joins array by inserting "-"
 return slugUrl;
}

let result = urlSlug(globalTitle);
console.log(result)

Test cases:
The globalTitle variable should not change.

Your code should not use the replace method for this challenge.

urlSlug("Winter Is Coming") should return "winter-is-coming".

urlSlug(" Winter Is  Coming") should return "winter-is-coming".

urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone") should return "a-mind-needs-books-like-a-sword-needs-a-whetstone".

urlSlug("Hold The Door") should return "hold-the-door".