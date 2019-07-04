const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.send("bienvenue sur le back-end du site vitrine");
});

app.listen(8081, function(){
    console.log("back-end running on port 8081");
});

