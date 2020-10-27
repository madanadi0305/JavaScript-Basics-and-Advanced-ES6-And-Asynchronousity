var arr1=[];
function insertCharacter(char){
return new Promise(res=>{
setTimeout(()=>{

res(arr1.push(char));

}
,1000);

});


}
function adding(array){
for(var i=0;i<array.length;i++){
    var elem=array[i];
    insertCharacter(elem);
}

}


module.exports = {
  push: adding
};
