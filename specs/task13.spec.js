let chai = require("chai");
let except = chai.expect;
let pro1 = require("../task13");

describe("task 13 test running", () => {
  it("it should return the string", done => {
    pro1.up("konfinity", false).then(function(result) {
      result += "Now";
      except(result).to.equal("KONFINITYNow");
      done();
    });
  });

  it("it should return the string", done => {
    pro1.up("konfinity", true).catch(function(result) {
      except(result).to.equal("Error occured!");
      done();
    });
  });
});
