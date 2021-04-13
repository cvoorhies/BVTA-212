// Setup

var contacts = [
 
   {
    "firstName": "Akira",

        "lastName": "Laine",

        "number": "0543236543",

        "likes": ["Pizza", "Coding", "Brownie Points"]

    },

    {
   "firstName": "Harry",

        "lastName": "Potter",

        "number": "0994372684",

        "likes": ["Hogwarts", "Magic", "Hagrid"]

    },

    {
   "firstName": "Sherlock",

        "lastName": "Holmes",

        "number": "0487345643",

        "likes": ["Intriguing Cases", "Violin"]

    },

    {
        "firstName": "Kristian",

        "lastName": "Vos",

        "number": "unknown",

        "likes": ["JavaScript", "Gaming", "Foxes"]

    }
];




function lookUpProfile(name, prop){

// Only change code below this line

var indexNum = 0;

var myResults = "";

var badResults = "";

var badResultscount = 0;

// Identify index

for (var i=0; i < contacts.length; i++){

   if(contacts[i]["firstName"] === name)
   {

	indexNum = i;

	} else
 
     badResultscount++;
 
    }

if (badResultscount === contacts.length)
        {
  
      badResults = "No such Contact";

      console.log("No such Contact");

      return "No such contact";
      
}


//looking for "address" and should return "No such property"

if(prop === "address")
      {

        badResults = "No such property";

        console.log(badResults);

        return badResults;
	  
}


// display results

myResults = contacts[indexNum][prop];

console.log(myResults);

return myResults;

// Only change code above this line

}



//lookUpProfile("Akira", "likes");

//lookUpProfile("Kristian", "lastName");

//lookUpProfile("Sherlock", "likes");

//lookUpProfile("Harry","likes");

//lookUpProfile("Bob", "number");

//lookUpProfile("Bob", "potato");

//lookUpProfile("Akira", "address");