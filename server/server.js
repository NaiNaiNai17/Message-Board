const express = require('express')
const mongoose = require('mongoose')
// const MongoStore = require('connect-mongo')
const cors = require('cors')
const passport = require('passport')
// const session = require('express-session')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const methodOverride = require('method-override')
const userRoutes = require('./routes/userRoutes')
const messageRoutes = require('./routes/messageRoutes')


require('dotenv').config()

const app = express()

app.set('port', process.env.PORT || 4000)
app.use(logger('dev'));
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(methodOverride('X-HTTP-Method-Override'))
app.use(cors())
app.use(passport.initialize())

app.use(cookieParser())

 //Passport config
const initializePassport = require('./config/passport-config')
initializePassport(passport)


mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`
,{
   useNewUrlParser:true, 
   useUnifiedTopology:true,
})
.then(() => {console.log("we are connected to the database.")})
.catch((error) => { console.log('an error occurred while connecting ot the db', error)})



const PORT = process.env.PORT || 8000



app.use('/users',userRoutes)
app.use('/messages',messageRoutes)
app.listen(PORT, console.log(`server is running on ${PORT}`) )

