async function arrpush(arr1,arr2){
return new Promise((res,rej)=>{
setTimeout(()=>{
if(ar2.length>1){
    res(ar2.push(ar1));
}
else{
    rej("Error!");
}



},1000);

});


}

arrpush.then([1,2,3,4],[0]).then(res=>{console.log(res);})
.catch(res=>{console.log(res);});


module.exports={
ar1:ar1,
ar2:ar2,
arrpush:arrpush
}
