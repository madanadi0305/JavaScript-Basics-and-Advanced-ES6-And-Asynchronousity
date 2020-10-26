var fs=require('fs');
function readFile(fname){
return new Promise((resolve,reject)=>{
fs.readFile(fname,(err,data)=>{
if(err){
    reject("No file found");
    
}
else{
    resolve(data);
}

});


});


}

function writeFile(fname,s){
return new Promise((resolve,reject)=>{
fs.writeFile(fname,s,(err)=>{
if(err){
    reject("Failed");
}

else{
    resolve("Done!");
}

});


});


}

module.exports={
readFile:readFile,
writeFile:writeFile
};

