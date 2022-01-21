const { Schema, model } =require('mongoose')

const userSchema = new Schema({
    firstname:{type:String, required:true},
    lastname:{type:String, required:true},
    username:{type:String, required:true, unique:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    roles: {type:String,
    enum: ['customer', 'admin']}
})

const User = model('User', userSchema)

module.exports= User