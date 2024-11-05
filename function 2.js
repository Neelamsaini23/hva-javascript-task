function callbackFunction(number) {
    console.log(number);
}
function higherOrderFunction(num, callback) {
    callback(num);
}
higherOrderFunction(5, callbackFunction);
