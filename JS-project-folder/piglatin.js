Pig Latin
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

- If a word begins with a vowel, just add "way" at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

function translatePigLatin(str) {
  //variables needed
  let myRegex = /[^aeiou]/;
  let count = 0;
  let tstArr = str.match(/\w/gi);//Puts string into an array
// Is the first letter a constant?
if(myRegex.test(tstArr[0])){
//While first letter is a constant cut and paste at the end of the word. 
while(myRegex.test(tstArr[0]) && count < str.length){
  tstArr.push(tstArr[0]);
  tstArr.splice(0,1);
 count++
 //if there isn't a vowel just add "ay" to the end of the word and return.
   }
}// if the word begins with a vowel, add 'way' to the end of the word
else{
     tstArr.push('way')
     return str = tstArr.join("")
}
if(count == tstArr.length){
      tstArr.push('ay')
      return str = tstArr.join("") // puts array back into a string;
} else{
  tstArr.push('ay')
  }
  return str = tstArr.join("") // puts array back into a string;
}

var results = [];

results.push(translatePigLatin("console"));
results.push(translatePigLatin("california"));
results.push(translatePigLatin("paragraphs"));
results.push(translatePigLatin("glove"));
results.push(translatePigLatin("algorithm"));
results.push(translatePigLatin("eight"));
results.push(translatePigLatin("schwartz"));
results.push(translatePigLatin("rhythm"));
console.log(results)


Test Conditions:
translatePigLatin("california") should return "aliforniacay".
translatePigLatin("paragraphs") should return "aragraphspay".
translatePigLatin("glove") should return "oveglay".
translatePigLatin("algorithm") should return "algorithmway".
translatePigLatin("eight") should return "eightway".
Should handle words where the first vowel comes in the middle of the word. translatePigLatin("schwartz") should return "artzschway".
Should handle words without vowels. translatePigLatin("rhythm") should return "rhythmay".