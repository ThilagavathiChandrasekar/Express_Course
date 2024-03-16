// npm run devStart --- this code is run the server
//Open developer Tools-Shortcut (Ctrl + Shift + i)


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

// const express = require('express');

// const app = express();

// app.use('/third',(req,res,next)=>{
//     console.log("Third  Middle ware");  
//     res.send('<h1> Third middle ware</h1>');    //Always specify the middleware in descending order
//     next();   
// })

// app.use('/second',(req,res,next)=>{
//     console.log("second middle ware");    
//     next();
//     res.send('<h1> Second Middleware</h1>');
// })

// app.use('/',(req,res,next)=>{
//     console.log("First middle ware");    
//     next();
//     res.send('<h1> First Middleware</h1>');
// })
// app.use((req,res,next)=>{
//     console.log("Always middle ware");    
//     next();
//     res.send('<h1> Always Middleware</h1>');   //If the path is not set it will always work middleware
// })
// app.listen(3000)



// --------------------------------------------------------------------------



// Parsing data from Request   &&     Handling only POST request
// ----------------------------


// const express = require('express');
// const bodyParser = require('body-parser');  //install body parser package and import here
// const app = express();


// app.use(bodyParser.urlencoded())

// app.get('/add-product',(req,res,next)=>{            //handling only get request
//     console.log("Third  Middle ware");  
//     res.send('<h1> Add Product</h1> <form action="/productoutput" method="POST"> <input type="text" name="title" /> <input type="submit" value="submit" /> </form> ');  
//     next();   
// })

// app.post('/productoutput',(req,res,next)=>{     //handling only post request
//     console.log("Form data:" , req.body);  
//     res.send(req.body)  
// })



// app.listen(3000)


// ------------------------------------------------------------------------------


//handling routes
//-----------------

// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// const shopRouts = require('./routes/shop');

// app.use(shopRouts);

// app.use(bodyParser.urlencoded())
// app.listen(3000)


// ---------------------------------------------------------------------


//screening non-existent route as "404 Page not found" 
// -------------------------------------------------

// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// const shopRouts = require('./routes/shop');

// app.use(shopRouts);

// app.use((req, res, next) => {
//     res.status(404).send("<h1>404 page not found</h1>")
// })

// app.use(bodyParser.urlencoded())
// app.listen(3000)


// -------------------------------------------------------------------------------------------------------



// Filtering paths/URL prefix
// --------------------------

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const shopRouts = require('./routes/shop');

app.use('/admin',shopRouts);

app.use((req, res, next) => {
    res.status(404).send("<h1>404 page not found</h1>")
})

app.use(bodyParser.urlencoded())
app.listen(3000)



