var obj={};
async function loadData(value){

if(value.length>0){
   obj.data=value;
   return obj;  
}
else{
//    reject("Value must be greater than 0");
    throw new Error("Value must be greater than 0");
    
}



}

loadData(value).then(res=>{
console.log(res);    
}).catch(error=>{console.log(error.message)});


module.exports = {
  data: loadData
};
