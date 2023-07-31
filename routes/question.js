const express=require('express');
const router=express.Router();
const questioncontroller=require('../controllers/questioncontroller');

router.get('/',questioncontroller.questions);
router.get('/:id',questioncontroller.question);
router.post('/create',questioncontroller.create);
router.post('/:id/options/create',questioncontroller.optioncreate);
router.get('/:id/delete',questioncontroller.delete);

module.exports=router;