var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burgers = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burgers.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burgers.create([
    "burger_name"
  ], [
    req.body.name
  ], function(result) {
    // Send back the ID of the new quote
    res.redirect("/");

  });

// res.end();
  
});


module.exports = router;