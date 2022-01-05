const {Schema, model} = require('mongoose')


const MessageSchema = new Schema({
    subject:{type:String, required: true},
    text:{type:String, required:true},
    createdOn:{type:Date, default:Date.now()}

})


const Message = model('Message', MessageSchema)

module.exports = Message