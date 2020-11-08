var express = require('express');
var router = express.Router();

const {signout, signup} = require("../controllers/auth");


//below code is copied to auth.js controllers

// const signout = (req, res) => {
//     res.json({
//         message: "user signout"
//     });
// };

// const signout = (req, res) => {
//     res.send("user signout success");
// };

router.post("/signup", signup);

router.get("/signout", signout);

// router.get("/signout", (req, res) => {
//     res.send("user signout");
// });

module.exports = router;