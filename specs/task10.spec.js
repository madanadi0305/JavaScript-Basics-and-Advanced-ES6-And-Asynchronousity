let chai = require("chai");
let { expect, assert } = chai;
let assertion = require("../task10");

describe("task 10 test running", () => {
  it("it should print YES", done => {
    assertion
      .bina(0)
      .then(function(result) {
        expect(result).to.equal("YES");
        done();
      })
      .catch(function(result) {
        expect(result).to.equal("NO");
        done();
      });
  });
  it("it should print YES", done => {
    assertion
      .bina(1)
      .then(function(result) {
        expect(result).to.equal("YES");
        done();
      })
      .catch(function(result) {
        expect(result).to.equal("NO");
        done();
      });
  });
  it("it should print YES", done => {
    assertion
      .bina(5)
      .then(function(result) {
        expect(result).to.equal("YES");
        done();
      })
      .catch(function(result) {
        expect(result).to.equal("NO");
        done();
      });
  });
  it("it should print NO", done => {
    assertion
      .bina(-1)
      .then(function(result) {
        expect(result).to.equal("NO");
        done();
      })
      .catch(function(result) {
        expect(result).to.equal("NO");
        done();
      });
  });
  it("it should print NO #end_test", done => {
    assertion
      .bina(-5)
      .then(function(result) {
        expect(result).to.equal("NO");
        done();
      })
      .catch(function(result) {
        expect(result).to.equal("NO");
        done();
      });
  });
});
