const Question=require('../models/question');
const Option=require('../models/option');

//sending all questions
module.exports.questions= async function(req,res){
    const questions= await Question.find({});
    return res.status(200).json({
       message:"all questions found",
       allquestions:questions
    })
}


//sending one question

module.exports.question= async function(req,res){
//  const question =await Question.findById(req.params.id).populate('options').exec();
 const question = await Question.
  findOne({ _id:req.params.id }).
  populate('options').
  exec();
 return res.status(200).json({
   
    question:question
 })
}


//function to add question
module.exports.create=function(req,res){
   Question.create(req.body);
   return res.send('qestion added successfully');
}

//function to create option
module.exports.optioncreate= async function(req,res){
    const question=await Question.findById(req.params.id);
    try{
      const optionid=await Option.create({
            text:req.body.text,
            question:req.params.id,
            votes:0,
            
        })
        await Option.findByIdAndUpdate(optionid.id,{linkforvote:`${req.protocol}://${req.get('host')}/options/${optionid.id}/add_vote`})
        question.options.push(optionid);
        question.save();

        return res.send('option created sucessfully');
    }
    catch{
        return res.send('error while adding option');
    }
 
}

//function to delete question
module.exports.delete= async function(req,res){
   await Question.findByIdAndDelete(req.params.id);
   await Option.deleteMany({question:req.params.id});

   return res.status(200).json({
    message:"Question and option are deleted"
   })
}