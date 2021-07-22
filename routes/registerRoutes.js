const express = require("express")
const mongoose=require("mongoose")
const Vehicle = require("../models/Vehicle")
const Washer = require("../models/Washer")
const Expense = require("../models/Expense")
// const Manager = require("../models/Manager")
const User = require("../models/User")

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
const msg="THIS form has been submitted"

router.post("/vehicle",(req,res)=>{
    console.log(req.body);
        // savingto the database
    const vehicle =new Vehicle(req.body)
    vehicle.save()
        .then(()=>{
            res.send(msg);
        })
        .catch((err)=>{
            console.log(err);
            res.send('This has NOT been submitted because of an error');
            
        })
})

// router.post("/manager",(req,res)=>{
//     console.log(req.body);
//         // savingto the database
//     const manager =new Manager(req.body)
//     manager.save()
//         .then(()=>{
//             res.send(msg);
//         })
//         .catch((err)=>{
//             console.log(err);
//             res.send('This has NOT been submitted because of an error');
            
//         })
// })

router.post("/washer",(req,res)=>{
    console.log(req.body);

    // savingto the database
    const washer =new Washer(req.body)
    washer.save()
        .then(()=>{
            res.send(msg);
        })
        .catch((err)=>{
            console.log(err);
            res.send('This has NOT been submitted because of an error');
            
        })

})

router.post("/expenses",(req,res)=>{
    console.log(req.body);
    const expense =new Expense(req.body)
    expense.save()
        .then(()=>{
            res.send(msg);
        })
        .catch((err)=>{
            console.log(err);
            res.send('This has NOT been submitted because of an error');
            
        })
})

router.post("/user",(req,res)=>{
    console.log(req.body);
    const user =new User(req.body)
    user.save()
        .then(()=>{
            res.send(msg);
        })
        .catch((err)=>{
            console.log(err);
            res.send('This has NOT been submitted because of an error');
            
        })
})


module.exports = router

