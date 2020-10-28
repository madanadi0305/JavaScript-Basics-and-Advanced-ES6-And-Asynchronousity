var arr1=[];
function insertCharacter(ch){
return new Promise(res=>{

setTimeout(()=>{

res(arr1.push(ch));

},1000);

});


}

async function adding(array){
for(var i=0;i<array.length;i++){
    var elem=array[i];
    var res=await insertCharacter(elem);
    
}
return arr1;
}



module.exports = {
  push: adding
};
