let chai = require("chai");
let { expect, assert } = chai;
let addition = require("../task11");

describe("task 11 test running", () => {
  it("it should add 2 nos", done => {
    addition
      .add(1, 4)
      .then(function(result) {
        expect(result).to.equal(5);
        done();
      })
      .catch(done);
  });
  it("it should reject with a message", done => {
    addition
      .add(-10, 20)
      .then(() => {
        done();
      })
      .catch(err => {
        expect(err).to.equal("x should be greater than 0");
        done();
      })
      .catch(done);
  });
  it("it should add 2 nos #end_test", done => {
    addition
      .add(1, 4)
      .then(function(result) {
        expect(result).to.equal(5);
        done();
      })
      .catch(done);
  });
});
