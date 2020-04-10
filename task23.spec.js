const chai = require("chai");
const expect = chai.expect;
const ex6 = require("../task23");

describe("task 23 test running", () => {
  it("should be able to read content from README file #end_test", function(done) {
    var file = "./README.md";
    ex6.content(file).then(res => {
      expect(res).contain("page");
      done();
    });
  });
});
