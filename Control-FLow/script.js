// if else , else if
// switch case
// early return pattern

if ({}) {
    console.log('True');
} else {
    console.log('False');
}

let loggedIn = true;
let admin = false;
if (loggedIn) {
    console.log("controls for the loggedIn user");
} else if (loggedIn && admin) {
    console.log("controls for the admin");
} else {
    console.log("Please Login First");
}


let userRole = "developer";
switch (userRole) {
    case "admin":
        console.log("You have full access");
        break;
    case "editor":
        console.log("You can edit contents");
        break;
    case 'viewer':
        console.log("You can view contents");
        break;
    case 'developer':
        console.log("You can do development related tasks");
        break;
    default:
        console.log("Role not recognized");
        break;
}


// early return patterns
function getVal(val) {
    if (val < 25) return 'D';
    else if (val < 50) return 'C';
    else if (val < 75) return 'B';
    else return 'A';
}
console.log(getVal(89));


function getGrade(score) {
    if ((score <= 32) && (score >= 0)) return "Fail";
    if ((score <= 59) && (score >= 33)) return "D";
    if ((score <= 69) && (score >= 60)) return "C";
    if ((score <= 79) && (score >= 70)) return "B";
    if ((score <= 89) && (score >= 80)) return "A";
    if ((score <= 100) && (score >= 90)) return "A+";
    return "Invalid marks"
}
console.log(getGrade(89));


// Rock-paper-scissors
function rps(user) {
    let random = Math.floor(Math.random() * 3) + 1;
    let computer = undefined;
    if (random == 1) computer = 'rock';
    if (random == 2) computer = 'paper';
    if (random == 3) computer = 'scissor';

    if (user == computer) {
        console.log("it's a tie!");
    } else if (
        (user === 'rock' && computer === 'scissor') ||
        (user === 'paper' && computer === 'rock') ||
        (user === 'scissor' && computer === 'paper')
    ) {
        console.log("You win!")
    } else {
        console.log("Computer wins!")
    }
}

rps('paper');



// Loops
// for
for (let i = 0; i < 5; i++) {
    console.log("Count " + i);
}

// sum all the prices in a shoping cart 
const cart = [234, 546, 444, 999, 277];
let total = 0;
for (let i = 0; i < cart.length; i++) {
    total += cart[i];
}
console.log(total);

// counting occurrences of a word in a sentence 
const sentence = 'the guy who booked the order did not received the order brought by the delivery guy';
const words = sentence.split(" ");
let count = 0;
for (let i = 0; i < words.length; i++) {
    if (words[i] === 'the') count++;
}
console.log("Total occurrences of 'the' " + count);

// filtering even numbers 
const numbers = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10];
const evens = [];
const odds = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) evens.push(numbers[i])
    else odds.push(numbers[i]);
}
console.log(evens);
console.log(odds)

// reverse a string
const str = "Superman";
let reversed = '';
for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}
console.log(reversed);

// removing duplicates from an array
const items = [2, 2, 2, 3, 3, 45, 6, 7,];
const uniqueItems = [];
for (let i = 0; i < items.length; i++) {
    if (!uniqueItems.includes(items[i])) uniqueItems.push(items[i]);
}
console.log("Unique items : " + uniqueItems);


// while 
let i = 0;
while (i < 10) {
    console.log("Count " + i);
    i++;
}

// finding the maximum in an array
const scores = [24, 34, 56, 97, 88,];
let maxScore = scores[0];
let t = 0;
while (t < scores.length) {
    if (scores[t] > maxScore) {
        maxScore = scores[t];
    }
    t++;
}
console.log(maxScore);

// do while - runs the block at least ones even if the condition is wrong
let n = 0;
do {
    console.log("Value " + n);
    n++;
} while (n < 5);

