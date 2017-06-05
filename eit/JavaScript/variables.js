/*  let
let allows us to declare block-level variables. The declared variable is available from
the function block it is enclosed in.
*/


let a;
let name = 'Simon';

// myLetVal is *not* visible out here

for (let myLetVal = 0; myLetVal < 5; myLetVal++){
    // myLetVal is only visible in here
}

// myLetVal is *not* visible out here

//----------------------------------------------------------------------------------------//

/* const
const allows us to declare variables whose values are never intended to change.
The variable is available from the function block it is declared in.
*/

const Pi = 3.14; // variable Pi is set
Pi = 1; // will throw an error because you cannot change a constant value


//----------------------------------------------------------------------------------------//

/* var
var is the most declarative keyword. It does not have the restrictions that the other 
two keywords have. A variable declared with the var keyword is available from the function
block it is declared in.
*/

var a;
var name = 'Simon';

// myLetVal *is* visible out here

for (let myLetVal = 0; myLetVal < 5; myLetVal++){
    // myLetVal is visible to the whole function
}

// myLetVal *is* visible out here