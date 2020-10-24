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
 return hello;
});




module.exports = {
  s: s,
  hello: hello
};
