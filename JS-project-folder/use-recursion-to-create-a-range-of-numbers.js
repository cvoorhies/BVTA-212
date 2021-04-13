function rangeOfNumbers(startNum, endNum) {

  if(endNum+1 <= startNum ){

  return [];

  } else{

    const countArray = rangeOfNumbers(startNum, endNum - 1);

    countArray.push(endNum);
    return countArray;

  }

};



console.log(rangeOfNumbers(4,4));