function * generateOddSeries(){
    var n=50;
    var i=0;
    while(i<=n){
        if(i%2!==0){
            yield i;
        }
        i=i+1;
    }
}

for(var odd of generateOddSeries()){
    console.log(odd);
}

module.exports={
oddNumberFn:generateOddSeries

};
