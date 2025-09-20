const bmi = (weight, height) => {
    return weight / (height * height);
}

console.log(bmi(64, 1.7).toFixed(2));
