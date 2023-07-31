const Question=require('../models/question');
const Option=require('../models/option');

module.exports.questions= async function(req,res){
    const questions= await Question.find({});
    return res.status(200).json({
       message:"all questions found",
       allquestions:questions
    })
}

module.exports.create=function(req,res){
   Question.create(req.body);
   return res.send('qestion added successfully');
}

module.exports.optioncreate= async function(req,res){
    const question=await Question.findById(req.params.id);
    try{
      const optionid=await Option.create({
            text:req.body.text,
            question:req.params.id,
            votes:0
        })
        question.options.push(optionid);
        question.save();

        return res.send('option created sucessfully');
    }
    catch{
        return res.send('error while adding option');
    }
 
}