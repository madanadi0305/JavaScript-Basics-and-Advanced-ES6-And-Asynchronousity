
var ar1=[1,2,3,4];
var ar2=[0];
async function arrpush(arr1,arr2){
return new Promise((res,rej)=>{
setTimeout(()=>{
(arr2.push(arr1));

if(arr2.length>1){
        res(arr2);
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
