var posts={ title: 'Post one' , body:'This is post one' }

let createPost=(post)=>{
return new Promise((resolve,reject)=>{
 var err=false;   
setTimeout(()=>{
if(err===false){
    resolve(posts.push(post));
}
else{
reject("Error: Something went wrong");
}
},1000);

});

};

let getPost=()=>{

for(var i=0;i<posts.length;i++){
    console.log(posts[i]);
}
};
setTimeout(getPosts,500);

module.exports = {
  posts: posts,
  getPost: getPost,
  createPost: createPost
};
