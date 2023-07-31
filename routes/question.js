const express=require('express');
const router=express.Router();
const questioncontroller=require('../controllers/questioncontroller');

router.get('/',questioncontroller.questions);

module.exports=router;