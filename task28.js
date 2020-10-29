async function timeout(x){
    return new Promise(res=>{
   setTimeout(function(){
       res(x.toString()+"ms timer finished");
   },parseInt(x));

    });
}

async function resolveAfter2Second(){
console.log("starting slow promise");
var result2=await timeout(2000);
return result2;
}

async function resolveAfter1Second(){
console.log("starting fast promise");
var result1=await timeout(1000);
return result1;
}

async function concurrentStart(){
var promises=[];
console.log("==CONCURRENT START with await==");
var resultFast=await resolveAfter1Second();
var resultSlow=await resolveAfter2Second();

promises.push(resultSlow);
promises.push(resultFast);
return Promise.all(promises).then(res=>{console.log(res);});
}


module.exports=concurrentStart;
