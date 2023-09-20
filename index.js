const mysql = require('mysql2');
const express = require("express");
const app = express();
const path = require("path");
app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234'
});

app.get("/", (req, res) => {
    res.render("index.ejs")
})

app.get("/home", (req, res) => {
    res.render("home.ejs")
})

app.get("/log", (req, res) => {
    res.render("log.ejs")
})

app.get("/sign", (req, res) => {
    res.render("sign.ejs")
})

app.get("/mate", (req, res) => {
    res.render("mate.ejs")
})

app.get("/group", (req, res) => {
    res.render("group.ejs")
})

app.get("/travel", (req, res) => {
    res.render("travel.ejs")
})

app.get("/study", (req, res) => {
    res.render("study.ejs")
})

app.listen("8080", () => {
    console.log("Server is running")
});