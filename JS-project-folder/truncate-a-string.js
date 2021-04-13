function truncateString(str, num) {
 let threeDots = "...";
 let trunkStr = str.slice(0, num);
 console.log(str.length);
 console.log(num);
 if(str.length <= num){
   str = trunkStr;
 } else{
   str = trunkStr + threeDots;}
   console.log(str);
  return str;
}

//truncateString("A-tisket a-tasket A green and yellow basket", 8);
//truncateString("Peter Piper picked a peck of pickled peppers", 11);
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
//truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);
//truncateString("A-", 1);
//truncateString("Absolutely Longer", 2);