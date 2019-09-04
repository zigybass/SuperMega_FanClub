// Dependencies====================================================================================
const express = require("express");
const path = require("path");
// const passport = require("passport")
// const session = require("express-session");
// const LocalStrategy = require("passport-local").Strategy;


// Sets up the Express App=========================================================================
const app = express();
const PORT = process.env.PORT || 8080;
// const path = require('path');


// Requiring our models for syncing
const db = require("./models");

// Express Session
// app.use(session({
//     secret: "secret",
//     saveUninitialized: true,
//     resave: true
// }))

// Passport init
// app.use(passport.initialize());
// app.use(passport.session());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory to be served
app.use(express.static("./public"));


// //
// passport.use(new LocalStrategy(
//     function (username, password, done) {

//         User.findOne({
//             where: {
//                 username: username
//             }
//         }).then(user => {
//             if (user) {
//                 const valid = user.validatePassword(password);
//                 console.log("User found");

//                 if (valid) return done(null, user);

//                 return done(null, false);
//             } else {
//                 done(null, false)
//             }
//         })
//     }
// // ))

// passport.serializeUser( function (user, done) {
//     console.log(user);
//     done(null, user);
// });

// passport.deserializeUser( function (user, done) {
//     done(null, user)
// })



// Routes=========================================================================================
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// app.post('/login', 
//     passport.authenticate('local', {
//         successRedirect: '/',
//         failureRedirect: '/login',
//         failureFlash: true
//     })
// )


// Syncing our sequelize models and then starting our Express app=================================
db.sequelize.sync({}).then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});
