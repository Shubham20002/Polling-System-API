const Option =require('../models/option');
const Question=require('../models/question');

module.exports.addvote= async function(req,res){
    const option=await Option.findById(req.params.id);
    // Option.findOneAndUpdate(option,votes+1);
   const vote=await Option.findOneAndUpdate({_id :option}, {$inc : {'votes':1}}).exec();
    return res.status(200).json({
        message:'vote added',
        vote:vote}
    )

}