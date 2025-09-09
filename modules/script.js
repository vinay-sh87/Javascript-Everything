// var let const

var a = 34;
let value = ((34 + 3) * 9) / 3;
console.log(value);
let username = "user77";
console.log(username);
b = 134; // bad practice

// declaration and initialization
var val; // declaration
var val = 88; // declaration and initialization (redeclaration is possible with var but not with let)

const pi = 3.14; // can't be changed

// Scope (global, block, functional)
var a = 7; // global scoped (can be accessed anywhere in the code)

{
    let val = 48; // block scoped (can't be accessed outside the block)
}


function f() {
    if (1) {
        var ab = 34; // functional scoped (can be accessed anywhere in the function)
        let cd = 8;
    }
    console.log(ab);
    // console.log(cd);
}
f();


var x = 1;
{
    var x = 3;
}
console.log(x); // 3 (scoped var overrides the previous value of x)


let age = 23;
{
    let age = 88;
    console.log("Age inside : ", age);
}
console.log("Outside age : ", age);


var t = 34;
function func() {
    if (true) {
        var t = 89;
    }
    console.log("Inside function : ", t); // 89
}
func();
console.log("Outside function : ", t); // 34


const person = {
    name: "Alex",
    age: 34
}
person.name = "Maddy"; // updation is allowed 
// person = {} // reassingment is not allowed
