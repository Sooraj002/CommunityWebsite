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

app.get("/sign", (req, res) => {
    res.render("sign.ejs")
})

app.get("/log", (req, res) => {
    res.render("log.ejs")
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
app.post('/datasignin', function(req,res){

    let name=req.body.name;
    let email=req.body.email;
    let password=req.body.password;
    let regno=req.body.password;
    let year=req.body.year;
    res.write('You sent the name "' ,name,'".\n');
    res.write('You sent the email "' + req.body.email+'".\n');
    res.write('You sent the username "' + req.body.username+'".\n');
    res.write('You sent the username "' + req.body.username+'".\n');
    res.write('You sent the username "' + req.body.username+'".\n');
    
    con.connect(function(err) {
    if (err) throw err;
    // let sql = "INSERT INTO users (name, email,description) VALUES ('"+name+"', '"+email+"','"+username+"')";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
       res.end();
    });
    });
  })
  

data =[]


// try{
    
// q = `insert into users values(?,?,?,?,?)`

// connection.query(q, data ,(err, result) => {
//     if (err) throw err;
//     console.log(result);
// });
// }catch (err){
// console.log(err);
// }

app.listen("8080", () => {
    console.log("Server is running")
});