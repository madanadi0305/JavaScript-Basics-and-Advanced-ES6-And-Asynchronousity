
var ar1=[1,2,3,4];
var ar2=[0];
async function arrpush(ar1,ar2){
return new Promise((res,rej)=>{
setTimeout(()=>{
if(ar2.length>1){
    (ar2.push(ar1));
    res(ar2);
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
