 const path = require("path");

 module.exports = function(app){
    app.get("/", function(req,res){
        res.sendFile(path.join(__dirname, "../public/index.html"))
    })

    app.get("/login", function(req,res){
        res.sendFile(path.join(__dirname, "../public/login.html"))
    })

    app.get("/create", function(req,res){
        res.sendFile(path.join(__dirname, "../public/createAccount.html"))
    })

    app.get("/sport", function(req,res){
        res.sendFile( path.join(__dirname, "../public/sport.html"))
    })
    app.get("/user", function(req,res){
        const userId = req.query.id;
        // if(userID === req.user.id){

        // }
        console.log(userId);
        res.sendFile( path.join(__dirname, "../public/userPortal.html"))
    })
 }