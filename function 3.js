function higherOrderFunction(num, callback) {
    callback(num);
}

higherOrderFunction(10, function(number) {
    console.log(number);
});
