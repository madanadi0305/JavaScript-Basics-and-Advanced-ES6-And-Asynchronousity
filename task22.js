var arr1=[];
function insertCharacter(ch){
return new Promise(res=>{

setTimeout(()=>{


},1000);
arr1.push(ch);
res(arr1);
});


}

async function adding(array){
return new Promise(res=>{
for(var i=0;i<array.length;i++){
    var elem=array[i];
    setTimeout(function(){},1000);
    arr1.push(elem);
}
    res(arr1);
});

}



module.exports = {
  push: adding
};
