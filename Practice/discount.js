function discountCalculator(discount) {
    return function (price) {
        return price - (price * discount / 100);
    }
}
let discounter = discountCalculator(10);
console.log(discounter(100));

let ten = discountCalculator(10);
console.log(ten(100));

let twenty = discountCalculator(20);
console.log(twenty(100));

let thirty = discountCalculator(30);
console.log(thirty(100));


const counter = () => {
    let count = 0;
    return () => {
        return ++count;
    }
}
let c = counter(); // c is having the function returned by counter that's why counter is holding the previous value of count
console.log(c());
console.log(c());


