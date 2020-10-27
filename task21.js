function doubleValue(x){

setTimeout(()=>{
    return x*2;
},2000);

}

async function addAsync(x,y,z){
var result1=await doubleValue(x);
var result2=await doubleValue(y);
var result3=await doubleValue(z);

return (result1+result2+result3);
} 





module.exports = {
  sum: addAsync
};
