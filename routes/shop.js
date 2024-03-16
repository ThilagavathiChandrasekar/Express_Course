//router is defined as "mini express method"                  line no = 183

//handling routes

// const express = require('express');
// const router =  express.Router();

// router.get('/first',(req,res,next) => {
//     res.send("<h1>First page</h1>")
// })
// router.get('/',(req,res,next) => {
//     res.send("<h1>Second page</h1>")
// })

// module.exports =router;


// ---------------------------------------------------------------------------------


//serving html files/building filepath
// ----------------------------------

const express = require('express');
const router =  express.Router();

const path = require('path');

router.get('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','shop.html'))
})

module.exports =router;
