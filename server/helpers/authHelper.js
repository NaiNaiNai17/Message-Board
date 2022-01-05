// const ensureAuth = (req,res,next) =>{
//   req.isAuthenticated() ? next() : res.redirect('/')
  
//   }
  
//   const ensureGuest = (req,res,next) =>{
//       if (req.isAuthenticated()){
//           res.redirect('/dashboard')
//       } else {
//           return next()
//       }
//   }
  
//   module.exports = { ensureAuth, ensureGuest}

// app.use(session({
//    secret: process.env.SESSION_SECRET,
//    resave: false,
//    saveUninitialized:false,
//    store: MongoStore.create({
//      mongoUrl:process.env.MONGO_URI,
     
//    })
   
//  }))