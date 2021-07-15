const express = require("express")
const router = express.Router()

router.get("/",()=>{
    res.render('user')
})

module.exports=router