const express=require('express');
const router=express.Router();
const optioncontroller=require('../controllers/optioncontroller');


router.post('/:id/add_vote',optioncontroller.addvote);
router.get('/:id/delete',optioncontroller.delete);


module.exports=router;