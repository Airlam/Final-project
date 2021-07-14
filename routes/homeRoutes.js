// require express
const express = require('express')

// creating router
const router= express.Router()

// routes
router.get("/",(req,res)=>{
    res.render('index')
})

// exprts router makes it accessible
module.exports = router