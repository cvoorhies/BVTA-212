/*Return the length of the longest word in the provided sentence.

Your response should be a number.*/

function findLongestWordLength(str) {
  let temp = [];
  let lngwrd = 0;
  let wrd = " ";
  temp = str.split(" "); //splits string into an array.
  for(let i = 0; i < temp.length; i++){
        wrd = temp[i];
      if (lngwrd < wrd.length){
        lngwrd = wrd.length;
      }
  }
  return lngwrd;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
findLongestWordLength("The quick brown fox jumped over the lazy dog") should return 6.
findLongestWordLength("May the force be with you") should return 5.
findLongestWordLength("What is the average airspeed velocity of an unladen swallow") should return 8.
findLongestWordLength("What if we try a super-long word such as otorhinolaryngology") should return 19.