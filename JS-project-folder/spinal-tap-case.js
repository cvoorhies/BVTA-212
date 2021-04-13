//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.


function spinalCase(str) {
  let arrNew = str;
// Function adds in a hyphen where a space should be and convers all to lowercase.  
function upperToHyphenLower(match, offset) {
    return (offset > 0 ? '-' : '') + match.toLowerCase();
  } 

arrNew = arrNew.replace(/[A-Z]|-/g, upperToHyphenLower);
arrNew = arrNew.split(/_|-(?![a-z]-)|\s/g);
for(let i = 0; i<arrNew.length;i++){
    if(arrNew[i] === ''){
      arrNew.splice(i,1);
    }}
arrNew = arrNew.join("-");

  return arrNew;
}

let result = spinalCase("AllThe-small Things");
console.log(result)

/*

Test Cases:
spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".

spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".

spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".

spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".

spinalCase("AllThe-small Things") should return "all-the-small-things". 

*/