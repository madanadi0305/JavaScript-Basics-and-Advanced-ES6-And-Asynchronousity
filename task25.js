var fs=require('fs');

async function create(insertData){
//var err=new Error();
return new Promise((resolve,reject)=>{
fs.writeFile("file1.txt",insertData,(err)=>{
if(err===true){
reject(err.message);

}
else{
    resolve("file created");
}

});

});



}





module.exports = {
  created: create
};
