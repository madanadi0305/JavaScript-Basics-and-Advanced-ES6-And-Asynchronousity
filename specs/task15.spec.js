const chai = require("chai");
const expect = chai.expect;
const prom7 = require("../task15");

describe("task 15 test running", () => {
  it("should add another post #end_test", function(done) {
    this.timeout(3000);
    let post = {
      title: "test post",
      body: "This post will be inserted in the posts array"
    };
    let inLen = prom7.posts.length;
    prom7
      .createPost(post)
      .then(prom7.getPost)
      .then(() => {
        expect(prom7.posts.length).to.equal(inLen + 1);
        done();
      })
      .catch(done);
  });
});
