// if-else statement
var name = 'kittens';
if (name == 'puppies'){
    name += ' woof';
} else if (name == 'kittens'){
    name += ' meow';
} else{
    name += '!';
}

name == 'kittens meow';

// loops
while(true){
    // an infinite loop
}

var input;
do {
    input = get_input();
} while (inputIsNotValid(input));

for(var i = 0; i < 5 ; i++){
    // will execute 5 times
}

for (let value of array){
    // do something with value
}

for (let property in object){
    // do something with object property
}

// || and && operators use short-circuit logic, which means whether they will execute their operand is
// dependent on the first. This is useful for checking for null objects before accessing their attributes.
var name = o && o.getName();

// Or for caching values (when falsy values are invalid)
var name = cachedName || (cachedName = getName());

// ternary operator for conditional expressions
var allowed = (age > 18) ? 'yes' : 'no';

// switch statement
switch (action){
    case 'draw':
        drawIt();
        break;
    case 'eat':
        eatIt();
        break;
    default:
        doNothing();
}

