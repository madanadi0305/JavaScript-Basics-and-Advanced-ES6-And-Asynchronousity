function fizz(array){
    var count=0;
for(var i=0;i<array.length;i++){
    var elem=arr[i];
    if(elem%3===0){
        count=count+1;
    }
}
    return count;
}

function buzz(array){
    var count=0;
for(var i=0;i<array.length;i++){
    var elem=array[i];
    if(elem%5===0){
        count=count+1;
    }
}
    

    return count;
}

function filter(array,callback){
    var choice='fizz';
    if(choice){
        return callback(array,fizz(array));
    }
    else{
        return callback(array,buzz(array));
    }
}





module.exports={
fizz:fizz,
buzz:buzz,
fil:filter
}
