var fs=require('fs');
function readFile(path){
return new Promise((resolve,reject)=>{
fs.readFile(path,'utf-8',(err,data)=>{
if(err){
    reject("Error Occured!");
}
else{
    resolve(data);
}
});

});

}

async function count(path){
 var counts=0;   
 var dataContents=await readFile(path);
 var wordsArray=dataContents.split(" ");
 for(var i=0;i<wordsArray.length;i++){
  //var word=wordsArray[i];
  counts++;
 }
 return counts;   
} 

count('./task24.js').then(res=>{console.log(res);}).catch(err=>{console.log(err);});
module.exports = {
  counter: count
};
