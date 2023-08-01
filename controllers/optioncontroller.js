const Option =require('../models/option');
const Question=require('../models/question');

//function to add vote
module.exports.addvote= async function(req,res){
    try{
        const option=await Option.findById(req.params.id);
        const vote=await Option.findOneAndUpdate({_id :option}, {$inc : {'votes':1}}).exec();
        return res.status(200).json({
            message:'vote added',
            vote:vote}
        )
    }
    catch{
        return res.status(400).json({
            message:'error while adding vote',
            vote:vote}
        )
    }  
};

//function to delete option
module.exports.delete=async function(req,res){

    try{
        const option=await Option.findById(req.params.id);
        let question=option.question;
        // console.log(option.votes);
        if(option.votes<1){
       await Option.deleteOne({_id:option});
       await Question.findByIdAndUpdate(question,{$pull:{options:req.params.id}});
       return res.status(200).json({
        message:"option deleted successfully"
       })
        }
        else{
            return res.status(200).json({
                message:"vote is added for option so option cant be deleted"
               })
        }
    }
    catch{
        return res.status(400).json({
            message:"Eroor while deleting option"
           })
    }
   
}