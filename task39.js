const fetch=require('node-fetch');
async function * asyncRandomNumbers(){
 var URL="https://www.random.org/integers/?num=1&min=1&max=9&col=1&base=10&format=plain&rnd=new";
//wait for the fetch operation to fetch and return the number
while(true){
var number=await fetch(URL).then(res=>{res.json();});
number=Number(number*10);
yield number;
}

}
async function randomNumbers(){
var result=await asyncRandomNumbers();
for(var val of result){
console.log(val);    
}
}

module.exports={
asyncRandomNumbers:asyncRandomNumbers

}
