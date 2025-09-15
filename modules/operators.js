/*
1. Arithmetic Operators
    + Addition
    - Subtraction
    * Multiplication
    / Division
    % Modulus (Remainder)
    ** Exponentiation
    ++ Increment
    -- Decrement
2. Assignment Operators
    = Assignment
    += Add and assign
    -= Subtract and assign
    *= Multiply and assign
    /= Divide and assign
    %= Modulus and assign
3. Comparison Operators
    == Equal to
    === Strict equal to (type + value)
    != Not equal to
    !== Strict not equal to
    > Greater than
    < Less than
    >= Greater than or equal to
    <= Less than or equal to
4. Logical Operators
    && Logical AND
    || Logical OR
    ! Logical NOT
5. Bitwise Operators
    & AND
    | OR
    ^ XOR
    ~ NOT
    << Left shift
    >> Right shift
    >>> Unsigned right shift
6. Other Operators
    typeof Type check
    instanceof Instance check
    ? : Ternary (conditional)
    , Comma
    delete Delete property
    in Property existence
*/

// Arithmetic Operators
let a = 10, b = 3;
console.log(a + b);    // 13
console.log(a - b);    // 7
console.log(a * b);    // 30
console.log(a / b);    // 3.333...
console.log(a % b);    // 1
console.log(a ** b);   // 1000
a++;
console.log(a);        // 11
b--;
console.log(b);        // 2

// Assignment Operators
let x = 5;
x += 2; // x = x + 2
console.log(x);        // 7
x -= 1; // x = x - 1
console.log(x);        // 6
x *= 3; // x = x * 3
console.log(x);        // 18
x /= 2; // x = x / 2
console.log(x);        // 9
x %= 4; // x = x % 4
console.log(x);        // 1

// Comparison Operators
console.log(5 == '5');     // true
console.log(5 === '5');    // false
console.log(5 != '5');     // false
console.log(5 !== '5');    // true
console.log(7 > 3);        // true
console.log(7 < 3);        // false
console.log(7 >= 7);       // true
console.log(7 <= 6);       // false

// Logical Operators
console.log(true && false);    // false
console.log(true || false);    // true
console.log(!true);            // false

// Bitwise Operators
console.log(5 & 3);    // 1  (0101 & 0011 = 0001)
console.log(5 | 3);    // 7  (0101 | 0011 = 0111)
console.log(5 ^ 3);    // 6  (0101 ^ 0011 = 0110)
console.log(~5);       // -6 (bitwise NOT)
console.log(5 << 1);   // 10 (0101 << 1 = 1010)
console.log(5 >> 1);   // 2  (0101 >> 1 = 0010)
console.log(5 >>> 1);  // 2  (unsigned right shift)

// Other Operators
console.log(typeof 123);           // "number" (works only with primitive values)
console.log([] instanceof Array);  // true (works only with reference values)
let age = 18;
console.log(age >= 18 ? "Adult" : "Minor"); // "Adult"
let y = (1, 2, 3); // Comma operator, y = 3
console.log(y);    // 3
let obj = { prop: 1 };
delete obj.prop;
console.log(obj);  // {}
console.log('prop' in obj); // false


// Unary Operators Examples

let num = 5;

// Unary plus (converts operand to number)
console.log(+num);      // 5
console.log(+"10");     // 10

// Unary minus (negates the value)
console.log(-num);      // -5
console.log(-"8");      // -8

// Increment (already shown above, but also unary)
num++;
console.log(num);       // 6

// Decrement (already shown above, but also unary)
num--;
console.log(num);       // 5

// Logical NOT
console.log(!true);     // false

// Bitwise NOT
console.log(~num);      // -6

// typeof
console.log(typeof num); // "number"

// delete
let obj2 = { a: 1 };
delete obj2.a;
console.log(obj2);      // {}

// increment
let val1 = 34;
console.log(val1++); // post increment
console.log(++val1); // pre increment
console.log(val1--); // post decrement
console.log(--val1); // pre decrement




let isAdmin = true;
let isLoggedIn = false;

if (isAdmin || isLoggedIn) {
    console.log("Access granted");
} else {
    console.log("Access denied");
}

let temp = 32;
if (!(temp < 30)) {
    console.log("Hot");
} else {
    console.log("Pleasant");
}

let c = 0;
if (c) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}

let score = 78;
let grade = score >= 90 ? 'A' : score >= 75 ? 'B' : score >= 60 ? 'C' : 'Fail';
console.log(grade);

let loggedIn = true;
let hasToken = false;
let access = loggedIn && hasToken ? 'Allow' : 'Deny';
console.log(access);

let xx = 3;
let yy = xx++;
console.log(xx, yy); // 4 3 

let p = 4;
let q = ++p;
console.log(p, q);

let n = 5;
let result = n++ + ++n; // 5 + 7
console.log(result); // 12

let likes = 199;
function likePost() {
    return ++likes;
}
console.log(likePost());
console.log(likes);

let count = 5;
if (count-- === 5) {
    console.log("Matched");
} else {
    console.log("Not Matched");
}

