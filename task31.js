function * reverseCount(number){
var n=parseInt(number);
while(i>0){
    yield i;
    i=i-1;
}

}

for(let count of reverseCount(10)){
    console.log(count);
}




module.exports={generatorFn:reverseCount};
