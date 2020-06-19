/*
*   PI-Server: PIS
*/

/*
*   Config
*/
var path = require("path");

var express = require("express");
var port = process.env.port || 3000;

var pug = require("pug");

var app = express();
app.use(express.static(path.join(__dirname, "pub")));
app.set("view engine", "pug");

require("dotenv").config();

/*
*   Routing
*/
app.get("/", (req, res) => {
    res.render(path.join(__dirname, "pub/landing_page.pug"), { name: "Ben" });
});

/*
*   Listen
*/
app.listen(port, () => {
    console.log("PI-Server started on " + port);
});