
function filter10(array){
for(var i=0;i<array.length;i++){
    if(array[i]===10){
        array.splice(i,1);
    }
}
return array;
}

function filter5(array){
    for(var i=0;i<array.length;i++){
        if(array[i]===5){
        array.splice(i,1);
        }
    }
return array;
}

function filter(array,callback){

 return callback(array);   
}

module.exports = {
  ten: filter10,
  five: filter5,
  fil: filter
};
