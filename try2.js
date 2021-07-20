// const { Logger } = require("mongodb");

// console.log("start");

// setTimeout(() => {
//     console.log("mid");
// }, 2000);

// console.log("end");

const names =(first,second)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(`${first} ${second}`)
        }, 1000);
    })
   
}

const video =(first,second)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve([first,second])
        }, 3000)
    })
}

names("Ahebwa","Lambert")
    .then(user=>{
        console.log(user);
    })

// fullName=name("Ahebwa","Lambert",(param)=>{
//     console.log(param);
//     video(1,2,(param)=>{
//         console.log(param);
//     })
// })

// console.log(fullName);