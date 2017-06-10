// JavaScript objects are similar to:
// Dicctionaries in Python, Hashes in Perl and Ruby, Hash tables in C and c++
// HashMaps in Java and Associative arrays in PHP.


//Creating a new empty object.
var obj = new Object();
//or
var obj = {};


// Initialize an object.
var obj = {
    name: 'Carrot',
    for: 'Max', // 'for' is a reserved word, use '_for' instead.
    details:{
        color: 'orange',
        size: 12
    }
}

// Accessing an object.
obj.details.color; // orange
obj['details']['size']; // 12


// Creating an object prototype.
function Person(name,age){
    this.name = name;
    this.age = age;
}

// Define an object
var You = new Person('You',24);
// We are creating a new person named "You"
// (that was the first parameter, and the age..)


// Once created, an object's properties can gain be acccessed in one of two ways:
obj.name = 'Simon';
var name = obj.name;
// or
obj['name'] = 'Simon';
var name = obj['name'];

obj.for = 'Simon';  //Syntax error, because 'for' is a reserved word
obj['for'] = 'Simon'; // works fine

