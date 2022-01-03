const bcrypt = require('bcrypt')
const User = require('../models/UserSchema')

exports.registerUser = async (req,res) =>{
    try {
        const hashedPassword = await bcrypt.hash(req.body.password,10)
        const user = new User(); //User.create()

        user.firstname = req.body.firstname;
        user.lastname = req.body.lastname;
        user.username = req.body.username;
        user.email = req.body.email;
        user.password = hashedPassword;

        await user.save()
        return res.status(200).json({message: 'user has been created', user})

    } catch (error) {
        return res.status(400).json({message:'There has been an issue creating user', error})
    }
}