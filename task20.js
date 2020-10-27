function func1(str1){
    return new Promise((res)=>{
setTimeout(()=>{
res(str1.toString());


},5000);

    });
}

async function func2(str2){
//var str22=await func1(str2);
return str2.toString();
}

function concatenated(s1,s2){
return new Promise((resolve)=>{
var str_final=func1(s1)+func2(s2);
resolve(str_final);

});

//return func1(s1)+func2(s2);

}



module.exports={
    concatenated:concatenated
}
