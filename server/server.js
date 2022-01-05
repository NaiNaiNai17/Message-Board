const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const passport = require('passport')
const logger = require('morgan')
const userRoutes = require('./routes/userRoutes')

require('dotenv').config()

const app = express()

app.set('port', process.env.PORT || 4000)
app.use(logger('dev'));
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(cors())

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`
,{
   useNewUrlParser:true, 
   useUnifiedTopology:true,
})
.then(() => {console.log("we are connected to the database.")})
.catch((error) => { console.log('an error occurred while connecting ot the db', error)})

const PORT = process.env.PORT || 8000



app.use('/users',userRoutes)
app.listen(PORT, console.log(`server is running on ${PORT}`) )

