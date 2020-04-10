const chai = require("chai");
const expect = chai.expect;
const ex9 = require("../task37");

var array = [2, 4, 5, 7, 1, 6, 8, 3, 9, 2, 4, 0];
var a = [...array.slice(0)];

let result = ex9.filterFn(a);
let val = result.next();

describe("task 37 test running", () => {
  it("should be able to replace only one element for 1st iteration ", () => {
    expect(val.value[0]).equal(2);
    expect(val.value[2]).equal(0);
    expect(val.value.slice[3]).eql(array.slice[3]);
  });
  it("should be able to replace upto 2 elements at 2nd iteration", () => {
    let z = result.next();
    expect(z.value[3]).equal(0);
    expect(z.value[4]).equal(1);
  });
  it("should be able to replace upto all even indexed elements at last iteration #end_test", () => {
    result.next();
    result.next();
    let z = result.next();
    expect(z.value[11]).equal(0);
    expect(val.value[8]).eql(0);
    expect(val.value[10]).eql(4);
  });
});
