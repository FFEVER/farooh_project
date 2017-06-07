x += 5;
x = x + 5;

'hello' + ' world'; //"hello world"

'3' + 4 + 5; // "345"
3 + 4 + '5'; // "75"

10 + ''; // "10"

123 == '123'; // true
1 == true // true

// to avoid type coercion, use the triple-equals operator:

123 === '123'; // false
1 === true; // false

// JavaScript also has bitwise operations. 
1 & 1 // AND
1 | 0 // OR
1 ^ 1 // XOR
~ 0 // NOT
a << b // Left shift
a >> b // sign-propagating right shift
a >>> b // Zero-fill right shift