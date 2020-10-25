let up=(a,error)=>{
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    if(error===false){
        var upperCaseString=a.toUpperCase();
        resolve(upperCaseString);
    }
else{
    reject("Error occured!");
}

    },500);
});

};

up("hello world!",false).then(res=>{console.log(res);}).catch(res=>{console.log(res)});


module.exports = { up: up };
