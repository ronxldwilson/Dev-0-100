const express = require("express");

const port = 3000;

app.get('/',function(req,res){
    res.send("Hello World");
})

app.listen(port, function(){
    console.log(`App listening on port ${port}`)
})
