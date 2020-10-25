let arrpush=(ar1,ar2)=>{
return new Promise((resolve,reject)=>{
setTimeout(()=>{
if(ar2.length>1){
    ar2.push(ar1);
    resolve(ar2);
}
else{
    reject("Error!");
}
},1000);

});

};




module.exports = {
  ar1: ar1,
  ar2: ar2,
  arrpush: arrpush
};
