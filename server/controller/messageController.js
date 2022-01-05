const Message = require('../models/MessageSchema')
const {ensureAuth,ensureGuest} = require('../helpers/authHelper')

exports.createMessage = async (req,res) =>{

    // const { body } = req;
    try {
        const newMessage = await Message.create({
            subject:req.body.subject,
            text: req.body.text,
            createdOn: req.body.createdOn
        })
      
        return res.status(200).json({message:'Message posted Successfully'})
    } catch (error) {
        return res.status(400).json({message:'Message cannot be posted' ,error})
        
    }
}

exports.listMessages =  async (req,res) =>{
    try {
        const messages = await Message.find()
        .sort({createdOn: 'desc'})
        .lean()
        return res.status(200).json({message:'Messages listed', messages})
    } catch (error){
       return res.status(400).json({message: 'Messages cannot be listed'}) 
    }
    
}

exports.updateMessage = async (req,res) =>{
  try { 
   let message = await Message.findById({_id: req.params.id})
  
    message = await Message.findByIdAndUpdate({_id: req.params.id}, req.body, {
        new:true,
        runValidators:true
    })
    res.status(200).json({message: 'edit successful', message})
} catch (error) {
 return res.status(400).json({message: 'Message cannot be edited'})
   }

}

//do I need to use method override
exports.deleteMessage = async (req,res) =>{
   
    const deleteMessage = await Message.findByIdAndDelete({_id: req.params.id})
    // const deleteMessage = await Message.deleteOne()
}