const chai = require("chai");
const expect = chai.expect;
const ex2 = require("../task05");

describe("task 05 test running", () => {
  it("should add another post #end_test", function() {
    this.timeout(3000);
    let post = {
      title: "test post",
      body: "This post will be inserted in the posts array"
    };
    let inLen = ex2.posts.length;
    ex2.createPost(post, ex2.getPost, () => {
      expect(ex2.posts.length).to.equal(inLen + 1);
    });
  });
});
