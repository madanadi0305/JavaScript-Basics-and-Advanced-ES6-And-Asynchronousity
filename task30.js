function * naturalNumbers(){
var i=1;
while(i<=50){
    yield i;
    i=i+1;
}


}

for(var number of naturalNumbers()){
console.log(number);

}

module.exports={
 nn:naturalNumbers   
};
