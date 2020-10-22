function division(num1,num2,callback){
if(num2!==0){
    //var answer=;
    return callback("no error",parseInt(num1/num2));
    
}

else{
    var answer=null;
    return callback("num2 shouldn't be zero",answer);
}

}

function callback(err,results){
return 

}



module.exports={
div:division,
call:callback
}
