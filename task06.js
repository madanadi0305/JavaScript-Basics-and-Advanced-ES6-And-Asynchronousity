
function filter10(array){
 var tens_array=[];   
for(var i=0;i<array.length;i++){
    if(array[i]!==10){
        tens_array.push(array[i]);
    }
}
return tens_array;
}

function filter5(array){
    var fives_array=[];
    for(var i=0;i<array.length;i++){
        if(array[i]!==5){
        fives_array.push(array[i]);
        }
    }
return fives_array;
}

function filter(array,callback){
 var choice='five';
 if(choice){
     
     return callback(filter5(array)); 
 }
 else{
     return callback(filter10(array));
 }
   
}

module.exports = {
  ten: filter10,
  five: filter5,
  fil: filter
};
