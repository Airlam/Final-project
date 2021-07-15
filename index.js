// Dependecies
const express = require('express')
const bodyParser = require('body-parser')
const homeRoutes=require("./routes/homeRoutes.js")
const registerRoutes=require("./routes/registerRoutes.js")
const userRoutes=require("./routes/userRoutes.js")

//Instantiations
const app = express()


// Configurations
app.set('view engine', 'pug')
app.set('views', './views')



// Middleware 
app.use(express.static(__dirname+"/public"))
app.use(express.urlencoded({extended: true}))
app.use(bodyParser.urlencoded({extended:true}))


// Routes
app.use("/",homeRoutes)
app.use("/register",registerRoutes)
app.use("/user",userRoutes)


// handle non existing routes
app.get('*', (req, res)=> {
    res.status(404).send('This is an invalid URL')
})

// Server 
app.listen(3000, ()=>{
    console.log("listening in on port 3000!");
})