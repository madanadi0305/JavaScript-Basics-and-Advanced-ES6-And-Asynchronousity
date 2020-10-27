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
return new Promise(res=>{
 
for(var i=0;i<array.length;i++){
    var elem=array[i];
    setTimeout(()=>{insertCharacter(elem);
    res(arr1);
    
    },1000);
    
}


});    


}

//adding([1,2,3,4,5]).then(res=>{console.log(res);}).catch(res=>{console.log(res);});
module.exports = {
  push: adding
};
