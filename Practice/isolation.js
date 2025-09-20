const isolate = (() => {
    const password = '@1344ti';
    return {
        getPassword: () => {
            return password;
        }
    }
})();
console.log(isolate.getPassword());
// console.log(password); // error