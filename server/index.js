const express = require ('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const PORT = 3001;

const { encrypt, decrypt } = require("./CryptoHandler")

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "Glevy97!",
    database: "PasswordManagementSystem",

});

// Retrieves passwords from the front end and stores them
app.post('/addpassword', (req, res) => {
    const {password, title} = req.body;
    const cryptoPw = encrypt(password);

    db.query(
        "INSERT INTO passwords (password, title, iv) VALUES (?,?,?)", 
        [cryptoPw.password, title, cryptoPw.iv],
        (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send("Success");
        }
    });
});



app.listen(PORT, ()=> {
    console.log('Server is running');
});