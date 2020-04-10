const chai = require("chai");
const expect = chai.expect;
const ex7 = require("../task35");

var array = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
var a = [...array.slice(0)];

let result = ex7.filterFn(a);
let val = result.next();

describe("task35 test running", () => {
  it("should be able to replace only first element for 1st iteration ", () => {
    expect(val.value[0]).equal(0);
    expect(val.value.slice[1]).eql(array.slice[1]);
  });
  it("should be able to replace upto 2 elements at 2nd iteration", () => {
    let z = result.next();
    expect(z.value[0]).equal(0);
    expect(z.value[2]).equal(0);
    expect(val.value.slice[3]).eql(array.slice[3]);
  });
  it("should be able to replace upto all even indexed elements at last iteration #end_test", () => {
    result.next();
    result.next();
    let z = result.next();
    expect(z.value[6]).equal(0);
    expect(val.value[1]).eql(22);
    expect(val.value[9]).eql(30);
  });
});
