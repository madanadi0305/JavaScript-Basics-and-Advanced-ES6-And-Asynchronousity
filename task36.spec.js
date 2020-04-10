const chai = require("chai");
const expect = chai.expect;
const ex8 = require("../task36");

var array = [2, 4, 5, 7, 1, 6, 8, 3, 9, 2, 4, 0];
var a = [...array.slice(0)];

let result = ex8.filterFn(a);
let val = result.next();

describe("task36 test running", () => {
  it("should be able to replace only one element for 1st iteration ", () => {
    expect(val.value[0]).equal(0);
    expect(val.value.slice[1]).eql(array.slice[1]);
  });
  it("should be able to replace upto 2 elements at 2nd iteration", () => {
    let z = result.next();
    expect(z.value[0]).equal(0);
    expect(z.value[1]).equal(0);
    expect(val.value.slice[3]).eql(array.slice[3]);
  });
  it("should be able to replace upto 3 elements at 3rd iteration", () => {
    let z = result.next();
    expect(val.value[5]).equal(0);
    expect(val.value.slice[2]).eql(array.slice[2]);
  });
  it("should be able to replace upto all even indexed elements at last iteration #end_test", () => {
    result.next();
    result.next();
    let z = result.next();
    expect(z.value[10]).equal(0);
    expect(val.value[11]).eql(0);
    expect(val.value[8]).eql(9);
  });
});
