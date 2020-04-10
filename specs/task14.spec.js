const chai = require("chai");
const expect = chai.expect;
const prom6 = require("../task14");

describe("task 14 test running", () => {
  it("Should return [0, 1, 2, 3, 4]", function(done) {
    this.timeout(2000);
    prom6
      .arrpush(prom6.ar1, [0])
      .then(result => {
        expect(result).to.eql([0, 1, 2, 3, 4]);
        done();
      })
      .catch(done);
  });
  it("Should return Error!", function(done) {
    this.timeout(2000);
    prom6
      .arrpush([], [0])
      .then(result => {
        expect(result).to.eql([0, 1, 2, 3, 4]);
        done();
      })
      .catch(result => {
        expect(result).to.eql("Error!");
        done();
      });
  });
  it("Should return Error!", function(done) {
    this.timeout(2000);
    prom6
      .arrpush([], [])
      .then(result => {
        expect(result).to.eql([0, 1, 2, 3, 4]);
        done();
      })
      .catch(result => {
        expect(result).to.eql("Error!");
        done();
      });
  });
  it("Should return Error!", function(done) {
    this.timeout(2000);
    prom6
      .arrpush([0], [])
      .then(result => {
        expect(result).to.eql([0, 1, 2, 3, 4]);
        done();
      })
      .catch(result => {
        expect(result).to.eql("Error!");
        done();
      });
  });
  it("Should return [0, 1, 2, 1, 3, 1, 4] #end_test", function(done) {
    this.timeout(2000);
    prom6
      .arrpush([1, 2, 1, 3, 1, 4], [0])
      .then(result => {
        expect(result).to.eql([0, 1, 2, 1, 3, 1, 4]);
        done();
      })
      .catch(done);
  });
});
