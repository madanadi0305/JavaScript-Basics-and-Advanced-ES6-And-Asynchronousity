function elementpush(arr1,arr2){
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

async function arrpush(array1,array2){
var result=await arrpush(array1,array2);
return result;

}




module.exports={
ar1:ar1,
ar2:ar2,
arrpush:arrpush
}
