function a(callback){
return callback(b);
}
function b(){
    return "Hello!!!";
}
module.exports={
first:a,
second:b
}
