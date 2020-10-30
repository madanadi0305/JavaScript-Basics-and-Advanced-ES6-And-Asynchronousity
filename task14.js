function elementpush(array1,array2){
return new Promise((res,rej)=>{
setTimeout(()=>{
if(array2.length>1){
    res(array2.push(array1));
}
else{
    rej("Error!");
}



},1000);

});


}

async function arrpush(ar1,ar2){
var result=await arrpush(ar1,ar2);
return result;

}




module.exports={
ar1:ar1,
ar2:ar2,
arrpush:arrpush
}
