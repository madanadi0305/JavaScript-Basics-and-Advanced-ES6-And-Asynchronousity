var arr1=[];
function insertCharacter(char){
return new Promise(res=>{
setTimeout(()=>{
arr1.push(char);
res(arr1);

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

adding([1,2,3,4,5]).then(res=>{console.log(res);}).catch(res=>{console.log(res);});
module.exports = {
  push: adding
};
