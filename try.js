console.log("success");

// const greet=(name)=>{
//     console.log(`Hello ${name}, how are you?`);
// }

// greet("lambert")

// const intro =(fname,lname,callback)=>{
//     fullName =`${fname} ${lname}`
//     greet(fullName)
// }

// intro("Lambert","Ahebwa",greet)

// Promise for a date
// const weather = true
// const date=new Promise((resolve,reject)=>{
//     if (weather) {
//         const dateDetails={
//             name:'KaFaCa',
//             location:'acacia avenue',
//             table:2
//         }
//         resolve(dateDetails)
//     }else{
//         reject(new Error("Bad weather, no date"))
//     }
// })

// const orderUber = (dateDetails)=> {
//     const message = `Get me an Uber ASAP to ${dateDetails.location}, we are going on a date!`;

//     return Promise.resolve(message)

//   }

// const myDate = () =>{
//     date 
//         .then(orderUber)
//         .then((done)=>{
//             console.log("We're going on a date.");
//             console.log(done);
//         })
//         .catch((error)=>{
//             console.log(error.message);
//         })
// }

// myDate()


const promise = new Promise((resolve,reject)=>{
    setTimeout(() => {
        // console.log("Got user");
        // resolve ({user:"lambert"})
        reject(new Error("User not logged in!!!"))
    }, 1000);
})

promise
    .then((user)=>{
        console.log(user.user);
    })
    .catch(err =>{
        console.log(err.message);
    })