// The most basic function in JavaScript
function add(x,y){
    var total = x + y;
    return total;
}

// You can call a function without passing the parameters it expects,
// in which case they will be set to undefined.
add(); // NaA
// You can't perform addition on undifined so it return NaN.


// You can also pass in more arguments that the function is expecting.
add(2,3,4,); // 5
// added the first two; 4 was ignored


// function 'arguments' variable
function add(){
    var sum = 0;
    for(var i = 0, j = arguments.length;i < j; i ++){
        sum += arguments[i];
    }
    return sum;
}

add(2,3,4,5); // 14

// 'spread syntax'

function avg(...args){
    var sum = 0;
    for(let value of args){
        sum += value;
    }
    return sum / args.length;
}

avg(2,3,4,5); // 3.5

// the above function avg, 'args' holds all vaues that were passed into the function.
// but it will store all arguments after its declaration, but not before.
// i.e.
function avg(firstValue, ...args){
    // will store the first value passed into the function in the 'firstValue' variable
    // and the remaining arguments in 'args'
}


// what if you want a function avg to find the average of an array, you can rewrite it like this:
function avgArray(arr){
    var sum = 0;
    for( var i = 0, j = arr.length; i < j; i++){
        sum += arr[i];
    }
    return sum / arr.length;
}

avgArray([2,3,4,5]); // 3.5


// But it would be nice to reuse the function that we've already created.
// Luckily, JavaScript lets you call a function with an arbitrary array of arguments, using the apply() method

avg.apply(null, [2,3,4,5]); // 3.5

//JavaScript also lets you create anonymous functions. (unnamed function)
var avg = function(){
    var sum = 0;
    for (var i = 0, j = arguments.length; i < j; i ++){
        sum += arguments[i];
    }
    return sum / arguments.length;
}

// Here's a way of 'hiding' some local variables -- like blokc sccope in C
var a = 1;
var b = 2;

(function() {
    var b = 3;
    a += b;
})();

a; // 4
b; // 2


