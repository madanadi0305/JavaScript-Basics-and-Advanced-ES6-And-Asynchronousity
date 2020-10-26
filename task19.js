function f1(str){
return new Promise((resolve)=>{
setTimeout(()=>{
resolve(str);


},1000);


});

}

async function waitForString(str){
const a1=await f1(str);
return a1;
}

waitForString('done').then(res=>{console.log(res)});



module.exports = {
  func: f1
};
