const { next } = require("cheerio/lib/api/traversing")
const express = require('express');
let fs = require('fs');
const app = express();


app.use(express.json())


    // .get(getUsers)
    // .post(bodyChecker , createUser);

// function createUser(req , res){
//     console.log('Creating Users');

//     let body = req.body;
//     console.log('req.body', req.body);
//     content.push(body);
//     fs.writeFileSync("./data.json", JSON.stringify(content));
//     res.json({message:content});
// }

// function bodyChecker(req,res,next){

//     console.log("reached body checker");
//     let isPresent = Object.keys(req.body).length;
//     console.log('isPresent', isPresent);

//     if(isPresent){
//         next();
//     }else{
//         res.send("Send Details")
//     }

// }

// function getUsers(req,res){
//     res.json({ message: content})
// }

app.listen(8081, function(){
    console.log("Run the Server")


app.post("/" ,function(req,res,next){

    let body = req.body;
    console.log("inside first post", body);
    next();

})
app.use(function(req,res,next){
    console.log("inside app.use");
    next();
})

app.get("/", function(req,res){
    
    let body = req.body;
    console.log("inside first get", body);

})
 
app.post("/", function(req, res , next){
    let body = req.body;
    console.log("inside seconf post" , body);
    res.send("tested next");
})

})