var fs=require('fs');
async function readFile(path1){
return new Promise((resolved,reject)=>{
fs.readFile(path1,'utf-8',(err,data)=>{
if(err){
    reject('Error reading file');
}
else{
    resolved(data);
}
});


});


}

async function writeFile(path2,writeData){
return new Promise((res,rej)=>{
fs.writeFile(path2,writeData,(err)=>{
if(err){
    rej('Error opening file');
}

else{

    res(writeData);
}

});


});


}

async function copy(){
var readContent=await readFile('file1.txt');
var writeContent=await writeFile('file2.txt',readContent);
return 'file created';

}



