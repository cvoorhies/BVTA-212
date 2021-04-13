Search and Replace
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note
Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"


function myReplace(str, before, after) {
    //first search through string for "before" word. identify all words that start with the same letter as the "before" word. Use 
let testIndex = 0;
let newCapWord = ""

//Set element to test for a capital letter
testIndex = str.search(before);

//test to see if after needs to be capitalized

if(/[A-Z]/.test(str[testIndex])){

 // set first letter to capital then slice in the rest of the word. then replace after with new word.

  newCapWord = after.charAt(0).toUpperCase() + after.slice(1);
  after = newCapWord
};

//Replace the word in the string

str = str.replace(before, after);

  return str;
}

let result = [];
result = myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
//result = myReplace("Let us go to the store", "store", "mall");
//result = myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
//result = myReplace("This has a spellngi error", "spellngi", "spelling");
//result = myReplace("His name is Tom", "Tom", "john");
//result = myReplace("Let us get back to more Coding", "Coding", "algorithms");
console.log(result)