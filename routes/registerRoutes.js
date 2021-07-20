const express = require("express")

const router =express.Router()

router.get("/",(req,res)=>{
    res.render('register_washer',{title:" Car Washer"})
})

router.get("/car",(req,res)=>{
    res.render("register_vehicle.pug",{title:"Car registry", routeName:"car"} )
})

router.get("/washer",(req,res)=>{
    res.render("register_washer.pug",{title:"Washer registry", routeName:"washer"})
})

router.get("/cost",(req,res)=>{
    res.render("register_expenses.pug",{title:"Cost registry", routeName:"cost"})
})

router.get("/user",(req,res)=>{
    res.render('register_user',{title:"User registry", routeName:"user"})
})

// post routes
router.post("/",(req,res)=>{
    console.log(req.body);
    res.send("This has been submitted");
})


module.exports = router

