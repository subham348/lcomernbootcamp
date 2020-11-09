var express = require('express');
var router = express.Router();

const { check, validationResult } = require('express-validator');

const {signout, signup, signin} = require("../controllers/auth");


//below code is copied to auth.js controllers

// const signout = (req, res) => {
//     res.json({
//         message: "user signout"
//     });
// };

// const signout = (req, res) => {
//     res.send("user signout success");
// };

router.post("/signup", [
    check("name").isLength({ min: 3 }).withMessage("name should be at least 3 char"),
    //same as above, can also be written like below.
  //check("name", "name should be at least 3 char").isLength({ min: 3 }),
    check("email").isEmail().withMessage("email is required"),
    check("password").isLength({ min: 3 }).withMessage('password should be at least 3 char')
], signup);


router.post("/signin", [
  check("email").isEmail().withMessage("email is required"),
  check("password").isLength({ min: 1 }).withMessage('password field is required')
], signin);


router.get("/signout", signout);

// router.get("/signout", (req, res) => {
//     res.send("user signout");
// });

module.exports = router;