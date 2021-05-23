function convertToRoman(num) {
  //Every 5 change symbol
//every 4 = new symbol - 1

//function to loop 1 through 10
let symbolObj = {
  1:"I",
  5:"V",
  10:"X",
  50:"L",
  100:"C",
  500:"D",
  1000:"M"
  };
let tempRN = "";

//initially reduce the values down to < 10 by each symbol.
while (num >= 10){
	if (num >= 1000) {
		  tempRN += symbolObj["1000"];
		  num -= 1000;
		} else if (num >= 900){ 
      tempRN += symbolObj["100"] + symbolObj["1000"];
      num -= 900;
    } else if (num >= 500){
      tempRN += symbolObj["500"];
		  num -= 500;
    } else if (num >= 400){ 
      tempRN += symbolObj["100"] + symbolObj["500"];
      num -= 400;
    } else if (num >= 100){
      tempRN += symbolObj["100"];
		  num -= 100;
    } else if (num >= 90){
      tempRN += symbolObj["10"] + symbolObj["100"];
		  num -= 90; 
    } else if (num >= 50){
      tempRN += symbolObj["50"];
		  num -= 50;
    } else if (num >= 40){ 
      tempRN += symbolObj["10"] + symbolObj["50"];
      num -= 40;
    } else if (num >= 10){
      tempRN += symbolObj["10"]
      num -= 10;
    } 
  }

// reduce below 10
while (num < 10 && num > 0){
  if (num >= 9){ 
      tempRN += symbolObj["1"] + symbolObj["10"];
      num -= 9;}
  else if (num >= 5){
        tempRN += symbolObj["5"]
        num -= 5;}
  else if (num >= 4) {
        tempRN += symbolObj["1"] + symbolObj["5"]
        num -= 4;}
  else if (num < 4){
        tempRN += symbolObj["1"]
        num -= 1;}
    }
  
  //console.log(num)
  num = tempRN.toString("");
  return num;
}

console.log(convertToRoman(3999));
