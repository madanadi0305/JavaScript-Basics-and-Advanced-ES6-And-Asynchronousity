function division(num1,num2,callback){
if(num2!==0){
    var answer=parseInt(num1/num2);
    return callback("no error",answer);
    
}

else{
    var answer=null;
    return callback("num2 shouldn't be zero",answer);
}

}

function callback(err,results){
if(results===null){
return err;
}
else{
    return results;
}

}



module.exports={
div:division,
call:callback
}
