const posts = [{ title: 'Post one' , body:'This is post one' }];

function createPost(post){
posts.push(post);
}
setTimeout(createPost,2000);



function getPost(){
for(var i=0;i<posts.length;i++){
console.log(posts[i]);    
}

}

setTimeout(getPost,1000);

