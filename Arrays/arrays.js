// Array --> array is a special type of object used to store ordered collection of values in a single variable
const marks = [34, 40, 23, 77, 33, 98, 67, 87];
console.log(marks);
console.log(marks[0]); // first value

let arr = new Array(8); // array with 8 empty slots
console.log(arr);

console.log(marks.length); // length of the array
console.log(Array.isArray(marks));

marks.push(45); // push at the end
console.log(marks);

marks.pop(); // pop from the end
console.log(marks);

marks.unshift(63); // push at the start
console.log(marks);

marks.shift(); // pop from the start
console.log(marks);

marks.splice(2, 2); // (start index, delete elements)
console.log(marks);

marks.splice(2, 2, 'x'); // remove two elements after 2nd index and insert 'x'
console.log(marks)

const newArr = marks.slice(0, 3); // returns a new array (start index, end-1 index)
console.log(newArr);

marks.reverse(); // reverses the array
console.log(marks);

marks.sort(); // sort in ascending order
console.log(marks);
marks.sort((a, b) => (a - b)); // sort in ascending order
console.log(marks);
marks.sort((a, b) => (b - a)); // sort in descending order
console.log(marks);

marks.forEach(v => console.log(v));

const val = marks.join('-'); // returns a string of all the elements joined with -
console.log(val);
console.log(typeof val);


marks.forEach(function (val) {
    console.log(val + 5);
})

// map -- when we want to create a new array on the basis of old array 
const elem = [2, 3, 4, 5, 6, 7];

const newList = elem.map((val) => { // for every element in elem return 10 in the newList 
    return 10;
});
console.log(newList);

console.log(elem.map((v) => { return v * 2 }));
console.log(elem.map((i) => (i * 2) + 10));

// filter -- filters the old array and returns a new array 
console.log(elem.filter((v) => v > 4)); // only those members who are greater that 4

const cart = [
    { name: "watch", category: "electronics" },
    { name: "mobile", category: "electronics" },
    { name: "shirt", category: "clothing" },
    { name: "pant", category: "clothing" },
    { name: "apple", category: "fruits" }
];
const electronics = console.log(cart.filter((v) => v.category === "electronics"));
const clothing = console.log(cart.filter((v) => v.category === "clothing"));

// reduce -- reducing the array in a single value 
console.log(elem.reduce((accumulator, val) => { // acculmulator remembers it's value on iteration
    return accumulator + val;
}, 0)); // initial accumulator value is 0

console.log(elem.reduce((acc, val) => {
    return acc * val;
}, 1));

console.log(elem.find((val) => {
    return val === 5;
}));

const list = [{ id: 1, key: 1 }, { id: 2, key: 2 }, { id: 3, key: 1 }];
console.log(list.find((val) => {
    return val.key === 1;
}));


console.log(elem.findIndex((val) => {
    return val === 5;
}));

const scores = [34, 56, 57, 90, 89, 93];
console.log(scores.some(function (val) {
    return val > 80;
})); // true

console.log(scores.every((val) => {
    return val > 35;
})); // false (true only if the condition is true for each element)


let fruits = ['Apple', 'Banana', 'Orange', 'Mango'];
let [a, b, , d] = fruits; // destructuring
console.log(a, b, d);

let newF = [...fruits]; // spread operator (copy members into new array)
console.log(newF);
newF.push('Grapes');
console.log(newF);
console.log(fruits); 
