const chai = require("chai");
const expect = chai.expect;
const ex5 = require("../task22");
var ar = [1, 2, 3, 4, 5, 6, 7];
var time = Date.now();
var time2 = 0;
describe("task 22 test running", () => {
  it("should be able to print the array passed by test case", function(done) {
    this.timeout(ar.length * 1000 + 500);
    ex5
      .push(ar)
      .then(res => {
        time2 = Date.now();
        expect(res).to.eql(ar);
        done();
      })
      .catch(error => {
        console.log(error.message);
      });
  });
  it("Should take " + ar.length + " sec delay #end_test", function(done) {
    expect(time2 - time).to.above(ar.length * 1000);
    done();
  });
});
