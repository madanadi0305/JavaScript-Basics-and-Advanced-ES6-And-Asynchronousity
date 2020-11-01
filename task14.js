
var ar1=[1,2,3,4];
var ar2=[0];
function arrpush(array1,array2){
return new Promise((res,rej)=>{
setTimeout(()=>{
if(array2.length>1){
    (array2.push(array1));
    res(array2);
}
else{
    rej("Error!");
}



},1000);

});


}

arrpush(ar1,ar2).then(res=>{console.log(res);}).catch(res=>{console.log(res)});
/*async function arrpush(ar1,ar2){
var result=await arrpush(ar1,ar2);
return result;

}*/




module.exports={
ar1:ar1,
ar2:ar2,
arrpush:arrpush
}
