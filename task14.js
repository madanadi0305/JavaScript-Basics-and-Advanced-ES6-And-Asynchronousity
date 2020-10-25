let arrpush=(arr1,arr2)=>{
return new Promise((resolve,reject)=>{
setTimeout(()=>{
if(arr2.length>1){
    arr2.push(arr1);
    resolve(arr2);
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
