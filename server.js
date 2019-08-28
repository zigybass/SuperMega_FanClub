// Dependencies====================================================================================
const express = require("express");


// Sets up the Express App=========================================================================
const app = express();
const PORT = process.env.PORT || 8080;

// Requiring our models for syncing
<<<<<<< HEAD
var db = require("../models");
=======
const db = require("./models");
>>>>>>> b9aa1eb976631cf55edae25b293045f3df3de62b

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory to be served
app.use(express.static("app/public"));


// Routes=========================================================================================
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);


// Syncing our sequelize models and then starting our Express app=================================
db.sequelize.sync({ force: true }).then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});
