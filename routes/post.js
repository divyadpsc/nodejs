const express=require('express');
const postControllers=require('../controllers/post');

const router=express.Router();
router.get('/',postControllers.getposts);
router.post('/post',postControllers.createPosts);


module.exports=router;