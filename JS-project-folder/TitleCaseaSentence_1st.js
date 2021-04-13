function titleCase(str) {
  str = str.toLowerCase(str); // sets string to lower case.
  let strarr = [];
  let tempstr = " ";
 for(let i = 0; i < str.length; i++){
      strarr.push(str[i]);
  };
 for(let i = 0; i < str.length; i++){
    if(strarr[i] === " "){
      strarr[i + 1] = strarr[i + 1].toUpperCase()
      }
   strarr[0] = strarr[0].toUpperCase()
    }
  for(let i=0; i < str.length; i++){ 
      tempstr += strarr.shift();}
      str = tempstr;
  return str;
}

console.log(titleCase("I'm a little tea pot"));
//titleCase("sHoRt AnD sToUt");
//titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");


function titleCase(str) {
  str = str.toLowerCase(str); // sets string to lower case.
  let strarr = [];
  let tempstr = " ";
 for(let i = 0; i < str.length; i++){
      strarr.push(str[i]);
  } // puts str into an array
 for(let i = 0; i < str.length; i++){
    if(strarr[i] === " "){
      strarr[i + 1] = strarr[i + 1].toUpperCase()
      }
    }
strarr[0] = strarr[0].toUpperCase() // Sets first index to capital.
  for(let i=0; i < str.length; i++){ 
      tempstr += strarr.shift();
      } // puts the array back into a string.
      str = tempstr;
  return str;
}

console.log(titleCase("I'm a little tea pot"));
//titleCase("sHoRt AnD sToUt");
//titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");
