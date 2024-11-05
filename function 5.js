function newHigherOrderFunction(num1,num2,callback){
    callback(num1,num2);
}
newHigherOrderFunction(3,7,function(a,b){
    console.log(a+b);
    
});