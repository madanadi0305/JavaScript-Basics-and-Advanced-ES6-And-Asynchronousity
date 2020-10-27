function func1(str1){
return new Promise((res)=>{

setTimeout(()=>{
res(str1);

},5000);

});

}

async function func2(str2){
return str2;

}

function concatenated(s1,s2){
var str1=func1(s1);
var str2=func2(s2);
return str1+str2;
}



module.exports = {
  concatenated: concatenated
};
