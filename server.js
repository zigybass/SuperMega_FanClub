// Dependencies====================================================================================
const express = require("express");


// Sets up the Express App=========================================================================
const app = express();
const PORT = process.env.PORT || 8080;
const path = require('path');


// Requiring our models for syncing
const db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory to be served
app.use(express.static("./public"));


// Routes=========================================================================================
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);


// Syncing our sequelize models and then starting our Express app=================================
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});
