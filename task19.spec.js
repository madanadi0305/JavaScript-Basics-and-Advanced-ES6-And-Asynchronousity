const chai = require("chai");
const expect = chai.expect;
const ex2 = require("../task19");

describe("task 19 test running", () => {
  var time = Date.now();
  var time2 = 0;
  it("should be able to print the data", done => {
    ex2
      .func()
      .then(res => {
        time2 = Date.now();
        expect(res).to.equal("done!");
        done();
      })
      .catch(error => {
        console.log(error.message);
      });
  });
  it("should take 1 sec delay to print the data #end_test", function(done) {
    expect(time2 - time).to.above(1000);
    done();
  });
});
