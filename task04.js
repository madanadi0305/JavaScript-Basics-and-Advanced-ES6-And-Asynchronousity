function add(x,y){
    var sum=x+y;
    return sum;
}
function sub(x,y){
    var diff=x-y;
    return diff;
}

function calc(x,y,callback){
   var choice1='add';
   //var choice2='subtract';
   if(choice1){
       return callback(x,y,add);
   } 
  else{
      return callback(x,y,sub); 
  }
}

module.exports={
 add:add,
 sub:sub,
 calc:calc   
}
