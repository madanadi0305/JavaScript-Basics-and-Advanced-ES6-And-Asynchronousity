var fs=require('fs');

async function create(insertData){
//var err=new Error();
fs.writeFile("file1.txt",insertData,(err)=>{
if(err===true){
console.log(err.message);

}
else{
    console.log("file created");
}

});


}





module.exports = {
  created: create
};
