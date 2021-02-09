const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "root",
    port: "8889",
    database: "smeroviSrbijaSchema"
})

app.get("/sokobanja", (req, res) => {
    db.query("SELECT * FROM sokobanja_table", (err, result) => {
        if(err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

app.get("/beograd", (req,res) => {
    db.query("SELECT * FROM beograd_table", (err,result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(result)
        }
    })
})

app.get("/zajecar", (req,res) => {
    db.query("SELECT * FROM zajecar_table", (err,result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(result)
        }
    })
})

app.get("/uzice", (req,res) => {
    db.query("SELECT * FROM uzice_table", (err,result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(result)
        }
    })
})

app.listen(3001, () => {
    console.log("Yey, your server is running on port 3001");
  });