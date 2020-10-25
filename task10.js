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
//var m=1;
bina.then(result=>{
 console.log("YES");   
})




module.exports = {
  bina: bina
};
