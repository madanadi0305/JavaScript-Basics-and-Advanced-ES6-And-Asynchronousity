function * reverseCount(number){
var n=parseInt(number);
while(n>=0){
    yield n;
    n=n-1;
}

}

for(let count of reverseCount(10)){
    console.log(count);
}




module.exports={generatorFn:reverseCount};
