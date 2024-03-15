const express = require('express');


app.get('/add-product',(req,res,next)=>{            //handling only get request
    console.log("Third  Middle ware");  
    res.send('<h1> Add Product</h1> <form action="/productoutput" method="POST"> <input type="text" name="title" /> <input type="submit" value="submit" /> </form> ');  
    next();   
})

app.post('/productoutput',(req,res,next)=>{     //handling only post request
    console.log("Form data:" , req.body);  
    res.send(req.body)  
})



app.listen(3000)


