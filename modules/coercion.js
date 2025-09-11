// coercion --> type of the data gets automatically converted in another type 

console.log('5' + 1); // if there is any string, + will perform concatenation operation
console.log('5' - 1); // 4

// Truthy vs falsy values 
// falsy values --> 0 false "" null undefined NaN document.all 

console.log(!!23); // check truthy and falsy values
console.log(!!function () { });
console.log(!!{});
console.log(!![1, 2, 3]);
console.log(!!-1)
console.log();

console.log(!!null);
console.log(!!0);
console.log(!!false);
console.log(!!"");
console.log(!!undefined);
console.log(!!NaN);


console.log(true + false); // 1+0 = 1
console.log(null + 1); // 0+1 = 1
console.log(5 + '5'); // 55
console.log(undefined + 1);// NaN
console.log(undefined + '5'); //u undefined5
console.log([] + 2); 

/*
values that coerce to 0
0 -0 false null "" "0" " 0 " [] [0]
*/
