const express=require('express');
const router=express.Router();
const optioncontroller=require('../controllers/optioncontroller');


router.post('/:id/add_vote',optioncontroller.addvote);


module.exports=router;