function * generateOddSeries(number){
var n=parseInt(number);
for(var i=0;i<n;n++){
    if(i%2!==0){
        yield i;
    }
}

}

for(var odd of generateOddSeries(25)){
    console.log(odd);
}






module.exports={
oddNumberFn:generateOddSeries

};
