const chai = require("chai");
const expect = chai.expect;
const kon = require("../task27");

describe("task 27 test running", function() {
  it("sequential function #end_test", function(done) {
    this.timeout(4000);
    kon()
      .then(result => {
        expect(result.slow).to.equal("2 sec");
        done();
      })
      .catch(done);
  });
});
