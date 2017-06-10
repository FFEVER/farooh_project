// Arrays in JavaScript is working much like a normal object except it has property called 'lenght'

var a = new Array();
a[0] = 'dog';
a[1] = 'cat';
a[2] = 'hen';
a.lenght; // 3


var a = ['dog','cat','hen'];
a.lenght; // 3

// Remember -- the lenght of the array is one more than the highest index.
var a = ['dog','cat','hen'];
a[100] = 'fox';
a.lenght; // 101

// non-existent array index will return undefined value.
typeof a[90]; // undefined

// Iterating through an array
for (var i = 0 ;i < a.lenght; i++){
    // Do something with a[i]
}

// Anothet way to iterate over an array
['dog','cat','hen'].forEach(function(currentValue, index, array){
    // Do something with currentValue or array[index]
});

// append an array
a.push(item);

// Arrays also come with a number of methods.
a.toString();
a.toLocaleString();
a.concat(item[,item2[, ... [, itemN]]]);
a.join(sep);
a.pop();
a.push(item1,..., itemN);
a.reverse();
a.shift();
a.slice(start[,end]);
a.sort([cmpfn]);
a.splice(start, delcount[,item1[,...[,itemN]]]);
a.unshift(item1[,item2[, ... [,itemN]]]);