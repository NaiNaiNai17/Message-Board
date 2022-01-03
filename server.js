const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const passport = require('passport')

dotenv.config()
const app = express()

app.set('port', process.env.PORT || 4000)

app.use(express.urlencoded({extended:true}))
app.use(express.json())

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`
,{
   useNewUrlParser:true, 
   useUnifiedTopology:true,
})
.then(() => {console.log("we are connected to the database.")})
.catch((error) => { console.log('an error occurred while connecting ot the db', error)})