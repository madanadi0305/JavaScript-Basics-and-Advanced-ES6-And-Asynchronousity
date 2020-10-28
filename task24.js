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
 var counts={};   
 var dataContents=await readFile(path);
 var wordsArray=dataContents.split(" ");
 for(var i=0;i<wordsArray.length;i++){
  var word=wordsArray[i];
  if(!counts[word]){
      counts[word]=1;

  }

  else{
      counts[word]=counts[word]+1;
  }

 }
 return count;   
} 


module.exports = {
  counter: count
};
