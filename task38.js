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


function * generator2(fib_array){
var i=0;
while(i<fib_array.length){
    if((fib_array[i])%2===0){
        fib_array[i]=0;
        //yield fib_array;
    }
    yield fib_array;
    i=i+1;
}
}

function * function3(){
var fib_result_array=generator1(60);
var filtered_fib_array=generator2(fib_result_array);
yield filtered_fib_array;
}


module.exports = {
  fibonacciFn: generator1,
  filterFn: generator2,
  checkFn: function3
};
