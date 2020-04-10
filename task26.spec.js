const chai = require("chai");
const expect = chai.expect;
const ex9 = require("../task26");
const fs = require("fs");

describe("task 26 test running", () => {
  it("should be able to proper message on creation of file", function(done) {
    fs.writeFile("file1.txt", "Hello, This is Konfinity Infotech" , err=>{
      if(err) throw err;
    })
    ex9
      .content()
      .then(res => {
        expect(res).to.equal("file created");
        done();
      })
      .catch(error => {
        console.log(error);
      });
  });
  it("file should have the content given to it #end_test", function(done) {
    fs.readFile("./file2.txt", "utf8", (error, data) => {
      if (error) throw error;
      expect(data).to.contain("Konfinity");
      done();
    });
  });
});
