var obj={};
async function loadData(value){
var promise1= new Promise((resolve,reject)=>{
if(value.length>0){
   obj.data=value;
   resolve(obj);  
}
else{
    reject("Value must be greater than 0");
    
}
});


}
loadData.then(res=>{
console.log(res);    
}).catch(error=>{console.log(error.message)});


module.exports = {
  data: loadData
};
