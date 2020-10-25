let arrpush=(arr1,arr2)=>{
return new Promise((resolve,reject)=>{
setTimeout(()=>{
if(arr2.length>1){
    for(var i=0;i<arr1.length;i++){
    arr2.push(arr1[i]);

    }
    
    resolve(arr2);
}
else{
    reject("Error!");
}
},1000);

});

};




module.exports = {
  ar1: arr1,
  ar2: arr2,
  arrpush: arrpush
};
