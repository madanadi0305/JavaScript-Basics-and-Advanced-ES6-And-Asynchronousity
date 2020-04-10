const chai = require("chai");
const expect = chai.expect;
const wf = require("../task17");
const fs = require("fs");

describe("task 17 test running", () => {
  it("should create left and read it", done => {
    wf.writeFile("left.txt", "BYE EVERYONE!")
      .then(
        wf.readFile("left.txt").then(result => {
          expect(result.toString().trim()).to.equal("BYE EVERYONE!");
          done();
        })
      )
      .catch(done);
  });
  it("should read right", done => {
    fs.writeFile("right.txt", "HELLO EVERYONE!", function(err){
      if (err) throw err;
    })
    wf.readFile("right.txt")
      .then(result => {
        expect(result.toString().trim()).to.equal("HELLO EVERYONE!");
        done();
      })
      .catch(done);
  });
});
