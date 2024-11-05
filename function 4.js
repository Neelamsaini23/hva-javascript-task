function higherOrderFunction(num,callback){
    callback(num);
}
higherOrderFunction(4,function(number){
    console.log(number*number);
    
});