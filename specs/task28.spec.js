let chai = require("chai");
let expect = chai.expect;
let conc = require("../task28");

var obj;
describe("task 28 test running", () => {
  it("should be async/await driven", async function() {
    obj = MakeQuerablePromise(conc());
    expect(obj.isPending()).to.equal(true);
  });
  it("should satisfy concurrency condition #end_test", function(done) {
    this.timeout(4000);
    obj
      .then(() => {
        expect(obj.isFulfilled()).to.equal(true);
        done();
      })
      .catch(done);
  });
});

function MakeQuerablePromise(promise) {
  // Don't modify any promise that has been already modified.
  if (promise.isResolved) return promise;

  // Set initial state
  var isPending = true;
  var isRejected = false;
  var isFulfilled = false;

  // Observe the promise, saving the fulfillment in a closure scope.
  var result = promise.then(
    function(v) {
      isFulfilled = true;
      isPending = false;
      return v;
    },
    function(e) {
      isRejected = true;
      isPending = false;
      throw e;
    }
  );

  result.isFulfilled = function() {
    return isFulfilled;
  };
  result.isPending = function() {
    return isPending;
  };
  result.isRejected = function() {
    return isRejected;
  };
  return result;
}
