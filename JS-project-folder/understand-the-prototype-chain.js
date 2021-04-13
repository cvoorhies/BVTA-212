All objects in JavaScript (with a few exceptions) have a prototype. Also, an object’s prototype itself is an object.

function Dog(name) {

  this.name = name;

}



let beagle = new Dog("Snoopy");



Dog.prototype.isPrototypeOf(beagle);  // yields true

// 

Fix the code below so that it evaluates to true
Object.prototype.isPrototypeOf(Dog.prototype);


Dog.hasOwnProperty("name");


Because a prototype is an object, a prototype can have its own prototype! In this case, the prototype of Bird.prototype is Object.prototype:

Object.prototype.isPrototypeOf(Bird.prototype); // returns true