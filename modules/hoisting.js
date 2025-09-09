/* Hoisting -- happens in var, let and const all the cases
var -> hoist -> undefined
let -> hoist -> x
const -> hoist -> x */

console.log(a);

var a = 34;

var a = undefined; // declaration part  (this part moves to the top of the code)
a = 34; // initialization part

console.log(val); // can't be accessed before initialization not declaration (right now it's in temporal dead zone)

let val = 78;
