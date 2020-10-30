function * fibonacciFn(){
var a=0;
var b=1; 
var c;
var sum=0;
yield a;
yield b;

while(sum<=60){
c=a+b;
sum=c;
a=b;
b=c;
yield sum;
/*if(sum>=50 && sum<=60){
    break;
}*/
}


}


for(fib of fibonacciFn()){
    console.log(fib);
}

module.exports={
  fibonacciFn:fibonacciFn  
}
