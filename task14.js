//var ar1=[1,2,3,4];
//var ar2=[0];
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
arrpush(ar1,ar2).then(result=>{console.log(result);}).catch(result=>{console.log(result);});



module.exports = {
  ar1: ar1,
  ar2: ar2,
  arrpush: arrpush
};
