function * generator1(number){
var a=0;
var b=1;
var sum=0;
var c;
var fib_array=[];
var n=parseInt(number);
yield a;
//fib_array.push(a);
yield b;
//fib_array.push(b);
while(sum<n){
c=a+b;
sum=c;
yield sum;
a=b;
b=c;
}
//return fib_array;
}


function * generator2(fib_array){
var i=0;
while(i<fib_array.length){
    if((fib_array[i])%2===0){
        fib_array[i]=0;
    }
    i=i+1;
}
}

function * function3(){
var fib_result_array=generator1(number);
var filtered_fib_array=generator2(fib_result_array);
yield filtered_fib_array;
}


module.exports = {
  fibonacciFn: generator1,
  filterFn: generator2,
  checkFn: function3
};
