const express = require("express")

const router =express.Router()

router.get("/",(req,res)=>{
    res.render('register_washer',{title:" Car Washer"})
})

router.get("/user",(req,res)=>{
    res.render("user")
})

router.get("/car",(req,res)=>{
    res.render("register_vehicle.pug")
})

router.get("/washer",(req,res)=>{
    res.render("register_washer.pug")
})

router.get("/cost",(req,res)=>{
    res.render("register_expenses.pug")
})

router.get("/user",(req,res)=>{
    res.render('registerUser')
})

// post routes
router.post("/",(req,res)=>{
    console.log(req.body);
    res.send("This has been submitted");
})


module.exports = router

