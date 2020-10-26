function f1(){
return new Promise((resolve)=>{
setTimeout(()=>{
resolve("done!");


},1000);


});

}

async function waitForString(){
const a1=await f1();
return a1;
}

//waitForString('done!').then(res=>{console.log(res)});



module.exports = {
  func: f1,
  

};
