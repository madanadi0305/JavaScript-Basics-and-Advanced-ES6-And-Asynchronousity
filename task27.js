async function timeout(time){
return new Promise(res=>{
setTimeout(()=>{
 res();   
},parseInt(time));

});

}

async function resolveAfter1Second(){
await timeout(1000);
return "1 sec";
}

async function resolveAfter2Second(){
await timeout(2000);
 return "2 sec";   


}
var obj={};
async function sequentialStart(){
var slowResult=await resolveAfter2Second();
var fastResult=await resolveAfter1Second();
obj.slow=slowResult;
obj.fast=fastResult;
return obj;
}
