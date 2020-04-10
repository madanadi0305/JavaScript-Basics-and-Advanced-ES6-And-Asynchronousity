const chai = require("chai");
const expect = chai.expect;
const ex3 = require("../task20");
var time = Date.now();
var time2 = 0;
describe("task 20 test running", () => {
  it("should be able to print the data", function(done) {
    this.timeout(5500);
    ex3
      .concatenated("Konfinity ", "Infotech")
      .then(res => {
        time2 = Date.now();
        expect(res).to.equal("Konfinity Infotech");
        done();
      })
      .catch(error => {
        console.log(error.message);
      });
  });
  it("Should take 5 sec delay #end_test", function(done) {
    expect(time2 - time).to.above(5000);
    done();
  });
});
