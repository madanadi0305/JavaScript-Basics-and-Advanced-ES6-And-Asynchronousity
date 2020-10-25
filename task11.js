let add=(x,y)=>{
return new Promise((resolve,reject)=>{
if(parseInt(x)>0){
    var sum=x+y;
    resolve(sum);
}
else{
    reject("x should be greater than 0");
}

});

};
var m=1;
var n=2;
add(m,n)
.then(result=>{console.log(result);})
.catch(err=>{console.log(err)});




module.exports = { add: add };
