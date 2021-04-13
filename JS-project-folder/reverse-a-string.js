function reverseString(str) {
  let revstr = "";
  let temp = [];
   for(let i = 0; i < str.length; i++){
      temp.unshift(str[i]);
  }
  for(let i=0; i<str.length;i++){ 
  revstr += temp.shift();
  }
  //console.log(temp);
  return revstr;
}
reverseString("hello");


/* Basic Algorithm Scripting: Reverse a String:

Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.

 */