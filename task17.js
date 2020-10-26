var fs=require('fs');

function readFile(fname){
return new Promise((resolve,reject)=>{
fs.readFile((err,data)=>{
if(err===false){
    resolve(data);
}

else{
    reject("No file found");
}

});



});

}

function writeFile(fname,s){
return new Promise((resolve,reject)=>{
fs.writeFile(fname,s,(err)=>{
if(err===false){
    resolve("Done");
}
else{
    reject("Failed");
}
});

});

};


module.exports = {
  readFile: readFile,
  writeFile: writeFile
};
