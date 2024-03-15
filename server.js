// npm run devStart --- this code is run the server

const { response } = require("express")

// Server setup
// ------------
// const express = require ("express")
// const app = express()

// app.listen(3000)


// --------------------------------------------------------



//create http
// ----------
// const http = require('http');
// const express = require('express');

// const app = express();

// const server = http.createServer(app);
// server.listen(3000);


// -------------------------------------------------




// create middleware and use()
// ----------------------------

// const http = require('http');
// const express = require('express');

// const app = express();

// app.use((req,res,next)=>{
//     console.log("First Middle ware");  //first middle ware
//     next();   //call the next funtion and then server move on next middleware
// })

// app.use((req,res,next)=>{
//     console.log("second middle ware");    //second middle ware
//     next();
// })


// const server = http.createServer(app);
// server.listen(3000);



// ------------------------------------------------------



// sending response using send method
// -------------------------------------

// const http = require('http');
// const express = require('express');

// const app = express();

// app.use((req,res,next)=>{
//     console.log("First Middle ware");  //first middle ware
//     next();   //call the next funtion and then server move on next middleware
// })

// app.use((req,res,next)=>{
//     console.log("second middle ware");    //second middle ware
//     next();
//     // res.send('<h1> Hellow from express</h1>');
//     res.send({dinesh:'ram'})
// })


// const server = http.createServer(app);
// server.listen(3000);


// -----------------------------------------------------

// You can start the server with Listen()
// ------------------------------------

// const express = require('express');

// const app = express();

// app.use((req,res,next)=>{
//     console.log("First Middle ware");  //first middle ware
//     next();   //call the next funtion and then server move on next middleware
// })

// app.use((req,res,next)=>{
//     console.log("second middle ware");    //second middle ware
//     next();
//     // res.send('<h1> Hellow from express</h1>');
//     res.send({dinesh:'ram'})
// })

// app.listen(3000)       //start the server


// ----------------------------------------------------------


// Handling Differnt URLS / Routes
// -------------------------------

const express = require('express');

const app = express();

app.use((req,res,next)=>{
    console.log("First Middle ware");  
    next();   
})

app.use((req,res,next)=>{
    console.log("second middle ware");    
    next();
    res.send('<h1> Hellow from express</h1>');
})

app.listen(3000)

