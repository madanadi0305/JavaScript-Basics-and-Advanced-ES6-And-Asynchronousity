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
hello.then((s)=>{
 console.log(s);   
});




module.exports = {
  s: s,
  hello: hello
};
