const express = require("express")

const router =express.Router()

router.get("/",(req,res)=>{
    res.render('register_washer',{title:" Car Washer"})
})

router.get("/user",(req,res)=>{
    res.render("user")
})

module.exports = router

