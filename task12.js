let erro=(arg)=>{
return new Promise((resolve,reject)=>{
setTimeout(()=>{
if(arg===false){
resolve("No error!");
}
else{
    reject("Error occured!");
}
},1000);

});

};

erro(true).then(result=>{console.log(result);}).catch(err=>{console.log(err);});


module.exports = { erro: erro };
