function * generateOddSeries(number){
var n=parseInt(number);
for(var i=1;i<=(n);i++){
    if(i%2!==0){
        yield i;
    }
}

}

for(var odd of generateOddSeries(25)){
    console.log(odd);
}

for(var odd of generateOddSeries(50)){
    console.log(odd);
}




module.exports={
oddNumberFn:generateOddSeries

};
