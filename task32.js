function * evenNumberFn(){
var i=0;
while(true){
    if(i%2===0){
        yield i;
    }
    i=i+1;
}

}

for(var even of evenNumberFn()){
    console.log(even);
}



module.exports={
    evenNumberFn:evenNumberFn
}
