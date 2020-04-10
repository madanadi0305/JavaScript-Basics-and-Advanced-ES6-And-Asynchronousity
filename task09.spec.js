let chai = require("chai");
let { expect, assert } = chai;
let assertion = require("../task09");

describe("task 09 test running", () => {
  it("it should print Hello world!", done => {
    assertion
      .hello(assertion.s)
      .then(function(result) {
        expect(result).to.equal("Hello world!");
        done();
      })
      .catch(done);
  });
  it("it should print Bye! #end_test", done => {
    assertion
      .hello("No")
      .then(function(result) {
        expect(result).to.equal("Hello world!");
        done();
      })
      .catch(function(result) {
        expect(result).to.equal("Bye!");
        done();
      });
  });
});
