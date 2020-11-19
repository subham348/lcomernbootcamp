const express = require("express");
const router = express.Router();

const {getUserById, getUser, updateUser} = require("../controllers/user");
// const {getUserById, getUser, getAllUsers} = require("../controllers/user");
const {isSignedIn, isAuthenticated, isAdmin} = require("../controllers/auth");

router.param("userId", getUserById);

router.get("/user/:userId", isSignedIn, isAuthenticated, getUser);

router.put("/user/:userId", isSignedIn, isAuthenticated, updateUser);

// getAllUsers was an assignment to get all users at once
// router.get("/users", getAllUsers);

module.exports = router;

