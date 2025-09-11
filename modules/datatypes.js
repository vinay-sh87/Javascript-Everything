/* Data types -> Primitives and Reference 
Primitives -> when we get a real copy of the values
--> string, number, boolean, null, undefined, symbol, bigint

Reference -> when we get reference of the values not the not a copy 
--> arrays, objects, functions
    [] {} ()

javascript is a dynamically typed language (type of the data can be changed in the variable)
*/

let a = 34;
let b = a;
console.log(a);
console.log(b);
a = a + 3;
console.log(a);
console.log(b); // both a and b are having their own copies 


const obj = {
    name: "PC",
    price: 200000,
    model: 2019
}

const obj1 = obj; // obj1 is holding the reference of obj not a copy of obj
console.log(obj);
console.log(obj1);

obj1.price = 230000;
obj1.model = 2020;
console.log(obj);
console.log(obj1);

const obj2 = { ...obj }; // copying 
obj2.name = "Phone";
console.log(obj2);

console.log(obj);



/*
'' -> single quotes
"" -> double quotes
`` -> backticks
*/


// 1. String
let str1 = "Hello, World!"; // Double quotes
let str2 = 'JavaScript';    // Single quotes
let str3 = `Template literal`; // Backticks (allows interpolation)
console.log(typeof str1); // "string"

// 2. Number
let num1 = 42;
let num2 = 3.14;
let num3 = -7;
console.log(typeof num1); // "number"

// 3. Boolean
let isActive = true;
let isComplete = false;
console.log(typeof isActive); // "boolean"

// 4. Null
let emptyValue = null;
console.log(typeof emptyValue); // "object" (this is a known JavaScript quirk)

// 5. Undefined
let notAssigned;
console.log(typeof notAssigned); // "undefined"

// 6. Symbol (unique and immutable)
let sym1 = Symbol('id');
let sym2 = Symbol('id');
console.log(typeof sym1); // "symbol"
console.log(sym1 === sym2); // false (symbols are always unique)

// 7. BigInt (for large integers)
console.log(Number.MAX_SAFE_INTEGER);
let bigIntNum = 1234567890123456789012345678901234567890n;
console.log(typeof bigIntNum); // "bigint"



// Reference Types

// 8. Object
let person = {
    name: "Alice",
    age: 30
};
console.log(typeof person); // "object"

// 9. Array (a type of object)
let colors = ["red", "green", "blue"];
console.log(typeof colors); // "object"

// 10. Function (also an object, but typeof returns "function")
function greet() {
    return "Hello!";
}
console.log(typeof greet); // "function"


// use of symbol 
const object = {
    name: "Albert",
    uid: 10,
    email: 'mail@gmail.com',
    age: 23
}

let ui = Symbol('uid');
object[ui] = "18";

console.log(object);