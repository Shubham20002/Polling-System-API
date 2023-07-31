const Option =require('../models/option');
const Question=require('../models/question');

module.exports.addvote= async function(req,res){
    const option=await Option.findById(req.params.id);
    const vote=await Option.findOneAndUpdate({_id :option}, {$inc : {'votes':1}}).exec();
    return res.status(200).json({
        message:'vote added',
        vote:vote}
    )

};
module.exports.delete=async function(req,res){
    const option=await Option.findById(req.params.id);
    let question=option.question;
   await Option.deleteOne({_id:option});
   await Question.findByIdAndUpdate(question,{$pull:{options:req.params.id}});

   return res.status(200).json({
    message:"option deleted successfully"
   })

}