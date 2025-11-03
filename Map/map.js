const map = new Map([
    ['name', 'alice'],
    ['age', 25],
    [true, 'yes']
]);

console.log(map);

// methods 
console.log(map.get('name'));
console.log(map.get(true));
console.log(map.has('age'));
map.delete('age');
console.log(map.has('age'));
console.log(map.size);
map.clear();
console.log(map);

// iterating over map 
const newMap = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
]);

for (const [key, value] of newMap) {
    console.log(key, '=>', value);
}

newMap.forEach((value, index) => {
    console.log(index, '=>', value);
});
for (const key of newMap.keys()) {
    console.log(key);
}

const keys = newMap.keys();
console.log(keys);
const values = newMap.values();
console.log(values);

for (const key of keys) {
    console.log(key);
}

for (const value of values) {
    console.log(value);
}

// objects as keys 
const user1 = { name: 'Pearson' };
const user2 = { name: 'Jack' };

const visits = new Map();
visits.set(user1, 5);
visits.set(user2, 8);
console.log(visits.get(user1));
console.log(visits.get(user2));

console.log(visits);

// map to array
const visitsArray = Array.from(visits);
console.log(visitsArray);
console.log(visitsArray[0][0].name);
console.log(visitsArray[1][0].name);

// array to map 
const arr = [['x', 10], ['y', 23]];
const map1 = new Map(arr);
console.log(map1);

// map to object
const obj = Object.fromEntries(map1);
console.log(obj);

// object to map 
const map2 = new Map(Object.entries(obj));
console.log(map2);



// counting word frequency 
const words = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const count = new Map();

for (const word of words) {
    count.set(word, (count.get(word) || 0) + 1); // || returns the first truthy value in case of first iteration count.get(word) will be undefined so 1 will the stored so and so forth

}