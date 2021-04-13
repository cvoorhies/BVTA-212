/*Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.*/


function fearNotLetter(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz"
  let result = undefined;
  let found =""
  //Identify the starting letter of the str
  for(let i = 0;i < alphabet.length;i++){
   if(str[0] === alphabet[i]){
     found = i;
    }
  }
 // find the missing letter
  for(let i = 0;i < str.length;i++){
    if(str[i] !== alphabet[found]){
      return result = alphabet[found];
       }
       found++;
  }
  return result;
}

let result = fearNotLetter("abcdefghjklmno");
console.log(result)

//Test cases:
/*
fearNotLetter("abce") should return "d".

fearNotLetter("abcdefghjklmno") should return "i".

fearNotLetter("stvwx") should return "u".

fearNotLetter("bcdf") should return "e".

fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.
*/