const express=require('express');
const router=express.Router();
const questioncontroller=require('../controllers/questioncontroller');

router.get('/',questioncontroller.questions);
router.post('/create',questioncontroller.create);
router.post('/:id/options/create',questioncontroller.optioncreate);

module.exports=router;