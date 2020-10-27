
var fs=require('fs');



function readFile(path){
return new Promise((resolve,reject)=>{
fs.readFile(path,(err,data)=>{
if(err){
    reject("Error");
}
else{
    resolve(data);
}
});

});

}



async function display(pathToFile){
var readContent=await readFile(pathToFile);
return readContent;
}

display("./task23.js").then(res=>{console.log(res);});



module.exports = {
  content: display
};
