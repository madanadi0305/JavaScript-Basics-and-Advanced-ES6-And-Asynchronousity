let arrpush=(arr1,arr2)=>{
return new Promise((resolve,reject)=>{
setTimeout(()=>{
if(arr2.length>1){
    resolve(arr2.push(arr1));
    //resolve(arr2);
}
else{
    reject("Error!");
}

},1000);


});


};

//var ar1=[1,2,3,4];
//var ar2=[0];
//arrpush(ar1,ar2).then((result)=>{console.log(result);}).catch((err)=>{console.log(err);});

async function print(array1,array2){
    
    var array=await arrpush(array1,array2);
    return array;
}

module.exports={
arr1:ar1,
arr2:ar2,
arrpush:arrpush
};
