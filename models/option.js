const mongoose=require('mongoose');

const optionSchema=new mongoose.Schema({
    text:{
        type:String,
        required:true
    },
    votes:{
        type:Number,
        
    }, 
    linkforvote:{
        type:String,
        
    },
    question:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Question'
    }
   
},{
    timestamps:true
});

const option=mongoose.model('option',optionSchema);
module.exports=option;