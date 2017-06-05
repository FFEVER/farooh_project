Math.sin(3.5); // Math object
var circumference = 2 Math.PI * r; //varialbe decarations


/* -------------------------------------------
parseInt() & parseFloat() 
------------------------------------------- */

// convert a string to an integer
parseInt('123',10); // 123
parseInt('010',10); // 10

// convert a string to hexadecimal
parseInt('010'); // 8
paseInt('0x10'); // 16

// convert a string to a binary number
parseInt('11',2); // 3

/* There is also parseFloat() that always use base 10 */

// We can also use unary + operator to convert values to numbers
+ '42';   // 42
+ '010';  // 10
+ '0x10'; // 16

// A special value called NaN (Not a Number) is returned if string is non-numeric
parseInt('hello',10); // NaN

/* ------------------------------------------- */

Nan + 5; // NaN
isNaN(NaN); //true

//JavaScript also has the special values Infinity and -Infinity
1/0; // Infinity
-1/0; // -Infinity

isFinite(1/0); // false
isFinite(-Infinity); // false
isFinite(NaN); // false



// Strings
'hello'.lenght; // 5
'hello'.charAt(0); // "h"
'hello, world'.replace('hello','goodbye'); // "goodbye, world"
'hello'.toUpperCase(); // "HELLO"

null // indicates a deliberate non-value

undefined // indicates an uninitialized value

// false, 0, empty strings(""),NaN,null,and undefined become false
false
// all other values become true
true

Boolean(''); // false
Boolean(234); // true

// Boolean operations such as &&, ||, ! are supported