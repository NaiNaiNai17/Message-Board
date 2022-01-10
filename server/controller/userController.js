const bcrypt = require('bcrypt')
const User = require('../models/UserSchema')
const auth = require('../helpers/auth')

exports.registerUser = async (req,res) =>{

        const hashedPassword = await bcrypt.hash(req.body.password,10)
        const user = new User(); //User.create()
    try {
        user.firstname = req.body.firstname;
        user.lastname = req.body.lastname;
        user.username = req.body.username;
        user.email = req.body.email;
        user.password = hashedPassword;

        const existingUser = User.find({username:req.body.username})

        if(existingUser){
            throw 'User already exists'
        }
        
        await user.save()
        return res.status(200).json({message: 'user has been created', user})

    } catch (error) {
        return res.status(400).json({message:'There has been an issue creating user', error})
    }
}

exports.login = async (req,res) =>{
console.log(req.body)
        const user = await User.findOne({email:req.body.email})
    
    try {

        if(user === null){
            return res.status(404).json({message:'User with that email was not found'})
        }
        const checkPassword = await bcrypt.compare(req.body.password, user.password)

       if(checkPassword){
           const token = await auth.generateToken(user)

           return res.status(200).cookie('jwt', token, {
               httpOnly:true,
               secure:false,
               sameSite:'lax'
           }).send('user login successful')//.redirect('/users/messageboard')
       } else{
           return res.status(400).json({message: 'Password not matching'})
       }
    } catch (error) {
        console.log('error', error)
        return res.status(400).json({message: 'General error upon signing in'})
    }
}

exports.logout = async (req,res) =>{
   return res.clearCookie('jwt', {
        httpOnly:true,
        secure:false,
        sameSite:'lax'
    })
    .json({message: 'Logout successful'}) //.redirect('/')
}

