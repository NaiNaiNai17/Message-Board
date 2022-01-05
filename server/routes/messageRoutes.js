const express = require('express')
const passport = require('passport')

const router = express.Router();

const controller = require('../controller/messageController')

router.use(passport.authenticate('jwt', {
    session:false
}))
router.post('/post', controller.createMessage)
router.get('/list', controller.listMessages)
router.put('/:id', controller.updateMessage)

module.exports = router