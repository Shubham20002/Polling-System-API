const express=require('express');
//using express router
const router=express.Router();
const questioncontroller=require('../controllers/questioncontroller');

router.get('/',questioncontroller.questions);
router.use('/questions',require('./question'));
router.use('/options',require('./option'));


module.exports=router;