const chai = require("chai");
const expect = chai.expect;
const ex7 = require("../task24");
const fs = require("fs");

describe("task 24 test running", () => {
  it("should be able to print the array #end_test", function(done) {
    fs.writeFile("./test.txt", "Hello, This is Konfinity Infotech", error => {
      if (error) throw error;
      ex7
        .counter("./test.txt")
        .then(res => {
          expect(res).to.equal(5);
          done();
        })
        .catch(error => {
          console.log(error);
        });
    });
  });
});
