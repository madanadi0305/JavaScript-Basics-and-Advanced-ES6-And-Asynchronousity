function add(x,y){
    let sum=parseInt(x)+parseInt(y);
    return sum;
}

function data(x,y,callback){
    return callback(x,y);
}


module.exports={
add:add,
data:data
}
