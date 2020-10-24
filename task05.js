const posts = [{ title: 'Post one' , body:'This is post one' }];

function createPost(post){
setTimeout(function(){},2000);
posts.push(post);
}




function getPost(){
for(var i=0;i<posts.length;i++){
console.log(posts[i]);    
}

}

setTimeout(getPost,1000);
module.exports = {
  posts: posts,
  createPost: createPost,
  getPost: getPost
};

