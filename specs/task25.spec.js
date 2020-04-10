const chai = require("chai");
const expect = chai.expect;
const ex8 = require("../task25");
const fs = require("fs");

describe("task 25 test running", () => {
  it("should be able to proper message on creation of file", function(done) {
    ex8
      .created("Hello, This is Konfinity Infotech")
      .then(res => {
        expect(res).to.equal("file created");
        done();
      })
      .catch(error => {
        console.log(error);
      });
  });
  it("file should have the content given to it #end_test", function(done) {
    fs.readFile("./file1.txt", "utf8", (error, data) => {
      if (error) throw error;
      expect(data).to.contain("Konfinity");
      done();
    });
  });
});
