const jwt = require('jsonwebtoken')


exports.generateToken = (user) =>{
    return new Promise((resolve, reject) =>{

        jwt.sign({sub:user._id}, process.env.SECRET, {expiresIn: '20m'}, (err,asyncToken) =>{
            if(err) {
                reject(err)
                return;
            }

            resolve(asyncToken)
        })
    })
}