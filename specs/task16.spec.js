const chai = require("chai");
const expect = chai.expect;
const readFile = require("../task16");
const fs = require("fs");

describe("task 16 test running", () => {
  it("should read the helper file", done => {
    fs.writeFile("helper.txt" , "Hello World", (err) => {
      if(err) throw err;
    })
    readFile
      .readFile("helper.txt")
      .then(result => {
        expect(result.toString().trim()).to.equal("Hello World");
        done();
      })
      .catch(done);
  });
  it("should read the secret file #end_test", done => {
    fs.writeFile("secret.txt", "Secret Hello World", function(err) {
      if (err) throw err;
      readFile
        .readFile("secret.txt")
        .then(result => {
          expect(result.toString().trim()).to.equal("Secret Hello World");
          done();
        })
        .catch(done);
    });
  });
});
