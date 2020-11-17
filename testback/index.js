const express = require("express");

const app = express();


const port = 8000;

app.get("/", (req, res) => {
    return res.send("hello there");
});

const admin = (req, res) => {
    return res.send("this is admin dashboard");
};

const isAdmin = (req, res, next) => {
    console.log("isAdmin is running");
    next();
};

const isLoggedIn = (req, res, next) => {
    console.log("loggedIn in admin");
    next();
};

app.get("/admin", isAdmin, isLoggedIn, admin);

app.get("/logout", (req, res) => {
    return res.send("You are logged out from route");
});

app.get("/login", (req, res) => {
    return res.send("You are visiting login route");
});

app.get("/signup", (req, res) => {
    return res.send("You are visiting signup route");
});

app.listen(port, () => {
    console.log("Server is up and running...");
});

app.get("/subham", (req, res) => {
    return res.send("hello subham");
});

// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })