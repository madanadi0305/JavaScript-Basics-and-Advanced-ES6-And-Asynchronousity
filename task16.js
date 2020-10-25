var fs=require('fs');

function readFile(path){
    return new Promise((resolve,reject)=>{
   fs.readFile(path,(err,data)=>{
   if(err===true){
       reject("No file found");
   }
  else{
      resolve(data);
  }


   });
   

    });
}

readFile("helper.txt").then((result)=>{
console.log(result);

}).catch(result=>{
    console.log(result);
});

module.exports = {
  readFile: readFile
};
