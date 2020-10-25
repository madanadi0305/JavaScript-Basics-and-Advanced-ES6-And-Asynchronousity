let bina=(x)=>{
return new Promise((resolve,reject)=>{
var n=parseInt(x);
if(x>0){
    resolve("YES");
}
else{
    reject("NO");
}

});


};
var m=1;
bina(m).then(result=>{
 console.log(result);   
}).catch(err=>{
    console.log(err);
});




module.exports = {
  bina: bina
};
