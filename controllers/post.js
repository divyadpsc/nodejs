
const Post=require('../models/post');



exports.getposts=(req,res)=>{
	res.json({
		posts:[
{title:'first post'},
{
	title:'second post'
}

		]
	});
};
exports.createPosts=(req,res)=>{
const post=new Post(req.body);
console.log("CREATING POST:",post);
};