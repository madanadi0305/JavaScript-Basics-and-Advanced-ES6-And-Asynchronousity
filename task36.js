function * filterFn(array){
var i=0;
while(i<array.length){
    if(array[i]%2===0){
        array[i]=0;
        yield array;
    }
    
    i=i+1;
}

}

for(var filter of filterFn([1,2,3,4,5,6,7,8,9,10])){
    console.log(filter);
}





module.exports={
filterFn:filterFn

}
