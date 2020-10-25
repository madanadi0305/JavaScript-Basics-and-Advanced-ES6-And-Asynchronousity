let hello=(x)=>{
return new Promise((resolve,reject)=>{
if(x==='Hello')
{
    resolve(x+" world!");
}
else{
    reject("Bye!");
}
});

};
var s="Hello";
hello(s).then(result=>{
 console.log(result);   
 
}).catch(err=>{

    console.log(err);
});




module.exports = {
  s: s,
  hello: hello
};
