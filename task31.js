function * reverseCount(number){
var n=parseInt(number);
var k=n-1;
while(k>=0){
    yield k;
    k=k-1;
}

}

for(let count of reverseCount(10)){
    console.log(count);
}




module.exports={generatorFn:reverseCount};
