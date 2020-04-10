const chai = require("chai");
const expect = chai.expect;
const prom4 = require("../task12");

describe("task 12 test running", () => {
  it("Should show No error!", function(done) {
    this.timeout(3000);
    prom4
      .erro(false)
      .then(result => {
        expect(result).to.equal("No error!");
        done();
      })
      .catch(done);
  });
  it("Should show Error occured! #end_test", function(done) {
    this.timeout(3000);
    prom4
      .erro(true)
      .then(result => {
        expect(result).to.equal("No error!");
        done();
      })
      .catch(result => {
        expect(result).to.equal("Error occured!");
        done();
      });
  });
});
