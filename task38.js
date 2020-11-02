function * generator1(number){
var a=0;
var b=1;
var sum=0;
var c;
var fib_array=[];
var n=parseInt(number);
//fib_array.push(a);
fib_array.push(a);
//yield b;
fib_array.push(b);
while(sum<n){
c=a+b;
sum=c;
fib_array.push(sum);
a=b;
b=c;
}
yield fib_array;
}


function * generator2(fib1_array){
var i=0;
while(i<fib1_array.length){
    if((fib1_array[i])%2===0){
        fib1_array[i]=0;
        //yield fib_array;
    }
    
    i=i+1;
}
yield fib1_array;
}

function * function3(){
 var fib_result_array=[];   
 var number=60;
for(var element of generator1(parseInt(number))){
fib_result_array.push(element);
}
var fib1_array=fib_result_array.join("").split(",");
var fib2_array=[];
//fib1_array.split(",");
//console.log(fib1_array);
//var filtered_fib_array=fib_result_array;
for(var i=0;i<fib1_array.length;i++){
  fib2_array.push(parseInt(fib1_array[i]));
}
//console.log(fib2_array);
var filtered_fib_array=[];
for(var el of generator2(fib2_array)){
    filtered_fib_array.push(el);
}
var filtered1_fib_array=filtered_fib_array.join("").split(",");
console.log(filtered1_fib_array);
//yield filtered_fib_array;
var filtered_result1_array=[];
for(var i=0;i<filtered1_fib_array.length;i++){
  filtered_result1_array.push(parseInt(filtered1_fib_array[i]));
}
yield filtered_result1_array;
}

for(var el1 of function3()){
  console.log(el1);
}



module.exports = {
  fibonacciFn: generator1,
  filterFn: generator2,
  checkFn: function3
};
