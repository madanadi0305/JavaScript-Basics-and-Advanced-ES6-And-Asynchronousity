function someCalculation(number,callback){
return callback(number); 
}

function callback(number){
    var result=parseFloat(number/(2*number));
    return result;
}

module.exports = {
  first: someCalculation,
  call: callback
};
