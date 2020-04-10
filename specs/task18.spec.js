const chai = require("chai");
const expect = chai.expect;
const ex1 = require("../task18");

describe("task 18 test running", () => {
  it("should be able to print the data", done => {
    ex1
      .data(1)
      .then(res => {
        expect(res.data).to.equal(1);
        done();
      })
      .catch(error => {
        console.log(error.message);
      });
  });
  it("should be able to print the error #end_test", done => {
    ex1
      .data(-1)
      .then(res => {
        console.log(res);
        done();
      })
      .catch(error => {
        expect(error.message).to.equal("Value must be greater than 0");
        done();
      });
  });
});
